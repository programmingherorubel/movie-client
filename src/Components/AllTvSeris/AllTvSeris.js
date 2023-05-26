import React from 'react';
import './AllTvSeris.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Sweetpagination from 'sweetpagination';
import { Link } from 'react-router-dom';
import SideNavbar from '../SideNavbar/SideNavbar';
import Footer from '../Home/Footer/Footer';

const AllTvSeris = () => {
    const [movie,setMovie] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    const [displayMovie,setDisplayMovie] = useState([])
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/tvserisupload')
        .then(res => res.json())
        .then(data => {
            setMovie(data)
            setDisplayMovie(data) 
        })
    },[])
    const searchBox = event =>{
        const searchText = event.target.value;
        const matchProduct = displayMovie.filter(movies => movies.tvSerisHeadline.toLowerCase().includes(searchText.toLowerCase()))
        setCurrentPageData(matchProduct)
    }
   
    return (
        <>
        <SideNavbar></SideNavbar>
            <Container className='allMovie' fluid>
            <Container>
                <Row>
                    <div className='searchBox'><input onChange={searchBox} className='form-control'placeholder='Search Movie' /></div>
                    {
                    currentPageData.map(singleMovie => <Col key={singleMovie?._id} md={4} lg={3} sm={6} className="col-12 mt-5 text-center singlemovie" >
                        
                        <Link to={`${singleMovie?._id}`} style={{textDecoration:'none'}}>
                            <div className='movieContainer'>
                                <img src={singleMovie?.tvSerisTrailerPoster} className="img-fluid" style={{width:'250px',height:'250px'}} />
                                <div className='movieContent'>
                                    <h5 style={{color:'gray'}}>{singleMovie?.tvSerisHeadline}</h5>
                                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                                        <h6 className='year'>{singleMovie?.tvSerisYear}</h6>
                                        <span className="d-inline-block"tabindex="0"   title="Add Playlist">
                                        <i style={{color:'yellow',cursor:"pointer"}} className="fa-solid fa-heart"></i>
                                            </span>
                                        <h6 className='action'>{singleMovie?.typeOfTvSeris}</h6>
                                    </div>
                                </div>
                            </div>
                            </Link>
                    </Col>)
                    }
                </Row>
                <div className='mt-5'>
                <Sweetpagination
                currentPageData={setCurrentPageData}
                getData={displayMovie}
                dataPerPage={12}
                />
                </div>
            </Container>
            <Footer></Footer>
        </Container>
        </>
    );
};

export default AllTvSeris;