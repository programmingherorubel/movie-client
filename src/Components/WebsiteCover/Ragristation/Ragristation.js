import { useNavigate, useLocation, Link } from 'react-router-dom';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../Home/img/logo.png';
import { useState } from 'react';
import useAuth from './../../hooks/Context/useAuth';


const Ragristation = () => {
    const location = useLocation()
    const navigate = useNavigate() 
    const [update,setUpdate]= useState({})
    const {Regristation,error,googleSingIn}= useAuth()
        const onBlursystem = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const updateValue = {...update};
            updateValue[field]= value;
            console.log(updateValue)
            setUpdate(updateValue)
    }
    // Ragristation
    const formSubmit = e =>{
        e.preventDefault() 
        if(update.password !== update.password2){
            return 
        }
        Regristation(update.email,update.password,update.name ,location,navigate);
    }
    const google = ()=>{
        googleSingIn(location,navigate)
    }
    return (
        <Container fluid className='cover'>
            <Container>
                <Row>
                    <div className='mb-4'>
                        <img src={logo} className="img-fluid" style={{width:'100px',marginTop:"20px"}}/>
                    </div>
                    <Row>
                        <div style={{display:'flex',alignItems:'center',height:'100vh',justifyContent:'center'}} >
                                <div className='col-md-5 mx-auto'>
                                    <div className='p-5' style={{backgroundColor:'rgba(0, 0, 0, 0.851)'}}>
                                    <h2 style={{color:'white',fontWeight:'600'}}>SingUp</h2>
                                        <form onSubmit={formSubmit}>
                                            <input onBlur={onBlursystem} type='name'name='name' className='form-control mt-4 w-100 customInput p-3' placeholder='Input Your Name'/>
                                            <input onBlur={onBlursystem} type='email'name='email' className='form-control mt-4 w-100 customInput p-3' placeholder='Input Your Email'/>
                                            <input onBlur={onBlursystem} type='password'name='password' className='form-control mt-4 w-100 customInput p-3' placeholder='Password'/>
                                            <input onBlur={onBlursystem} type='password'name='password2' className='form-control mt-4 w-100 customInput p-3' placeholder='Re-password'/>
                                            <div className='text-center mt-4'><button type='submit' className="w-100 mb-4 loginbutton">SingUp</button></div>
                                            <div className='text-center mt-4'><button type='submit' className="w-100 mb-4 loginbutton" onClick={google}>SingIN With Google</button></div>
                                            <span class="m-4" style={{cursor:'pointer',color:'red'}}><b >{error}</b></span><br/>
                                            <span class="m-4" style={{cursor:'pointer'}}><b ><Link to="/login">Already Account ? SingIn</Link></b></span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                    </Row>
                </Row>
            </Container>
        </Container>
    );
};

export default Ragristation;