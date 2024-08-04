import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to replace placeholders in the HTML template with actual data
const getEmailHtml = (data) => {
  const filePath = path.resolve("templates", "email.html");
  let template = fs.readFileSync(filePath, "utf8");

  // Replace placeholders with actual data
  template = template
    .replace("{firstname}", data.firstname || "")
    .replace("{lastname}", data.lastname || "")
    .replace("{email}", data.email || "")
    .replace("{phone}", data.phone || "")
    .replace("{service}", data.service || "")
    .replace("{message}", data.message || "");

  return template;
};

export async function POST(req) {
  console.log({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.EMAIL_USER,
  });
  const data = await req.json();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    cc: process.env.EMAIL_USER,
    subject: "Contact Form Submission",
    html: getEmailHtml(data),
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Error sending email" }), {
      status: 500,
    });
  }
}
