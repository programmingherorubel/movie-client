import React from 'react';
import { Container ,Row ,Col} from 'react-bootstrap';
import { useEffect,useState } from 'react';

import Table from 'react-bootstrap/Table';

const WebUser = () => {
    const [webuser,setWebUser] = useState([])
    
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/user')
        .then(res => res.json())
        .then(data => setWebUser(data))
    },[])
    return (
        <Container>
            <Row>
                <h2 className='text-center'style={{color:'black'}}>Website User Information</h2>
                <Col>
                    <Table striped bordered responsive hover>
                            <thead>
                                <tr className='text-center'>
                                    <th >Email</th>
                                    <th>User Name </th>
                                    <th>Role </th>
                                </tr>
                            </thead>

                            {
                                webuser.map(webuser =><tbody>
                                    <tr className='text-center'>
                                    <td>{webuser.email}</td>
                                    <td>{webuser.displayName}</td>
                                    <td style={{color:'red'}}><b>{webuser.role}</b></td>
                                    </tr>
                                </tbody>)
                            }
                        </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default WebUser;