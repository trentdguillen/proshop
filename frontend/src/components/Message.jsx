import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children }) => {
    return <Alert variant={variant}>{children}</Alert>;
};

// Define propTypes for the component
Message.propTypes = {
  variant: PropTypes.string, // variant prop is optional, so no 'isRequired'
  children: PropTypes.node.isRequired
};

Message.defaultProps = {
    variant: 'info',
};

export default Message;
