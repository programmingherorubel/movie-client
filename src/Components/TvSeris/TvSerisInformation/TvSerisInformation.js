import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './TvSerisInformation.css'
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import SideNavbar from '../../SideNavbar/SideNavbar';
import Footer from './../../Home/Footer/Footer';

const TvSerisInformation = () => {
    const {information} = useParams()
    const [tvserisInformation,setTvSerisInformation] = useState({})
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/tvserisupload')
        .then(res => res.json())
        .then(data => setTvSerisInformation(data.find((p)=> p._id === information)))
    },[])
    const {rating,tvSerisBannerDescription,tvSerisHeadline,tvSerisTrailerLink,tvSerisTrailerPoster,tvSerisYear,typeOfLanguage,typeOfTvSeris} = tvserisInformation
    console.log(rating)
    return (
        <>
        <SideNavbar></SideNavbar>
        <Container className='information' fluid>
            <Container>
                <Row style={{display:'flex',alignItems:'center'}}>
                    <Col md={7}>
                        <p style={{display:'inline',padding:'6px 5px',background:'#0093D4',borderRadius:'2px',margin:'0px 2px'}}><i className="fa-solid fa-star" style={{color:'#E2B616'}}></i>  {rating}</p>

                        <p style={{display:'inline',padding:'6px 5px',background:'red',borderRadius:'2px',margin:'0px 2px'}}> {tvSerisYear}</p>

                        <p style={{display:'inline',padding:'6px 5px',background:'gold',borderRadius:'2px',margin:'0px 2px'}}> {typeOfTvSeris}</p>

                        <p style={{display:'inline',padding:'6px 5px',background:'#8800FF',borderRadius:'2px',margin:'0px 2px'}}> {typeOfLanguage}</p>

                        <h1 className='mt-4'>{tvSerisHeadline}</h1>
                        <p style={{color:'gray'}}>
                            {tvSerisBannerDescription}
                        </p>
                        <button className='customButton'>Download</button>
                    </Col>
                    <Col md={5}>
                        <img src={tvSerisTrailerPoster}style={{width:'100%'}} className="img-fluid" />
                    </Col>
                </Row>
                <Row>
                    <Col md={8} className="mx-auto mt-5">
                        <h1 className='mb-4 mt-4'>Trailer</h1>
                    <ReactPlayer url={tvSerisTrailerLink}
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

export default TvSerisInformation;