import React from 'react';
import { Container, Row ,Col} from 'react-bootstrap';
import './Dashbrod.css'
import { Link ,Outlet} from 'react-router-dom';
import { useState } from 'react';
import useAuth from './../hooks/Context/useAuth';
import dashbordimg from '../Home/img/dashbord.jpg'


const Dashbord = () => {
    const [sideNavbar,setSideNavbar] = useState(false)
    const {Logout} = useAuth()
    return (
        <main className='dashbord'>
            <Container fluid >
            <Row>
                <Col style={{position:'relative'}}>
                    <div className='mainContainer'>

                        <div className='hamburger' onClick={()=>setSideNavbar(!sideNavbar)}>
                            <div className= {sideNavbar ? 'dashbordLine' : 'dashbordLineempty'} ></div>
                            <div className= {sideNavbar ? 'dashbordLine' : 'dashbordLineempty'} ></div>
                            <div className= {sideNavbar ? 'dashbordLine' : 'dashbordLineempty'} ></div>
                        </div>
                        <div><h4>Welcome to Dashbord</h4></div>
                        <div className='DashbordContent'>
                        <h6 onClick={Logout} style={{color:'black',fontWeight:'bold',marginTop:'15px',color:'white'}}><i className="mx-2 fa-solid fa-right-from-bracket" ></i>LogOut</h6>
                        <h5 className='mt-3 mx-4'></h5>
                        </div>
                    </div>
                    {
                        <div className={sideNavbar? 'navpart activeInfo' : 'navpart' }>
                        <ul className="sideDashbord" style={{display:'inline-block'}}>
                            
                            <li><Link to="/" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-house"></i>Website Home</h6> </Link></li>

                            
                            <li><Link to="/dashbord/createBanner" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-spa"></i>Create Banner</h6> </Link></li>

                            
                            <li><Link to="/dashbord/deleteBanner" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-trash-can"></i>Delete Banner</h6> </Link></li>

                            
                            <li><Link to="/dashbord/question" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-circle-question"></i>Create Question</h6> </Link></li>

                            
                            <li><Link to="/dashbord/deletequestion" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-trash-can"></i>Delete Question </h6> </Link></li>

                            
                            <li><Link to="/dashbord/movie" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-clapperboard"></i>Movie Upload</h6> </Link></li>

                            
                            <li><Link to="/dashbord/deleteMovie" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-trash-can"></i>Delete-Movie</h6> </Link></li>

                            
                            <li><Link to="/dashbord/tvserisupload" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-tv"></i>TV-Series Upload</h6> </Link></li>

                            
                            <li><Link to="/dashbord/deleteTvSeris" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-trash-can"></i>Delete TV-Series</h6> </Link></li>

                            
                            <li><Link to="/dashbord/webuser" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-users"></i>Website User</h6> </Link></li>

                            
                            <li><Link to="/dashbord/makeadmin" style={{textDecoration:'none'}}><h6 style={{color:'black',fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-user-gear"></i>Create Admin</h6> </Link></li>

                            
                            <li onClick={Logout} style={{backgroundColor:'red',padding:'4px'}}><h6 style={{fontWeight:'bold',marginTop:'15px'}}><i className="mx-2 fa-solid fa-right-from-bracket" ></i>LogOut</h6> </li>


                            
                        </ul>
                    </div>
                    }
                </Col>
            </Row>
            </Container>
            <Container flluid>
            <Outlet/>
            
            </Container>
        </main>
    );
};

export default Dashbord;