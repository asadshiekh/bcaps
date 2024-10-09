
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
    host: 'sandbox.smtp.mailtrap.io', // Mailtrap SMTP server
    port: 587, // Mailtrap SMTP port
    secure: false, // Set to true for port 465, false for other ports like 587
    auth: {
      user: '0a30a9945c4d10', // Mailtrap username
      pass: '85a0eb664373b0', // Mailtrap password
    },
    tls: {
      rejectUnauthorized: false, // Optional: Allow self-signed certificates
    },
  });

  // Set up email data
  const mailOptions = {
    from: '"Your Name" <asad@globalweb.ae>', // Sender's email and name
    to: 'asadshiekh9@gmail.com', // Recipient email
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
