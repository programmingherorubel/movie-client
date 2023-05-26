import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SideSlider.css'
import { Link } from 'react-router-dom';

const SideSlider = () => {
  const [movieInfo,setMovieInfo] = useState([])
  const [tabstate,setTabState] = useState(1)
  const action = (index) =>{
    setTabState(index)
    console.log(index)
  }
  useEffect(()=>{
    fetch('https://protected-falls-24199.herokuapp.com/movie')
    .then(res => res.json())
    .then(data => setMovieInfo(data))
  },[])

  var settings = {
    dots: false,
    arrows:false,
    infinite: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return (
        <Container fluid className='sidebanner'>
            <Container>
                <div className='py-5'>
                    <div>
                        <h2>Choose the plan that’s right for you</h2>
                        
                        <span style={{margin:'0px 10px'}}><i className="fa-solid fa-circle-right"></i></span><span style={{margin:'0px 10px'}}>Watch all you want. Ad-free.</span> <br/>
                        <span style={{margin:'0px 10px'}}><i className="fa-solid fa-circle-right"></i></span><span style={{margin:'0px 10px'}}>Recommendations just for you.</span><br/>
                        <span style={{margin:'0px 10px'}}><i className="fa-solid fa-circle-right"></i></span><span style={{margin:'0px 10px'}}>Change or cancel your plan anytime.</span> <hr />
                      

                    </div>
                </div>
            <Row style={{display:'flex',alignItems:'center'}}>
                <Col md={6} sm={12}>
                <Slider {...settings} className="customSlick1">
                  {
                    movieInfo.map(singleMovie => <div className='mt-5 text-center' key={singleMovie._id}>
                      <Link to={`/allmovie/${singleMovie?._id}`} style={{textDecoration:'none'}}>
                        <div className="text-center mx-auto mt-5" >
                            <img src={singleMovie.trailerPoster} className="img-fluid text-center" style={{height:'300px',margin:'0 auto'}}/>
                          </div>
                      </Link>
                    </div>)
                  }
                </Slider>
                </Col>
                <Col md={6} sm={12}>
                  <div>

                    <div className='mt-5'>
                        <ul style={{display:'flex',justifyContent:'space-evenly'}} >
                            <li onClick={()=>action(1)} className={`${tabstate === 1 ? 'activeTab' : 'tabs'}`}>Mobile</li>
                            <li onClick={()=>action(2)} className={`${tabstate === 2 ? 'activeTab' : 'tabs'}`}>Basic</li>
                            <li onClick={()=>action(3)} className={`${tabstate === 3 ? 'activeTab' : 'tabs'}`}>Standard</li>
                            <li onClick={()=>action(4)} className={`${tabstate === 4 ? 'activeTab' : 'tabs'}`}>Premium</li>
                        </ul>
                    </div>

                  <div className={`${tabstate ===1 ? 'singleContentPackage activePacage mt-5' :'singleContentPackage mt-5'}`}>
                        <div>
                        <Table className='py-5 text-center'responsive style={{color:'white'}}>
                        <thead>
                            <tr>
                                <th>Monthly price</th>
                                <th>Video quality</th>
                                <th>Resolution</th>
                                <th>Devices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>USD3.99</td>
                                <td>Good</td>
                                <td>480p</td>
                                <td>PhoneTablet</td>
                            </tr>
                        </tbody>
                        </Table>
                        </div>
                  </div>

                  <div className={`${tabstate ===2 ? 'singleContentPackage activePacage mt-5' :'singleContentPackage mt-5'}`}>
                        <div>
                        <Table className='py-5 text-center'responsive style={{color:'white'}}>
                        <thead>
                            <tr>
                                <th>Monthly price</th>
                                <th>Video quality</th>
                                <th>Resolution</th>
                                <th>Devices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>USD7.99</td>
                                <td>Good</td>
                                <td>480p</td>
                                <td>
                                    Phone 
                                    Tablet 
                                    Computer 
                                    Tv
                                </td>
                            </tr>
                        </tbody>
                        </Table>
                        </div>
                  </div>

                  <div className={`${tabstate ===3 ? 'singleContentPackage activePacage mt-5' :'singleContentPackage mt-5'}`}>
                        <div>
                        <Table className='py-5 text-center'responsive style={{color:'white'}}>
                        <thead>
                            <tr>
                                <th>Monthly price</th>
                                <th>Video quality</th>
                                <th>Resolution</th>
                                <th>Devices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>USD9.99</td>
                                <td>Better</td>
                                <td>1080p</td>
                                <td>
                                    Phone 
                                    Tablet 
                                    Computer 
                                    Tv 
                                </td>
                            </tr>
                        </tbody>
                        </Table>
                        </div>
                  </div>

                  <div className={`${tabstate ===4 ? 'singleContentPackage activePacage mt-5' :'singleContentPackage mt-5'}`}>
                        <div>
                        <Table className='py-5 text-center'responsive style={{color:'white'}}>
                        <thead>
                            <tr>
                                <th>Monthly price</th>
                                <th>Video quality</th>
                                <th>Resolution</th>
                                <th>Devices</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>USD11.99</td>
                                <td>Best</td>
                                <td>4K+HDR</td>
                                <td>
                                    Phone 
                                    Tablet 
                                    Computer 
                                    Tv 
                                </td>
                            </tr>
                        </tbody>
                        </Table>
                        </div>
                  </div>

                  </div>
                </Col>
            </Row>
            </Container>
        </Container>
    );
};

export default SideSlider;