export async function POST(req){
    const {name, message} = await req.json();
    if(!message){
        return Response.json({success: false, error: "Message error"})

    }
    
}