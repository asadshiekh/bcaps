// src/app/api/bookNow.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  const {
    name,
    email,
    phone,
    whatsapp,
    pickupDate,
    vehicleType,
    tripType,
  } = await request.json();

  // Create a transporter using your Mailtrap email configuration from environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Use Mailtrap SMTP server
    port: Number(process.env.SMTP_PORT), // Use Mailtrap SMTP port
    secure: false, // Set to true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Use Mailtrap username
      pass: process.env.SMTP_PASS, // Use Mailtrap password
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates (optional)
    },
  });

  // Set up email data
  const mailOptions = {
    from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`, // Sender address
    to: process.env.SMTP_TO_EMAIL, // Use environment variable for recipient's email address
    subject: 'New Reservation Request', // Subject line
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWhatsApp: ${whatsapp}\nPickup Date: ${pickupDate}\nVehicle Type: ${vehicleType}\nTrip Type: ${tripType}`, // Plain text body
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
