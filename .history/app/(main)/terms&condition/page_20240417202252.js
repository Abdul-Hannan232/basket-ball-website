import React from 'react';
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='md:my-40 my-28  md:mx-20 mx-5  rounded-2xl shadow md:p-20 p-8 '>
                <h1 className='2xl:text-7xl md:text-6xl text-xl font-bold text-center'>Terms & Conditions</h1>
                <hr className='2xl:my-20 md:my-14 my-5  2xl:mx-40 md:mx-20 ' />
                <div>
                    <p className='md:text-md text-sm'>

                        Last Updated: [Date]
                        <br /><br />
                        Welcome to Basketball! Please carefully read these Terms of Use ("Terms") before using our website, products, or services. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
                        <br /><br />        <ul className='list-disc'>
                            <li>Acceptance of Terms</li>

                            <li>By using our website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the site.</li>
                            <li> Changes to Terms</li>
                            <li>We reserve the right to update, change, or replace any part of these Terms at our discretion. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</li>
                            <li> User Account</li>
                            <li>To access certain features of the website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.</li>
                            <li>  Content</li>
                            <li> All content on this website, including text, graphics, logos, images, and software, is the property of [Your Company] or its content suppliers and protected by international copyright laws.</li>
                            <li> Prohibited Conduct</li>
                            <li> You agree not to engage in any conduct that restricts or inhibits any other user from using or enjoying the website. Prohibited activities include, but are not limited to, transmitting any unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable material.</li>
                            <li> Privacy</li>
                            <li> Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using our website, you consent to the terms of our Privacy Policy.</li>
                            <li> Limitation of Liability</li>
                            <li> In no event shall [Your Company] be liable for any direct, indirect, incidental, special, or consequential damages, or damages for loss of profits, revenue, data, or use, incurred by you or any third party, whether in an action in contract or tort, arising from your access to, or use of, the website.</li>
                            <li> Governing Law</li>
                            <li> These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</li>
                            <li> Contact Information</li>
                            <li> If you have any questions about these Terms, please contact us at [Your Contact Information].
                                By using this website, you agree to these Terms of Use. Thank you for choosing [Your Website/Platform].</li>
                        </ul>
                        <br /><br />
                        Basketball
                        <br /><br />
                        <ul className='list-none'>


                            <li> 456 Mockingbird Lane</li>
                            <li> Anytown, AT 12345</li>
                            <li> Fictional Country</li></ul>
                        <br /><br />

                        <p className='text-[#FFA500] text-lg'> @basketball123.com</p>
                        <br /><br />

                        (555) 123-4567





                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page
