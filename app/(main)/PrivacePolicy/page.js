import React from 'react';
import Navbar from "../../component/navbar.js"
import Footer from "../../component/footer.js"
const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar />
            <div className='md:my-40 my-28  md:mx-20 mx-5  rounded-2xl shadow md:p-20 p-8 '>
                <h1 className='2xl:text-7xl md:text-4xl text-xl font-bold text-center'>Privacy Policy</h1>
                <hr className='2xl:my-20 md:my-14 my-5  2xl:mx-40 md:mx-20 ' />
                <div>

                    <h1 className='md:text-xl text-sm font-semibold my-5'>  Privacy Policy</h1>

                    <p className='font-light md:text-md text-xs'>  This Privacy Policy outlines how [Your Company Name] collects, uses, maintains, and discloses information gathered from users of our website. This policy applies to the [Your Company Website] site and all products and services offered by [Your Company Name].</p>

                    <h1 className='md:text-xl text-sm font-semibold my-5'> Information Collection:</h1>

                    <p className='font-light md:text-md text-xs '>  We may collect personal identification information from Users when they visit our site, register, place an order, subscribe to the newsletter, respond to a survey, or engage in other activities on our site. Users may be asked for their name, email address, mailing address, phone number, and other relevant details. We also collect non-personal identification information whenever Users interact with our site. This information may include the browser name, computer type, and technical details about Users connection to our site.</p>

                    <h1 className='md:text-xl text-sm font-semibold my-5'>  Web Browser Cookies:</h1>

                    <p className='font-light md:text-md text-xs'>  Our site may use cookies to enhance User experience. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Note that some parts of the site may not function properly if cookies are disabled.</p>

                    <h1 className='md:text-md text-xs  my-5'>  How We Use Collected Information:</h1>

                    <p className='font-light md:text-md text-xs my-3'> [Your Company Name] may collect and use Users personal information for the following purposes:</p>
                    <ul className='list-disc md:text-md text-xs ml-4'>
                        <li>   To improve customer service</li>
                        <li>    To personalize user experience</li>
                        <li>  To process transactions</li>
                        <li>To send periodic emails</li>
                    </ul>


                    <h1 className='md:text-xl text-sm font-semibold my-5'> How We Protect Your Information:</h1>

                    <p className='font-light md:text-md text-xs'>  We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information and data stored on our site.</p>

                    <h1 className='md:text-xl text-sm font-semibold my-5'> Sharing Your Personal Information:</h1>

                    <p className='font-light md:text-md text-xs'>  We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.
                        <br /><br />
                        By using this site, you signify your acceptance of this policy. If you do not agree click do not agree.</p>


                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy
