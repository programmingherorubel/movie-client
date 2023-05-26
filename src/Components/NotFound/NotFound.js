import React from 'react';
import { Container ,Row} from 'react-bootstrap';
import notfound from '../Home/img/notfound.jpg'

const NotFound = () => {
    return (
        <Container fluid>
            <Row>
                <div className='mx-auto text-center'><img className='img-fluid' src={notfound} style={{width:'500px'}} /></div>
            </Row>
        </Container>
    );
};

export default NotFound;