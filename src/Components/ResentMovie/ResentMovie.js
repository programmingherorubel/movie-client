import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ResentMovie.css'

const ResentMovie = () => {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/movie')
        .then(res => res.json())
        .then(data => setMovie(data.reverse().slice(0,8)))
    },[])

    return (
        <Container fluid className='recentMovie'>
            <Container>
            <h2 className='mt-4 mb-4'>Recent Movie</h2>
                <Row>
                    {
                        movie.map(singleMovie => <Col md={4} lg={3} sm={6} className="col-12 mt-5 text-center singlemovie" key={singleMovie._id}>
                            <Link to={`/allmovie/${singleMovie?._id}`} style={{textDecoration:'none'}}>
                            <div className='movieContainer'>
                            <img src={singleMovie.trailerPoster} className="img-fluid" style={{width:'250px',height:'250px'}} />
                            <div className='movieContent'>
                                <h5 style={{color:'gray'}}>{singleMovie.trailerHeadline}</h5>
                                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                                    <h6 className='year'>{singleMovie.year}</h6>
                                    <span className="d-inline-block" tabindex="0"title="Add Playlist">
                                    <i style={{color:'yellow',cursor:"pointer"}} className="fa-solid fa-heart"></i>
                                        </span>
                                    <h6 className='action'>{singleMovie.typeOfMove}</h6>
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

export default ResentMovie;