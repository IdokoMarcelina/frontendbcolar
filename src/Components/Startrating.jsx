import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Startrating = ({ stars }) => {
   const fullStars = Math.floor(stars);
  const halfStar = stars % 1 >= 0.5;
  return (
    <div className="star-rating">
        {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} color="gold" />
      ))}
      {halfStar && <FaStarHalfAlt color="gold" />}
    </div>
  )
}

export default Startrating