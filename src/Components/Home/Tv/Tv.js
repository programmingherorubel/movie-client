import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Slider from "react-slick";
import tvimg1 from '../img/tv/tv (1).jpg' 
import tvimg2 from '../img/tv/tv (1).png' 
import tvimg3 from '../img/tv/tv (2).jpg' 
import tvimg4 from '../img/tv/tv (2).png' 
import tvimg5 from '../img/tv/tv (3).jpg' 
import tvimg6 from '../img/tv/tv (3).png' 
import tvimg7 from '../img/tv/tv (4).jpg' 
import tvimg8 from '../img/tv/tv (5).jpg' 
import tvimg9 from '../img/tv/tv (6).jpg' 
import tvimg10 from '../img/tv/tv (7).jpg' 
import tvimg11 from '../img/tv/tv (8).jpg' 
import './Tv.css'


const Tv = () => {
    const settings = {
        dots: false,
        autoplaySpeed: 1500,
        arrows:false,
        infinite: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Container fluid className='tv'>
            <Container>
                <h1 className='mt-5 mb-5'>Watch Tv Show</h1>
                <Row className='text-center'>
                <Slider {...settings}>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg1} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg2} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg3} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg4} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg5} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg6} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg7} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg8} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg9} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg10} style={{width:'200px',margin:'0 auto'}} className="img-fluid text-center"/>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={tvimg11} style={{width:'200px',margin:'0 auto'}} className="img-fluid"/>
                    </div>
                    
                    </Slider>
                </Row>
            </Container>
        </Container>
    );
};

export default Tv;