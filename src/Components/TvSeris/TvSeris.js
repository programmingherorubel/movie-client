import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Slider from "react-slick";
import './TvSeris.css'
import { Link } from 'react-router-dom';

const TvSeris = () => {
    const [tvseries,setTvSeries] = useState([])
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/tvserisupload')
        .then(res => res.json())
        .then(data => setTvSeries(data))
    },[])
    
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
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
        <Container fluid className='tvContainr'>
            <Container>
            <h1 className='p-5'>TV Series</h1>
                <Row>
                    <Slider  {...settings}>
                        {
                            tvseries.map(singletvseris => <Col className='mt-5 mb-5'>
                                <Link to={`alltvseres/${singletvseris._id}`} style={{textDecoration:'none'}}>
                                <div style={{textAlign:'center',
                                             margin:'0 auto',
                                             width:'100%',
                                             border:'20px'}}
                                    className="p-5"
                                    >
                                    <img src={singletvseris.tvSerisTrailerPoster} style={{width:'200',height:'250px',textAlign:'center',margin:'0 auto'}}/>
                                </div>
                                </Link>
                            </Col>)
                        }     
                    </Slider>
                    
                </Row>
            </Container>
        </Container>
    );
};

export default TvSeris;