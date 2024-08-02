import nodemailer from "nodemailer";

// Create a Nodemailer transporter using Mailtrap
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587, // or 465 for SSL
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  const { firstname, lastname, email, phone, service, message } = data;

  const mailOptions = {
    from: email,
    to: "hamad@gmail.com", // Replace with the recipient's email
    subject: "Contact Form Submission",
    html: `
      <h1>Contact Form Submission</h1>
      <p><strong>First Name:</strong> ${firstname}</p>
      <p><strong>Last Name:</strong> ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
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
