import { webhook } from "svix";
import User from "../models/User.js";

//API COntroller Function to manage Clerk user with database
export const clerkWebhooks = async (req, res) => {
    try{

        // 
        const whook = new webhook (process.env.CLERK_WEBHOOK_SECRET)

        await whook.verfiy(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp" : req.headers["svix-timestamp"],
            "svix-signature" : req.headers["svix-signature"]
        })

        

    }catch(error){

    }
}