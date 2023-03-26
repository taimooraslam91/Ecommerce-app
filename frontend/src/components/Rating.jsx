import React from "react";
import PropTypes from "prop-types";
import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

function Star({ filled, halfFilled, color }) {
  if (filled) {
    return <FaStar style={{ color }} />;
  } else if (halfFilled) {
    return <FaStarHalfAlt style={{ color }} />;
  } else {
    return <FaRegStar style={{ color }} />;
  }
}

const Rating = ({ value, text, color }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = value >= i;
    const halfFilled = value >= i - 0.5 && value < i;
    stars.push(
      <Star key={i} filled={filled} halfFilled={halfFilled} color={color} />
    );
  }
  return (
    <div className="rating">
      {stars}
      <span> {text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#343A40",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
