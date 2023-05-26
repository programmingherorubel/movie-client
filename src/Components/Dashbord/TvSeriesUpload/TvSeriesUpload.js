import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './TvSeriesUpload.css'
import { useState } from 'react';

const TvSeriesUpload = () => {
    const [update,setUpdate] = useState('')

    const onSubmitForm = e =>{
        const field = e.target.name;
        const value = e.target.value ;
        const newValue = {...update};
        newValue[field] = value;
        console.log(newValue)
        setUpdate(newValue)
    }

    const createTvSeris = e =>{
        const tvseries = update
        fetch('https://protected-falls-24199.herokuapp.com/tvserisupload',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(tvseries)
        })
        alert('tv series upload successfull')
        e.target.reset()
        e.preventDefault() 
    }

    return (
        <Container fluid className='tvseris'>
            <Container>
                <Row>
                    <Col md={8} className="mx-auto mt-4">
                        <h3 style={{color:'tomato',textAlign:'center'}}>Upload A Tv Series </h3>
                    <form onSubmit={createTvSeris}>
                        <div style={{display:'flex'}}>
                            <select onBlur={onSubmitForm} name='typeOfTvSeris'  className="p-2 mt-3 form-select form-select w-25" aria-label=".form-select-lg example">
                                <option defaultValue={"select"}>Select Option</option>
                                <option defaultValue="Action">Action</option>
                                <option defaultValue="Drama">Drama</option>
                                <option defaultValue="Thriller">Thriller</option>
                                <option defaultValue="Romantic">Romantic</option>
                                <option defaultValue="Comedy">Comedy</option>
                                <option defaultValue="Horror">Horror</option>
                            </select>
                                <input onBlur={onSubmitForm}  name='tvSerisYear'  className='p-2 mt-3 form-control w-25' placeholder='Year'/>
                                <input onBlur={onSubmitForm}  name='rating'  className='p-2 mt-3 form-control w-25' placeholder='rating'/>
                                    <select onBlur={onSubmitForm} name='typeOfLanguage'  className="p-2 mt-3 form-select form-select w-25" aria-label=".form-select-lg example">
                                    <option defaultValue={"select"} selected>Select Option</option>
                                    <option defaultValue="Action">English</option>
                                    <option defaultValue="Drama">Bangla</option>
                                    <option defaultValue="Thriller">Turkish</option>
                                    <option defaultValue="Romantic">Japanese</option>
                                    <option defaultValue="Comedy">France</option>
                                    <option defaultValue="Horror">India</option>
                                </select>
                        </div>
                            <input onBlur={onSubmitForm}  name='tvSerisHeadline' className='p-3 mt-3 form-control' placeholder='Headline'/>
                            <input onBlur={onSubmitForm}  name='tvSerisTrailerPoster' className='p-3 mt-3 form-control' placeholder='poster Url'/>
                            <input onBlur={onSubmitForm}  name='tvSerisTrailerLink' className='p-3 mt-3 form-control' placeholder='trailer Link'/>
                            <textarea onBlur={onSubmitForm} name='tvSerisBannerDescription' rows={8}  className='p-3 mt-3 form-control' placeholder='Description'/>
                            <div className='text-center'><button className='customButton'>Upload New Movie Banner</button></div>
                    </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default TvSeriesUpload;