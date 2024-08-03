import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Create a Nodemailer transporter using Mailtrap
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587, // or 465 for SSL
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
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
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  });
  const data = await req.json();
  console.log(data);

  const mailOptions = {
    from: "hamad.seersol@gmail.com",
    to: data.email,
    cc: "hamad.seersol@gmail.com",
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
