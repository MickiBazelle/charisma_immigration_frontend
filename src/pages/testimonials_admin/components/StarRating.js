import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <Form.Field>
      <label>Client's Rating</label>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                style={{ display: "none" }}
              />
              <svg
                className="star"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                height="25"
                width="25"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.974 1.42 8.603L12 18.897l-7.421 4.103L6 15.397 0 9.423l8.332-1.268z" />
              </svg>
            </label>
          );
        })}
      </div>
    </Form.Field>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default StarRating;
