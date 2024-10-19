import dotenv from 'dotenv';
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
    numberOfPassengers,
    preferredModel,
    pickupLocation,
    dropLocation,
    airport,
    flightNumber,
    dropDate,
    itinerary
  } = await request.json();

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const username = process.env.SMTP_USER;
  const password = process.env.SMTP_PASS;
  const smtp_name = process.env.SMTP_FROM_NAME;
  const smtp_from_email = process.env.SMTP_FROM_EMAIL;
  const smtp_to_email = process.env.SMTP_TO_EMAIL;

  // Create a transporter using your Mailtrap email configuration from environment variables
  const transporter = nodemailer.createTransport({
    host: host, // Use Mailtrap SMTP server
    port: port, // Use Mailtrap SMTP port
    secure: false, // Set to true for port 465, false for other ports
    auth: {
      user: username, // Use Mailtrap username
      pass: password, // Use Mailtrap password
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates (optional)
    },
  });

  // Build the email body
  const emailBody = [
    `*New Reservation Request*`,
    `\nName: ${name || 'N/A'}`,
    `Email: ${email || 'N/A'}`,
    `Phone: ${phone || 'N/A'}`,
    `WhatsApp: ${whatsapp || 'N/A'}`,
    `Pickup Date: ${pickupDate || 'N/A'}`,
    `Vehicle Type: ${vehicleType || 'N/A'}`,
    `Trip Type: ${tripType || 'N/A'}`,
    `Number of Passengers: ${numberOfPassengers || 'N/A'}`,
    `Preferred Model: ${preferredModel || 'N/A'}`,
    `Pickup Location: ${pickupLocation || 'N/A'}`,
    `Drop Location: ${dropLocation || 'N/A'}`,
    `Airport: ${airport || 'N/A'}`,
    `Flight Number: ${flightNumber || 'N/A'}`,
    `Drop Date: ${dropDate || 'N/A'}`,
    `Itinerary: ${itinerary || 'N/A'}`
  ].filter(line => !line.includes('N/A') || line.split(': ')[1] !== 'N/A').join('\n');

  // Set up email data
  const mailOptions = {
    from: `${smtp_name} <${smtp_from_email}>`,
    to: smtp_to_email, // Use environment variable for recipient's email address
    subject: 'New Reservation Request', // Subject line
    text: emailBody, // Styled email body
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
