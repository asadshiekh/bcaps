// Import the dotenv package to load .env files (if using locally)
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_FROM_NAME: process.env.SMTP_FROM_NAME,
    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL,
    SMTP_TO_EMAIL: process.env.SMTP_TO_EMAIL,
  },
};

export default nextConfig;
