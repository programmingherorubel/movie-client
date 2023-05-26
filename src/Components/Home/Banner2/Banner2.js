import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';


const Banner2 = () => {
    
    const [secondBanner,setSecondBanner] = useState([])

  useEffect(()=>{
    fetch('https://protected-falls-24199.herokuapp.com/bannerInformation')
    .then(res => res.json())
    .then(data => setSecondBanner(data.reverse().slice(1,2)))
  },[])

    return (
        <Container fluid className="banner">
            <Container>
                <h2>Comming Soon</h2>
                    {
                        secondBanner.map(banner2 => <Row key={banner2._id} style={{displey:'flex',alignItems:'center'}}>
                            <Col md={7} className="col-12 text-center">
                                <h2>{banner2.trailerHeadline}</h2>
                                <ReactPlayer url={banner2.trailerLink}
                                width='100%'
                                controls={true}/>

                            </Col>
                            <Col md={5} className="col-12 text-center mx-auto text-center">
                                <img src={banner2.trailerPoster} className="img-fluid "/>
                            </Col>
                        </Row>)
                    }
            </Container>
        </Container>
    );
};

export default Banner2;