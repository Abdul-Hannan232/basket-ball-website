import React from 'react';
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='md:my-40 my-28  md:mx-20 mx-5  rounded-2xl shadow md:p-20 p-8 '>
                <h1 className='2xl:text-7xl md:text-5xl text-xl font-bold text-center'>Frequently Asked Questions  </h1>
                <h1 className='text-[#FFA500] 2xl:text-7xl md:text-5xl text-xl font-bold text-center mt-4'>(FAQ)</h1>
                <hr className='2xl:my-20 md:mb-14 mb-5 mt-5  2xl:mx-40 md:mx-20 ' />
                <div>
                    <p className='md:text-lg text-sm'>
                        <ul className='list-disc'>
                            <li className='font-bold'>How do I book a basketball court?</li>
                            <p className='font-light'>Booking a court is easy! Simply visit our website, choose your desired location, select the date and time, and proceed to checkout. You can also contact our customer support for assistance.</p>
                            <br /><br />
                            <li className='font-bold'>What are your rental rates?</li>
                            <p className='font-light'>Our rental rates vary based on factors such as location, time of day, and amenities. Please check the pricing section on our website for detailed information.</p>
                            <br /><br />
                            <li className='font-bold'> Can I cancel or modify my booking?</li>
                            <p className='font-light'>Yes, you can cancel or modify your booking up to [X] hours/days before the scheduled time. Check our cancellation policy for more details.</p>
                            <br /><br />
                            <li className='font-bold'>Are there discounts for regular bookings or group reservations?</li>
                            <p className='font-light'>Absolutely! We offer special discounts for regular bookings and group reservations. Contact us directly to discuss your specific requirements.</p>
                            <br /><br />
                            <li className='font-bold'> Are basketballs and other equipment provided?</li>
                            <p className='font-light'>We provide basic equipment, including basketballs. If you need additional equipment, such as jerseys or specialized basketballs, please let us know in advance.</p>
                            <br /><br />
                            <li className='font-bold'> Can I book multiple courts for an event or tournament?</li>
                            <p className='font-light'>es, you can! For events, tournaments, or league play, please contact our events team. We offer special packages and assistance for larger bookings.</p>
                            <br /><br />
                            <li className='font-bold'> Is there parking available at the facilities?</li>
                            <p className='font-light'>Most of our facilities offer parking amenities. Check the details for each location on our website or contact us for specific information about parking availability.</p>
                            <br /><br />
                            <li className='font-bold'> Do you have indoor and outdoor courts?</li>
                            <p className='font-light'>Yes, we have both indoor and outdoor courts. You can filter your search based on your preference for indoor or outdoor play.</p>
                            <br /><br />
                            <li className='font-bold'> How can I leave a review for a court I've rented?</li>
                            <p className='font-light'> We encourage feedback! After your booking, you'll receive an email with a link to leave a review. You can also find a review section on our website</p>
                        </ul>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
