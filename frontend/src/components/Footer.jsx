import { Container, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <Container>
                <Row className="justify-content-center align-items-center" style={{ minHeight: '200px' }}>
                    <Col xs="12" className='text-center'>
                        <LinkContainer to='/contact'>
                            <Button>Contact us</Button>
                        </LinkContainer>
                    </Col>
                    <Col xs="12" className='text-center mt-3'>
                        <p>ProShop &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
