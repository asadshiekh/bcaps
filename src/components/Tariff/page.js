import React from 'react'
import Link from 'next/link'
import Header from '../global/header'
import Footer from '../global/footer'

const Tariff = () => {
  return (
    <div>
        <Header />
        {/* banner section */}
        <div className="contact-banner border border-b-2 py-10">
            <div className="container mx-auto">
                <div className="block md:flex items-center justify-between">
                    <div>
                        <h4 className="text-2xl font-semibold">Kochi Taxi Tariff</h4>
                    </div>
                    <div>
                        <ul className="flex space-x-3 text-gray-500">
                            <li><Link href="#">Home</Link></li>
                            <li>/</li>
                            <li><Link href="#">Tariff</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* rates section start */}
        <div className="rates-sec py-10">
            <div className="container mx-auto">
                <p className="mb-3">
                    <strong>Point to Point Billing: </strong>
                    Pickup and Drop should be within Kochi City Limits (OR) Pickup and Drop should be within Airport Limits Else return to the respective City or Airport Limit will be charged.
                </p>
                <div className="overflow-auto">
                    <table className="border border-1 border-gray-300 w-full text-center">
                        <thead>
                            <tr className="bg-gray-800 text-white">
                                <th className="border border-r-2 border-gray-500 p-2">Vehicle <br/>(Make/Model)</th>
                                <th className="border border-r-2 border-gray-500 p-2">Seating Capacity</th>
                                <th className="border border-r-2 border-gray-500 p-2">Minimum Tariff</th>
                                <th className="border border-r-2 border-gray-500 p-2" colspan="2">Additional Hour/Km<br/> whichever comes higher</th>
                                <th className="border border-r-2 border-gray-500 p-2">8Hours<br/>Local/Outstation</th>
                                <th className="border border-r-2 border-gray-500 p-2">Day Package</th>
                                <th className="border border-r-2 border-gray-500 p-2">Airport Transfer<br/>(City Limits)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-2 border-gray-400 p-2 w-40"><strong>Suzuki Dzire Toyota Etios Ford Aspire</strong> <br/>Sedan</td>
                                <td className="border border-2 border-gray-400 p-2">4+1</td>
                                <td className="border border-2 border-gray-400 p-2">₹1,300 <br/> (4hrs/40Kms)</td>
                                <td className="border border-2 border-gray-400 p-2">₹200</td>
                                <td className="border border-2 border-gray-400 p-2">₹18</td>
                                <td className="border border-2 border-gray-400 p-2">₹2,200</td>
                                <td className="border border-2 border-gray-400 p-2">₹2,400</td>
                                <td className="border border-2 border-gray-400 p-2">₹1,300</td>
                            </tr>
                            <tr>
                                <td className="border border-2 border-gray-400 p-2 w-40"><strong>Suzuki Ertiga</strong> <br/>Compact MUV</td>
                                <td className="border border-2 border-gray-400 p-2">6+1</td>
                                <td className="border border-2 border-gray-400 p-2">₹2,400 <br/> (8hrs/80Kms)</td>
                                <td className="border border-2 border-gray-400 p-2">₹225</td>
                                <td className="border border-2 border-gray-400 p-2">₹20</td>
                                <td className="border border-2 border-gray-400 p-2">₹2,400</td>
                                <td className="border border-2 border-gray-400 p-2">₹2,800</td>
                                <td className="border border-2 border-gray-400 p-2">₹1,700</td>
                            </tr>
                            <tr>
                                <td className="border border-2 border-gray-400 p-2 w-40"><strong>Toyota Innova Mahindra Marrazo</strong> <br/>Luxury MUV</td>
                                <td className="border border-2 border-gray-400 p-2">6+1 and 7+1</td>
                                <td className="border border-2 border-gray-400 p-2">₹3,000 <br/> (8hrs/80Kms)</td>
                                <td className="border border-2 border-gray-400 p-2">₹300</td>
                                <td className="border border-2 border-gray-400 p-2">₹23</td>
                                <td className="border border-2 border-gray-400 p-2">₹3,000</td>
                                <td className="border border-2 border-gray-400 p-2">₹3,500</td>
                                <td className="border border-2 border-gray-400 p-2">₹3,000</td>
                            </tr>
                            <tr>
                                <td className="border border-2 border-gray-400 p-2 w-40"><strong>Toyota Innova Crysta</strong> <br/>Ultra Luxury MUV</td>
                                <td className="border border-2 border-gray-400 p-2">7+1</td>
                                <td className="border border-2 border-gray-400 p-2">₹3,500 <br/> (8hrs/80Kms)</td>
                                <td className="border border-2 border-gray-400 p-2">₹350</td>
                                <td className="border border-2 border-gray-400 p-2">₹28</td>
                                <td className="border border-2 border-gray-400 p-2">₹3,500</td>
                                <td className="border border-2 border-gray-400 p-2">₹4,000</td>
                                <td className="border border-2 border-gray-400 p-2">₹3,500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="my-5">*For Outstation Transfers/drop including the return km shall be charged and is applicable only for destinations above 35Kms from Cochin Airport or Ernakulam City Centre</p>
                <p className="mb-5"><strong>Garage to Garage Billing: </strong>Mileage run shall be calculated either from our City Garage and back to our City Garage (OR) from our Airport Garage and back to our Airport Garage.</p>

                <div className="overflow-auto">
                    <table className="border border-1 border-gray-300 w-full text-center">
                        <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="border border-r-2 border-gray-500 p-2">Vehicle<br/>(Make/Model)</th>
                            <th className="border border-r-2 border-gray-500 p-2">Seating Capacity</th>
                            <th className="border border-r-2 border-gray-500 p-2">Minimum Tariff</th>
                            <th className="border border-r-2 border-gray-500 p-2" colspan="2">Additional Hour/Km<br/>whichever comes higher</th>
                            <th className="border border-r-2 border-gray-500 p-2">8Hours<br/>Local/Outstation</th>
                            <th className="border border-r-2 border-gray-500 p-2">Day Package</th>
                            <th>Airport Transfer<br/>(City Limits)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <th colspan="8" className="z-10 text-left border border-2 border-gray-400 p-2 bg-gray-200">Force Traveller<br/><span className="text-gray-600">A/C Executive Coach (Van)</span></th>
                        </tr>
                        <tr>
                            <th className="border border-2 border-gray-400 p-2 bg-gray-200 sticky left-0">10 Seater</th>
                            <td className="border border-2 border-gray-400 p-2">9+1</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,000<br/>(8hrs/80Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹350</td>
                            <td className="border border-2 border-gray-400 p-2">₹28</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,000</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,000<br/>(100Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹3,500</td>
                        </tr>
                        <tr></tr>
                        <tr>
                            <th className="border border-2 border-gray-400 p-2 bg-gray-200 sticky left-0">12 Seater</th>
                            <td className="border border-2 border-gray-400 p-2">11+1</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,200<br/>(8hrs/80Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹400</td>
                            <td className="border border-2 border-gray-400 p-2">₹29</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,200</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,200<br/>(100Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹3,800</td>
                        </tr>
                        <tr>
                            <th className="border border-2 border-gray-400 p-2 bg-gray-200 sticky left-0">14 Seater</th>
                            <td className="border border-2 border-gray-400 p-2">13+1</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,500<br/>(8hrs/80Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹400</td>
                            <td className="border border-2 border-gray-400 p-2">₹30</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,200</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,200<br/>(100Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹3,800</td>
                        </tr>
                        <tr>
                            <th className="border border-2 border-gray-400 p-2 bg-gray-200 sticky left-0">17 Seater</th>
                            <td className="border border-2 border-gray-400 p-2">16+1</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,800<br/>(8hrs/80Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹450</td>
                            <td className="border border-2 border-gray-400 p-2">₹33</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,800</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,800<br/>(100Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹4,300</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <th className="border border-2 border-gray-400 p-2 bg-gray-200 sticky left-0">26 Seater</th>
                            <td className="border border-2 border-gray-400 p-2">25+1</td>
                            <td className="border border-2 border-gray-400 p-2">₹8,500<br/>(8hrs/80Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹600</td>
                            <td className="border border-2 border-gray-400 p-2">₹45</td>
                            <td className="border border-2 border-gray-400 p-2">₹8,500</td>
                            <td className="border border-2 border-gray-400 p-2">₹8,500<br/>(100Kms)</td>
                            <td className="border border-2 border-gray-400 p-2">₹8,000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="my-5">
                    <h6 className="font-semibold text-gray-700 mb-5">General Terms and Conditions</h6>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>GST (Goods and Service Tax) Included. The above indicated rates are inclusive of Goods and Service Tax at 5.00%</li>
                        <li>Rates indicated are exclusive of Toll, Parking & Other permit charges.</li>
                        <li>Mileage run for Hatchback and Sedan vehicles would be charged on a point to point basis from City Limits & back to City Limits (OR) Airport and back to Airport</li>
                        <li>Mileage run for all other vehicles except Hatchback & Sedan, would be charged from our City Garage and back to our City Garage (OR) from our Airport garage and back to our Airport garage.</li>
                        <li>Credit not allowed.</li>
                    </ul>
                </div>

                <div className="my-5">
                    <h6 className="font-semibold text-gray-700 mb-5">Day Package T&C: (ONLY APPLICABLE FOR DAY PACKAGES)</h6>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>Day Package applicable for booking of 2 days and more.</li>
                        <li>Though vehicle is at disposal, Vehicle usage is limited to 8-10hrs per day including waiting considering the safety of passengers and proper rest for the Driver</li>
                        <li>Considering the safety of passengers and chauffeur working hours, the vehicle usage is restricted during 7.00 pm to preceding day 08.00 am, Airport/Railway transfer on pickup and departure day shall be flexible as per the respective flight or train timing.</li>
                        <li>Non Tour Packages: Either facility for driver accomodation should be provided or an additional night bata of Rs.500 per night shall be applicable, along with the km run from/to the nearest lodging facility.</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Tariff