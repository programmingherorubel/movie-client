import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const DeleteQuestion = () => {
    const [question,setQuestion]= useState([])
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/question')
        .then(res => res.json())
        .then(data => setQuestion(data))
    },[])
    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://protected-falls-24199.herokuapp.com/question/${id}`
         fetch(url,{
             method:'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = question.filter(user =>user._id !== id)
                 setQuestion(remainingUsers)
             }
         })
        }
     }
    return (
        <Container>
            <Row>
                {
                        question.map(singleQuestion => <Col sm={8} className="mt-5 col-12 mx-auto" key={singleQuestion._id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{singleQuestion.question}</Card.Title>
                                    <Card.Text style={{color:'gray'}}>
                                    {singleQuestion.answer}
                                    </Card.Text>
                                    <Button variant="danger" onClick={()=>handleDeleteDataFromDatabase(singleQuestion._id)}>Delete Question</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
            </Row>
        </Container>
    );
};

export default DeleteQuestion;