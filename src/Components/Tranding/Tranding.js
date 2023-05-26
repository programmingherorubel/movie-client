import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Tranding.css'
import { Link } from 'react-router-dom';

const Tranding = () => {
    const  [tranding,setTranding] = useState([])

    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/movie')
        .then(res => res.json())
        .then(data => setTranding(data.slice(0,8)))
    },[])
   

    return (
        <Container fluid className='tranding'>
            <Container>
                <h2>Most Popular Movies Right Now</h2>
                <Row>
                    {
                        tranding.map(trand => <Col key={trand._id} md={4} lg={3} sm={6} className="col-12 mt-5 text-center singlemovie" >
                            <Link to={`/allmovie/${trand?._id}`} style={{textDecoration:'none'}}>
                            <div className='movieContainer'>
                            <img src={trand.trailerPoster} className="img-fluid" style={{width:'250px',height:'250px'}} />
                            <div className='movieContent'>
                                <h5 style={{color:'gray'}}>{trand.trailerHeadline}</h5>
                                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                                    <h6 className='year'>{trand.year}</h6>
                                    <span className="d-inline-block" tabindex="0"title="Add Playlist">
                                    <i style={{color:'yellow',cursor:"pointer"}}className="fa-solid fa-heart"></i>
                                        </span>
                                    <h6 className='action'>{trand.typeOfMove}</h6>
                                </div>
                            </div>
                            </div>
                            </Link>
                        </Col>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Tranding;