import React from 'react'
import Navbar from '../../component/Navbar.js'
import Footer from '../../component/Footer.js'
const Aboutus = () => {
    return (
        <div>
            <Navbar />
            <div className='banner w-[100vh] md:h-[90vh] h-[600px]  md:mt-12 mt-7 md:pl-20 pl-5'>
                <h1 className='text-5xl pt-32 font-bold'>Invest in a Better Court Experience</h1>
                <p className='font-light lg:w-[900px] text-xl my-5'>Your contribution can make a significant difference in maintaining and enhancing our basketball courts. By donating, you are investing in a better experience for the entire community. Help us keep the courts in top shape and ensure that everyone can enjoy a high-quality playing environment.</p>
                <button className='backColor text-black text-center p-3 w-44 rounded-full font-bold'>Donate Now</button>
            </div>
            <div className='text-center mt-10'>
                <h1 className='text-4xl font-bold'>ABOUT US</h1>
                <p className='lg:w-[700px] mt-10 mx-auto '>On the court, every bounce is a rhythm, eveBry pass is a melody, and every shot is a symphony – basketball is poetry in motion.</p>
            </div>
            <div className='text-center mt-20 w-[90%] mx-auto shadow p-10 '>
                <p className='text-2xl font-bold'>Welcome to Basketball – Your Slam Dunk Destination!</p>
                <p className='lg:w-[900px] mt-10 text-xl font-light  mx-auto '>At Basketball, we are more than just a basketball rental service; we are your go-to hoop haven for unleashing the spirit of the game. Whether you are a casual shooter or a seasoned baller, we have got the perfect court companion for you.</p>
            </div>

            <div className='text-center mt-20 w-[90%] mx-auto shadow p-10 '>
                <p className='text-2xl text-[#FFA500] font-bold'>Our Mission: Hoops for Everyone</p>
                <p className='lg:w-[900px] mt-10 text-xl font-light  mx-auto '>Our mission is simple: to make the joy of basketball accessible to everyone. We believe in the power of the game to bring people together, inspire healthy competition, and create lasting memories. Thats why we have curated a top-notch selection of basketball equipment, ensuring that the love of the sport is just a rental away..</p>
            </div>

            <div className='text-center mt-20 w-[90%] mx-auto shadow p-10 '>
                <p className='text-2xl text-[#FFA500] font-bold'>Who We Are: Passionate Hoop Enthusiasts</p>
                <p className='lg:w-[900px] mt-10 text-xl font-light  mx-auto '>Behind the scenes, we are a team of dedicated basketball enthusiasts. From the founders to our customer service team, each of us shares a common love for the game. We have been on the courts, dribbled through challenges, and know the exhilaration of a perfect shot. Now, we are here to share that passion with you.</p>
            </div>
            <div className='text-center mt-20 w-[90%] mx-auto shadow p-10 '>
                <p className='text-2xl text-[#FFA500] font-bold'>Why Us</p>
                <p className='lg:w-[900px] mt-10 text-xl font-light  mx-auto '>Quality You Can Trust: Our basketballs and equipment are carefully selected for their durability and performance, ensuring a premium experience every time you step onto the court.Convenience at Your Fingertips: With our easy rental process, getting your hands on top-notch basketball gear has never been more convenient. Just a few clicks, and you are ready to play!Community Matters: We believe in building a vibrant basketball community. Follow us on social media for tips, tricks, and the latest updates from the world of hoops..</p>
            </div>
            <div className='mx-auto w-64'>
                <button className='backColor text-black text-center p-4 w-64 my-10 rounded-full font-bold'>Donate Now</button>
            </div>
            <Footer />
        </div>
    )
}

export default Aboutus
