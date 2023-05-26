import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Question.css'
import { useState } from 'react';

const Question = () => {
    const [update,setUpdate] = useState('')

    const onBlurContainer = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newValue = {...update}
        newValue[field] = value 
        setUpdate(newValue)
    }

    const question = e =>{
        fetch('https://protected-falls-24199.herokuapp.com/question',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
        })
        alert('data pass confirmed')
    }
    return (
        <Container className='Question' fluid>
            <Row className='questionContent'>
                <Col md={8} className="content col-12 ">
                    <form onSubmit={question}>
                        <input onBlur={onBlurContainer} name='question' placeholder='input Your Question'className='form-control w-100 p-3 mt-4' />
                        <textarea onBlur={onBlurContainer} name='answer' rows={8} placeholder='input Your Answer'className='form-control w-100 p-3 mt-4' />
                        <div className='text-center'><button type='submit' className='customButton'>Submit Question</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Question;