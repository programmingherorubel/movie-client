import React from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from '../Home/img/logo.png'
import { Link } from 'react-router-dom';
import './SideNavbar.css'
import useAuth from './../hooks/Context/useAuth';
import { useState } from 'react';
const SideNavbar = () => {
const [toggle,setToggle] = useState(true)
const {user,Logout,admin} = useAuth()
  console.log(admin)
    return (
        <Container fluid className="navbarrr">
            <Row>
                <div className='mainContainer'>
                    <div style={{display:'flex',gap:'25px',alignItems:'center',padding:'16px'}}>
                        <img src={logo} style={{width:'80px'}} />
                        <div className='desktopMenu'>
                            <ul className='list-inline mt-1'>
                                <li className='list-inline-item mx-2'><Link style={{textDecoration:'none',color:'white'}} to="/">Home</Link></li>
                                <li className='list-inline-item mx-2'><Link style={{textDecoration:'none',color:'white'}} to="/allmovie">Movie</Link></li>
                                <li className='list-inline-item mx-2'><Link style={{textDecoration:'none',color:'white'}} to="/alltvseres">TvSeris</Link></li>
                                <li className='list-inline-item mx-2'><Link style={{textDecoration:'none',color:'white'}} to="">TV Show</Link></li>
                                {user.email && <li className='list-inline-item mx-2'><Link style={{textDecoration:'none',color:'white'}} onClick={Logout} to="">Logout</Link></li>}
                                {admin && <li className='list-inline-item mx-2'><Link style={{textDecoration:'none',color:'white'}}to="/dashbord">Admin</Link></li>}
                            </ul>
                        </div>
                        <div >
                        <div className='mobileRelativeContainer'>
                        <ul className= {!toggle ? "mobileMenu activeState" : "mobileMenu"}>
                                <li className='mt-4'><Link style={{textDecoration:'none',color:'white'}} to="/">Home</Link></li>
                                <li className='mt-4'><Link style={{textDecoration:'none',color:'white'}} to="/allmovie">Movie</Link></li>
                                <li className='mt-4'><Link style={{textDecoration:'none',color:'white'}} to="/alltvseres">TvSeris</Link></li>
                                <li className='mt-4'><Link style={{textDecoration:'none',color:'white'}} to="">TV Show</Link></li>
                                {admin && <li className='mt-4'><Link style={{textDecoration:'none',color:'white'}} to="/dashbord">Admin</Link></li>}
                                {user.email && <li className='mt-4'><Link style={{textDecoration:'none',color:'white'}} onClick={Logout} to="">logout</Link></li>}
                                
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='mobilebar'>
                        <i className="fa-solid fa-caret-down" onClick={()=>setToggle(!toggle)} style={{color:'white',fontSize:'25px'}}></i>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default SideNavbar;