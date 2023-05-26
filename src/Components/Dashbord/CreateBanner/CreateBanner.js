import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CreateBanner.css'

const CreateBanner = () => {
    const [banners,setBanners] = useState('')
    
    const onSubmitForm = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newBanner = {...banners}
        newBanner [field]= value;
        setBanners(newBanner) 
    }

    const createBannerFormSubmit = e =>{
        const information = banners
        fetch('https://protected-falls-24199.herokuapp.com/bannerInformation',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        alert('new data updated')
    }

    return (
        <Container className='createBanner' fluid>
            <Container>
                <Row>
                    <Col md={8} className="mx-auto mt-4">
                        <h3 style={{color:'tomato',textAlign:'center'}}>Upload A New Movie Banner</h3>
                    <form onSubmit={createBannerFormSubmit}>
                        <div style={{display:'flex'}}>
                            <select onBlur={onSubmitForm} name='typeOfMove'  className="p-2 mt-3 form-select form-select w-50" aria-label=".form-select-lg example">
                                <option defaultValue={"Action"} selected>Action</option>
                                <option defaultValue="Drama">Drama</option>
                                <option defaultValue="Thriller">Thriller</option>
                                <option defaultValue="Romantic">Romantic</option>
                                <option defaultValue="Comedy">Comedy</option>
                                <option defaultValue="Horror">Horror</option>
                            </select>
                                <input onBlur={onSubmitForm}  name='year'  className='p-2 mt-3 form-control w-50' placeholder='Year'/>
                        </div>
                            <input onBlur={onSubmitForm}  name='trailerHeadline' className='p-3 mt-3 form-control' placeholder='Headline'/>
                            <input onBlur={onSubmitForm}  name='trailerPoster' className='p-3 mt-3 form-control' placeholder='poster Url'/>
                            <input onBlur={onSubmitForm}  name='trailerLink' className='p-3 mt-3 form-control' placeholder='trailer Link'/>
                            <textarea onBlur={onSubmitForm}  name='bannerDescription' rows={8}  className='p-3 mt-3 form-control' placeholder='Description'/>
                            <div className='text-center'><button className='customButton'>Upload New Movie Banner</button></div>
                    </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default CreateBanner;