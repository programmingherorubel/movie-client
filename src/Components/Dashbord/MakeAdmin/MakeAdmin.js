import React from 'react';
import { Container ,Row,Col} from 'react-bootstrap';
import './MakeAdmin.css'
import { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')

    const handleOnSubmit = e =>{
        setEmail(e.target.value)
    }

    const adminSubmit = e =>{
        e.preventDefault()
        const information = {email}
        fetch('https://protected-falls-24199.herokuapp.com/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        alert('admin created successfull')
    }

   
    return (
        <Container fluid style={{height:'100vh'}}>
            <Row>
                <Col md={6} className="mx-auto">
                    <form className='mt-5 p-5' onSubmit={adminSubmit}>
                        <p className='p-2' style={{color:'red'}}>Create Admin</p>
                        <input onBlur={handleOnSubmit} className='p-3 form-control' placeholder='Create Admin'/> 
                        <div className='mt-5 mx-auto text-center'><button type='submit' className='createadmin'>Create Admin</button></div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;