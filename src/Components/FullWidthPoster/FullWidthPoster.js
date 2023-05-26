import React from 'react';
import './FullWidthPoster.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Accordion from './Accordion/Accordion';


const FullWidthPoster = () => {
    

    
    return (
        <Container fluid className='fullWidthPoster'>
            <Container>
                <Row>
                    <Col md={8}>
                        
                        <h1 className='mt-5'>Black Panther 2 </h1>  <br />
                        <h2 className=' mt-5'>Black Panther 2 cast, release date and everything you need to know about Wakanda Forever</h2>
                        <span className='action'>action</span> <span className='action'>year : 2022</span>
                        <p style={{color:'gray',marginTop:'20px'}}>
                        Black Panther 2 should be hitting cinemas before the end of this year, assuming there are no further delays. 

                        The highly-anticipated MCU sequel restarted production in January 2022 and had another week-long delay due to Covid but wrapped up in March 2022. The break from November 2021 to January 2022 was to give Letitia Wright time to recover after an on-set injury.

                        It was confirmed back in May 2021 that the sequel would be called Black Panther: Wakanda Forever. After a couple of delays to its original May 2022 release, the sequel is set to hit cinemas in November 2022, and everything seems on track for that.<br /> <br />

                        The sequel will be the first time we've returned to Wakanda since the tragic death of Chadwick Boseman in August 2020, with everybody involved in the production keen to ensure it pays tribute to the late star.
                        </p>
                        <div>

                        </div>
                    </Col>
                    <Col md={4} className="mt-5">
                        <div>
                           <Accordion></Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default FullWidthPoster;