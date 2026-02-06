import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTest() {
    try {
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "ad120365.anshuprakash@gmail.com", // Trying the user's likely email
            subject: "Test Email",
            html: "<p>Test</p>",
        });

        if (error) {
            console.error("Resend Error:", error);
        } else {
            console.log("Success:", data);
        }
    } catch (err) {
        console.error("Script Error:", err);
    }
}

sendTest();
