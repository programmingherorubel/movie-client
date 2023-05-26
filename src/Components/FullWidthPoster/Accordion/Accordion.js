import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Accordion = () => {
    const [questions,setQuestions] = useState([])
    const [click,setClick] = useState(false)

    const  toggle = index =>{
        if(click === index){
           return setClick(null)
        }
        setClick(index)
    }
    useEffect(()=>{
        fetch('https://protected-falls-24199.herokuapp.com/question')
        .then(res => res.json())
        .then(data => setQuestions(data))
    },[])
    
    return (
        <div>
            {
                questions.map((item,index)=> {
                    return <>
                        <div onClick={()=>toggle(index)} key={index} style={{background:'#051222',padding:'10px',margin:'10px',cursor:'pointer'}}>
                            <h5 className='mt-2'>{item.question}</h5>
                        </div>
                        {
                            click === index ? <p className='p-4'>{item.answer}</p> : null
                        }
                        
                    </>
                })
            }
        </div>
    );
};

export default Accordion;