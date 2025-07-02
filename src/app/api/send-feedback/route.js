import nodemailer from "nodemailer";

export async function POST(req) {
  const { sender, message } = await req.json();
  if (!message || !sender) {
    return Response.json({
      success: false,
      error: "Please make sure to fill in the required information.",
    });
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: sender,
    to: "xalian2020@gmail.com",
    subject: `Feedback receieved from ${sender}`,
    text: `Feedback: ${message} \n \nMCQ-AI feedback automation`
  }

  try{
    await transport.sendMail(mailOptions);
    return Response.json({success: true})
  }catch(e){
    return Response.json({success: false, status: 500, error: "Failed to send feedback"})
  }
}
