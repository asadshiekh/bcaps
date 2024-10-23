import React from 'react'
import Footer from '../global/footer'
import Header from '../global/header'
import Link from 'next/link';

const RefundPolicy = () => {
  return (
    <>
    <Header />
    <div className="contact-banner border border-b-2 px-4 pt-[150px] pb-[70px]">
        <div className="container mx-auto">
            <div className="block md:flex items-center justify-between">
                <div>
                <h4 className="text-2xl md:text-4xl font-semibold">Cancellation and Refund Policy</h4>
                <p className='mt-4'>and thank you for visiting us and giving the opportunity to serve you!</p>
                </div>
                <div>
                <ul className="flex space-x-3 text-gray-500 mt-4">
                    <li><Link href="/" className='hover:text-gray-700'>Home</Link></li>
                    <li>/</li>

                    <li><Link href="/refund-policy" className='hover:text-gray-700'>Cancellation and Refund Policy</Link></li>
                </ul>
                </div>
            </div>
        </div>
    </div> 

    <main className="container mx-auto p-6 bg-white">
        <p className="mb-4">
            All change or cancellation requests for any services purchased or booked must be informed to the customer service via
        </p>
        <ol className="list-disc ml-10 mb-4 space-y-4">
            <li>Email to <Link href="mailto:bcabs@bintel.com" className='text-[#ed2124]'>bcabs@bintel.com</Link></li>
            <li>Call to +919895118877</li>
            <li>Whatsapp to +919895118877</li>
        </ol>
        <p className="mb-4">
            Our cancellation and refund policy is as below:
        </p>
        <p className="mb-4">
            <strong><u>For Taxi Services (Other than Multi Day Packages, Travellers and Bus):</u></strong> No cancellation charges if cancelled at least 24 hours prior to the pickup time
        </p>

        <h3 className="text-lg font-bold mt-4 mb-4">For Tour Packages, Multi Day Packages, Traveller & Bus Bookings:</h3>
        <p className="mb-4">
            Stage 1: 30 Days or more before Check-In/Arrival Date: Rs.2,000/- would be retained.
        </p>
        <p className="mb-4">
            Stage 2: 29 Days to 15 days before Check-In/Arrival Date: 25% of the total cost would be retained.
        </p>
        <p className="mb-4">
            Stage 3: Within 14 Days of Check-In/Arrival Date: 50% of the total cost would be retained.
        </p>
        <p className="mb-4">
            Refund: The refund amount as per the above cancellation policy shall be processed within 15 days.
        </p>

        <h3 className="text-lg font-bold mt-4 mb-4">Information we collect</h3>
        <p className="mb-4">
            Eligible refunds will be processed in 15 working days and will be made in the same mode of payment made. Refunds to credit, debit cards or bank accounts may take up to a further 7 working days to appear on your account depending on the card or bank. Some payment cards and accounts may take more days as per the concerned bank's policies, thereafter to display the credited amount.
        </p>
        
    </main>

    <Footer />
    </>
  )
}

export default RefundPolicy