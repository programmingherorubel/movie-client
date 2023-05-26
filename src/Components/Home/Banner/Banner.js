import React, { useEffect, useState } from 'react';
import './Banner.css'
import { Container ,Row , Col, Modal} from 'react-bootstrap';
import thedarkNight from '../img/dark knight.jpg'
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';

const Banner = () => {
    const [bannerData,setBannarData] = useState([])
  useEffect(()=>{
    fetch('https://protected-falls-24199.herokuapp.com/bannerInformation')
    .then(res => res.json())
    .then(data => setBannarData(data.reverse().slice(0,1)))
  },[]) 
    return (
        <Container className='banner' fluid>
            <Container>
            {
                bannerData.map(movieInfo => <Row key={movieInfo._id} style={{display:'flex',alignItems:'center'}}>
                    <Col md={7} className="col-12 mt-5">
                        <span className='action'>
                            {movieInfo.typeOfMove}
                            </span>
                        <span className='year'>{movieInfo.year}</span>

                        <h1 className='mt-3'>{movieInfo.trailerHeadline}</h1>
                        <p style={{color:'gray'}}className="mt-3">{movieInfo.bannerDescription}</p>
                        <div className='mt-5'>
                            <a href={movieInfo.trailerLink}target="_blank"style={{color:'white'}} className='trailer'><i className="mx-1 fa-solid fa-video"></i>Watch Trailer</a> 
                            <button className='trailer'>Favorite<i className="mx-1 fa-solid fa-circle-plus"></i></button>
                        </div>
                        
                    </Col>
                    <Col md={5} className="col-12 text-center">
                        <img src={movieInfo.trailerPoster} style={{width:'80%',}}/>
                    </Col>
                </Row>)
            }
            </Container>
        </Container>
    );
};

export default Banner;