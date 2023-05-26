import React from 'react';
import './AllMovie.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Sweetpagination from 'sweetpagination';
import { Link } from 'react-router-dom';
import './AllMovie.css'
import SideNavbar from '../SideNavbar/SideNavbar';
import Footer from './../Home/Footer/Footer';

const AllMovie = () => {
    const [movie,setMovie] = useState([])
    const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
    const [displayMovie,setDisplayMovie] = useState([])
    
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/movie')
        .then(res => res.json())
        .then(data => {
            setMovie(data)
            setDisplayMovie(data) 
        })
    },[])
    

    const searchBox = event =>{
        const searchText = event.target.value;
        const matchProduct = displayMovie.filter(movies => movies.trailerHeadline.toLowerCase().includes(searchText.toLowerCase()))
        setCurrentPageData(matchProduct)
    }

   const addToFav = (information) =>{
        fetch('https://protected-falls-24199.herokuapp.com/playlist',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('added successfully')
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
                        
                        <Link to={`/allmovie/${singleMovie?._id}`} style={{textDecoration:'none'}}>
                            <div className='movieContainer'>
                                <img src={singleMovie?.trailerPoster} className="img-fluid" style={{width:'250px',height:'250px'}} />
                                <div className='movieContent'>
                                    <h5 style={{color:'gray'}}>{singleMovie?.trailerHeadline}</h5>
                                    <div style={{display:'flex',justifyContent:'space-evenly'}}>
                                        <h6 className='year'>{singleMovie?.year}</h6>
                                        <span className="d-inline-block"tabindex="0" onClick={()=>addToFav(singleMovie)} title="Add Playlist">
                                        <i style={{color:'yellow',cursor:"pointer"}} className="fa-solid fa-heart"></i>
                                            </span>
                                        <h6 className='action'>{singleMovie?.typeOfMove}</h6>
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

export default AllMovie;