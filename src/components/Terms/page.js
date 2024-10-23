import React from 'react';
import Header from '../global/header';
import Footer from '../global/footer';
import Link from 'next/link';

function Terms() {
  return (
    <>
      <Header />

      <div className="contact-banner border border-b-2 px-4 pt-[150px] pb-[70px]">
        <div className="container mx-auto">
          <div className="block md:flex items-center justify-between">
                <div>
                <h4 className="text-2xl md:text-4xl font-semibold"> Welcome to BCabs Ride Easy...</h4>
                <p className='mt-4'>and thank you for visiting us and giving the opportunity to serve you!</p>
                </div>
                <div>
                <ul className="flex space-x-3 text-gray-500 mt-4">
                    <li><Link href="/" className='hover:text-gray-700'>Home</Link></li>
                    <li>/</li>

                    <li><Link href="/terms" className='hover:text-gray-700'>Terms and Conditions</Link></li>
                </ul>
                </div>
          </div>
        </div>
    </div> 
   

      <main className="container mx-auto p-6 bg-white">
        <h1 className="text-3xl font-medium mb-6">
          When you use our services, you're agreeing to our terms. So please take a few minutes to read over the below mentioned Terms and Conditions.
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">PLEASE READ THESE USER TERMS CAREFULLY BEFORE AVAILING/OR USING OUR WEBSITE/SERVICES.</h2>

        <h3 className="text-lg font-bold mt-4 mb-2">DEFINITIONS:</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>'Vehicle' shall mean any vehicle / cab / taxi to be provided to the Customer for performance of the Services.</li>
          <li>'BCabs' shall hereinafter individually and collectively mean BTransport Solutions Private Limited. This expression includes the Employees, Authorized Representatives, Customer Care Executives or Representatives, Agents, etc.</li>
          <li>'You' or 'Your' shall mean any person availing the Services provided by BCabs.</li>
        </ul>

        <h3 className="text-lg font-bold mt-4 mb-2">Use of the Website/Service</h3>
        <p className="mb-4">
          As a condition of your use of our website/service, you warrant that:
        </p>
        <ol className="list-decimal ml-6 mb-4">
          <li>you are over 18 years old</li>
          <li>you can create and uphold a legal obligation</li>
          <li>you will use this Website/Service in accordance with this Agreement</li>
          <li>you will only use this Website to make legitimate travel/taxi reservations for yourself or for another person who is at least 18 years of age and for whom you are legally authorized to act</li>
          <li>all information supplied by you on this Website or to our call center or on our Whatsapp is true, accurate, current, and complete</li>
        </ol>

        <p>We retain the right at our sole discretion to deny access to anyone to this Website and the services we offer, at any time and for any reason, including, but not limited to, for violation of this Agreement.</p>

        <h3 className="text-lg font-bold mt-4 mb-2">Prohibited Activities</h3>
        <p className="mb-4">
          The Website (including, but not limited to, price and availability of travel/taxi services), as well as the infrastructure used to provide such content and information, is proprietary. While limited copies of your itinerary may be made for travel or services booked through this Website, you agree not to otherwise modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, sell or re-sell any information, software, products, or services obtained from or through this Website/E-mail/Whatsapp.
        </p>
        <p className="mb-4">
          You understand that any violations of this clause may result in the cancellation of your reservation(s), in being denied access to the applicable travel product or services, in your forfeiting any monies paid for such reservation(s), and/or in our debiting your account for any costs we incur because of these violation(s).
        </p>

        <h3 className="text-lg font-bold mt-4 mb-2">Payment Policy</h3>
        <p className="mb-4">
          We accept online payments on this Website. You warrant that you are the cardholder for all online payments made using credit/debit cards, and that your identification (Cardholder ID) matches that of the purchasing credit/debit card. You also agree to supply proof of Cardholder ID upon request at any time within six months of your purchase. Any violation of this policy may result in the cancellation of your reservation(s), in a refusal of access to applicable travel products or services, in forfeiting any monies paid for such reservation(s), and/or in our debiting your account for any costs we incur for violation(s).
        </p>

        <h3 className="text-lg font-bold mt-4 mb-2">Change and Cancellation Policy</h3>
        <p className="mb-4">
          All change or cancellation requests for any services purchased or booked must be informed to the customer service via
        </p>

        <ol className="list-decimal ml-6 mb-4">
          <li>Email to <Link href="mailto:bcabs@bintel.com">bcabs@bintel.com</Link></li>
          <li>Call to <Link href="tel:+919895118877">+919895118877</Link></li>
          <li>WhatsApp to <Link href="tel:+919895118877">+919895118877</Link></li>
        </ol>

        <p className='mb-4'>Our cancellation and refund policy is as below:</p>

        <p className='mb-4'><span className='underline font-bold'>For Taxi Services:</span> No cancellation charges if cancelled at least 6 hours prior to the pickup time. For multi-day packages, the fare for the first day will be charged if cancelled less than 6 hours before scheduled pick-up time.</p>

        <h3 className="text-lg font-bold mt-4 mb-2">For Tour Packages & Other Bookings:</h3>
        <ol className="list-decimal ml-6 mb-4">
          <li>Stage 1: 30 Days or more before Check-In/Arrival Date: Rs.1,900/- would be retained.</li>
          <li>Stage 2: 29 Days to 15 days before Check-In/Arrival Date: 25% of the total cost would be retained.</li>
          <li>Stage 3: Within 14 Days of Check-In/Arrival Date: 50% of the total cost would be retained.</li>
          <li>Refund: The refund amount as per the above cancellation policy shall be processed within 15 days.</li>
        </ol>

        <h3 className="text-lg font-bold mt-4 mb-2">Refund Policy</h3>
        <p className="mb-4">
          Eligible refunds will be processed back through the same method of payment used for booking. Refunds may take up to 10 business days to process and show in your account, depending on your bank or credit card company.
        </p>

        <h3 className="text-lg font-bold mt-4 mb-2">Disclaimer</h3>
        <p className="mb-4">The information provided on the Website is intended to be accurate. However, we assume no responsibility for any errors or omissions in the content of the Website.</p>

        <h3 className="text-lg font-bold mt-4 mb-2">Limitation of Liability</h3>
        <p className="mb-4">In no event shall BCabs be liable for any indirect, incidental, or consequential damages arising from the use of the services or any information provided on the Website.</p>

        <h3 className="text-lg font-bold mt-4 mb-2">Governing Law</h3>
        <p className="mb-4">These terms shall be governed by the laws of [Your Country/Region].</p>

        <h3 className="text-lg font-bold mt-4 mb-2">Contact Us</h3>
        <p className="mb-4">If you have any questions about these terms, please contact us at: <Link href="mailto:bcabs@bintel.com" className='text-[#ed2124]'>bcabs@bintel.com</Link> or <Link href="tel:+919895118877">+919895118877</Link></p>
      </main>

      <Footer />
    </>
  );
}

export default Terms;
