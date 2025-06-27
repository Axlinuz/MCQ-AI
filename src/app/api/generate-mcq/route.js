import OpenAI from "openai";

export async function POST(request) {
  const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.NEXT_PUBLIC_AI_API_KEY,
    dangerouslyAllowBrowser: true,
    defaultHeaders: {},
  });

  try {
    const { userPrompt } = await request.json(); // Get the prompt from the request body

    if (!userPrompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-001",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Create a MCQ with 4 options and 1 correct answer. 
              do not add instruction, return only in json object
              no variable declaration or extra text
              options should be given the value "option". not "text" or anything else.
              each answer should have a boolean of correctAnswer of true or false
              only one correct answer
              remove the text "json" at the beginning of your response
              : ${userPrompt}`,
            },
          ],
        },
      ],
    });

    if (completion.choices && completion.choices.length > 0) {
      const responseData = completion.choices[0].message.content;
      const cleanResponse = responseData.replace(/```(json)?/g, "").trim();

      try {
        const responseObject = JSON.parse(cleanResponse);
        // You might want to shuffle options on the client-side,
        // or here if you prefer. For simplicity, we'll return raw for now
        // and let the client shuffle.
        return new Response(JSON.stringify(responseObject), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (jsonError) {
        console.error("JSON Parsing Error in API Route:", jsonError);
        return new Response(
          JSON.stringify({
            error:
              "Failed to parse AI response. Please try again or refine prompt.",
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    } else {
      console.error("OpenRouter API Response (No choices):", completion);
      return new Response(
        JSON.stringify({ error: "Failed to get a valid response from AI." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("API Route error:", error);
    // Be careful not to expose sensitive error details to the client
    return new Response(
      JSON.stringify({
        error: "An error occurred while generating the quiz. Please try again.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
