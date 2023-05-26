import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const DeleteMovie = () => {
    const [movies,setMovies] = useState([])
    const[searchMovie,setSearchMovie]= useState([])
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/movie')
        .then(res => res.json())
        .then(data => {
            setMovies(data)
            setSearchMovie(data)
        })
    },[])
    const handleDeleteDataFromDatabase = id =>{
        const confirmDelete = window.confirm('are you sure you want to delete from database? ')
        if(confirmDelete){
         const url = `https://protected-falls-24199.herokuapp.com/movie/${id}`
         fetch(url,{
             method:'DELETE',
         })
         .then(res => res.json())
         .then(data =>{
             if(data.deletedCount > 0){
                 alert('data Delete from Database successfully')
                 const remainingUsers = movies.filter(user =>user._id !== id)
                 setMovies(remainingUsers)
             }
         })
        }
     }
    const searchBox = event =>{
        const search = event.target.value;
        const matchedMovie = movies.filter(movie => movie.trailerHeadline.toLowerCase().includes(search.toLowerCase()))
        setSearchMovie(matchedMovie)
    }
    return (
        <Container>
            <Row>
            <div className='col-md-8 mx-auto'><input onChange={searchBox} placeholder='Search Movie' className='form-control mt-5 p-3'/></div>
                {
                    searchMovie.map(movie => <Col md={7} className='col-12 mx-auto' key={movie._id}>
                        {/* trailerHeadline */}
                        <Table >
                            <thead>
                                <tr style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                    <th className='border border-0'><img src={movie.trailerPoster} className="img-fluid" style={{width:"80px"}}/></th>
                                    <th className='text-cenetr'><b>{movie.trailerHeadline}</b></th>
                                    <th style={{color:'red',cursor:'pointer'}} onClick={()=>handleDeleteDataFromDatabase(movie._id)}>Delete</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default DeleteMovie;