import { FaStar } from "react-icons/fa";


const Rating = ({ rating, onRate, starState }) => {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <>
        {" "}
        {stars.map((star, index) => (
          <>
            {starState === "viewonly" ? (
              <FaStar
                key={index}
                className={`text-sm  ${
                  star <= rating ? "text-[#FFD700]" : "text-white"
                }`}
              />
            ) : (
              <FaStar
                key={index}
                className={`text-sm cursor-pointer ${
                  star <= rating ? "text-[#FFD700]" : "text-white"
                }`}
                onClick={() => onRate(star)}
              />
            )}
          </>
        ))}
      </>
    );
  };
  
   export default Rating;