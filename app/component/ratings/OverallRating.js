import { useEffect, useRef } from "react";

const OverallRating = ({ overallRating , classname}) => {
    const ratingRef = useRef(null);
  
    useEffect(() => {
      if (ratingRef.current) {
        const widthPercentage = (overallRating / 5) * 100; // calculate percentage based on rating
        ratingRef.current.style.width = `${widthPercentage}%`;
      }
    }, [overallRating]);
  
    return (
      <div className="relative inline-block text-4xl">
        {/* background (unfilled stars) */}
        <div className={`text-white text-2xl drop-shadow-sm  ${classname} `}>★★★★★</div>
  
        {/* foreground (filled stars) */}
        <div
          ref={ratingRef}
          className={`absolute top-0 left-0 overflow-hidden text-[#FFD700] whitespace-nowrap drop-shadow-sm  text-2xl ${classname}`}
          style={{ width: "0%" }} // initially empty
        >
          ★★★★★
        </div>
      </div>
    );
  };
  

  export default OverallRating;