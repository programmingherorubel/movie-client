import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import SideNavbar from '../../SideNavbar/SideNavbar';
import ReactPlayer from 'react-player/youtube';
import Footer from '../../Home/Footer/Footer';

const AllMovieInformation = () => {
    const {information} = useParams()
    const [movieInformation,setMovieInformation] = useState({})
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/movie')
        .then(res => res.json())
        .then(data => setMovieInformation(data.find((p)=> p._id === information)))
    },[])
    const {bannerDescription,trailerHeadline,trailerLink,trailerPoster,typeOfMove,year} = movieInformation
    return (
        <>
        <SideNavbar></SideNavbar>
        <Container className='information' fluid>
            <Container>
                <Row style={{display:'flex',alignItems:'center'}}>
                    <Col md={7}>
                        <p style={{display:'inline',padding:'6px 5px',background:'#0093D4',borderRadius:'2px',margin:'0px 2px'}}><i className="fa-solid fa-star" style={{color:'#E2B616'}}></i>  {year}</p>

                        <p style={{display:'inline',padding:'6px 5px',background:'red',borderRadius:'2px',margin:'0px 2px'}}> {typeOfMove}</p>


                        <h1 className='mt-4'>{trailerHeadline}</h1>
                        <p style={{color:'gray'}}>
                            {bannerDescription}
                        </p>
                        <button className='customButton'>Download</button>
                    </Col>
                    <Col md={5}>
                        <img src={trailerPoster} style={{width:'100%'}} className="img-fluid" />
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="mx-auto mt-5">
                        <h1 className='mb-4 mt-4'>Trailer</h1>
                    <ReactPlayer url={trailerLink}
                                width='100%'
                                controls={true}/>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </Container>
        </>
    );
};

export default AllMovieInformation;