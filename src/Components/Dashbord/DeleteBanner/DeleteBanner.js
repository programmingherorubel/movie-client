import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const DeleteBanner = () => {
    const [deleteBanner,setDeleteBanner] = useState([])
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/bannerInformation')
        .then(res => res.json())
        .then(data => setDeleteBanner(data))
    },[])

    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://protected-falls-24199.herokuapp.com/bannerInformation/${id}`
         fetch(url,{
             method:'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = deleteBanner.filter(user =>user._id !== id)
                 setDeleteBanner(remainingUsers)
             }
         })
        }
     }

    return (
        <Container >
            {
                deleteBanner.map(movieInfo => <Row key={movieInfo._id} style={{display:'flex',alignItems:'center'}}>
                    <div class="card mb-3" style={{maxwidth:'540px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img src={movieInfo.trailerPoster} class="img-fluid rounded-start" style={{width:'200px'}} alt="..." />
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title" style={{color:'black'}}><b>{movieInfo.trailerHeadline}</b></h5>
                                <p class="card-text" style={{color:'black'}}>{movieInfo.bannerDescription}</p>
                                <span className='action'>{movieInfo.typeOfMove}</span>
                                <span className='year mt-3 mx-3'>{movieInfo.year}</span><br/>
                                <Button className='mt-3' variant="danger" onClick={()=>handleDeleteDataFromDatabase(movieInfo._id)}>Delete</Button>
                            </div>
                            </div>
                        </div>
                    </div>
                </Row>)
            }
            </Container>
    );
};

export default DeleteBanner;