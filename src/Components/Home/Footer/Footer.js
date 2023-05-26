import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className='footer' fluid>
            <Container>
                <Row>
                    <div className='mx-auto text-center mt-5 mb-5'>
                        <img src={logo} style={{width:'150px'}}/>
                    </div>
                    <hr style={{borderBottom:'4px solid gray'}}/>
                    <Col md={4} sm={6} className="col-12">
                        <ul>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Movie</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Letest Movie</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>TV Series</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Recent Movie</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Live Tv</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Privacy & Policy</Link></li>
                        </ul>
                    </Col>

                    <Col md={4} sm={6} className="col-12">
                        <ul>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Login</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Registration</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Reset Password</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Tv-Show</Link></li>
                            <li style={{fontWeight:'600'}}><Link to="" style={{textDecoration:'none',color:'white'}}><i style={{color:'red',margin:'0px 20px'}} className="fa-solid fa-arrow-right-long"></i>Live Tv</Link></li>
                        </ul>
                    </Col>

                    <Col md={4} sm={6} className="col-12">
                    <div className="input-group mb-3 mt-4">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className=" btn btn-outline-danger" type="button" id="button-addon2">Subscribe</button>
                    </div>
                    <div>
                    <h5>Social Information</h5>
                    <hr style={{borderBottom:'2px solid gray'}}/>
                        <ul className='text-center'>
                            <li className='list-inline-item mx-2'><i style={{fontSize:'22px'}} className="fa-brands fa-facebook"></i></li>
                            <li className='list-inline-item mx-2'><i style={{fontSize:'22px'}} className="fa-brands fa-twitter"></i></li>
                            <li className='list-inline-item mx-2'><i style={{fontSize:'22px'}} className="fa-brands fa-whatsapp"></i></li>
                            <li className='list-inline-item mx-2'><i style={{fontSize:'22px'}} className="fa-solid fa-envelope"></i></li>
                            <li className='list-inline-item mx-2'><i style={{fontSize:'22px'}} className="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;