import { useNavigate, useLocation, Link } from 'react-router-dom';
import React from 'react';
import { Container ,Row} from 'react-bootstrap';
import logo from '../Home/img/logo.png';
import './Login.css'
import { useState } from 'react';
import useAuth from './../hooks/Context/useAuth';





const Login = () => {
    const location = useLocation()
    const navigate = useNavigate() 
    const [update,setUpdate]= useState({})
    const {loginUser,error,googleSingIn}= useAuth()

    const onBlursystem = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const updateData = {...update};
        updateData[field] = value;
        setUpdate(updateData)
    }    
    const formSubmitemail = e =>{
        e.preventDefault() 
        loginUser(update.email,update.password,location,navigate)
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
                                <h2 style={{color:'white',fontWeight:'600'}}>SingIn</h2>
                                    <form onSubmit={formSubmitemail}>
                                    <input onBlur={onBlursystem} type='email'name='email' className='form-control mt-4 w-100 customInput p-3' placeholder='Input Your Email'/>
                                        <input onBlur={onBlursystem} type='password'name='password' className='form-control mt-4 w-100 customInput p-3' placeholder='Password'/>
                                        <div className='text-center mt-4'><button type='submit' className="w-100 mb-4 loginbutton">Singin</button></div>
                                        <div className='text-center mt-4'><button type='submit' className="w-100 mb-4 loginbutton" onClick={google}>Singin With Google</button></div>
                                        <span class="m-4" style={{cursor:'pointer',color:'red'}}><b >{error}</b></span><br/>
                                        <span class="m-4" style={{cursor:'pointer'}}><b ><Link to="/ragristation" style={{textDecoration:'none'}}>New to OYO? Signup now.</Link></b></span>
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

export default Login;