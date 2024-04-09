import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
    const getStars = (ratingValue) => {
        if (ratingValue >= 1) {
            return <FaStar />;
        } else if (ratingValue >= 0.5) {
            return <FaStarHalfAlt />;
        } else {
            return <FaRegStar />;
        }
    };

    return (
        <div className='rating'>
            <span>{getStars(value)}</span>
            <span>{getStars(value - 1)}</span>
            <span>{getStars(value - 2)}</span>
            <span>{getStars(value - 3)}</span>
            <span>{getStars(value - 4)}</span>
            <span className='rating-text'>{text}</span>
        </div>
    );
};

// Define propTypes for the component
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string
};

export default Rating;
