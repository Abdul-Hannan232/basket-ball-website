// Import the necessary styles for Tailwind CSS
/* styles/globals.css */
import 'tailwindcss/tailwind.css';

// Your Next.js component
const LoadingSpinner = () => {
    return (
        <div className='bg-gray-300 h-screen w-full fixed inset-0 top-0 right-0 left-0 bg-opacity-80'>
            <div className="wrap ">
                <div className="loading">
                    <div className="bounceball"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
