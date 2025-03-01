import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true for port 465, false for other ports like 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your authenticated email
      replyTo: email, // Set the user's email as the reply-to address
      to: "loopvault.defi@gmail.com", // Your email address
      subject: `LoopVault Mail: ${subject}`, // Use the subject provided
      text: `From: ${email}\n\n${message}`, // Include the user's email in the body of the email
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending email." },
      { status: 500 }
    );
  }
}
