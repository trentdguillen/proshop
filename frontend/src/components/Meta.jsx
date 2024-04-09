import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

// Define propTypes for the component
Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
};

Meta.defaultProps = {
  title: 'Welcome To ProShop',
  description: 'We sell the best products for cheap',
  keywords: 'electronics, buy electronics, cheap electroincs',
};

export default Meta;
