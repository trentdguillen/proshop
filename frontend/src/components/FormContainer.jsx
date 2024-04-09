import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

// Define propTypes for the component
FormContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormContainer;
