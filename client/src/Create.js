import React, { useState } from 'react'
import axios from 'axios'
export default function Create() {
    const [state,setState]=useState({
        title:'',
        content:'',
        user:''
    })
    const {title,content,user}=state;

    const handleChange=(name)=>(event)=>{
        setState({...state,[name]:event.target.value})
        // event.preventDefault();
    }
    const handleSubmit=(event)=>{
        console.table({title,content,user});
        event.preventDefault();

        axios.post('http://localhost:8000/api/post', {title, content, user})
        .then((response)=>{
            console.log("response",response)
            setState({
                ...state, title:'', content:'', user:''})
                alert(`post title ${response.data.title} in inserted`);
        })
        .catch((error)=>{
            console.log("ERROR",error.response)
            alert("Duplicate title or content mostly chances",error.response.data.error)
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Title: <input onChange={handleChange('title')} value={title} type="text" name="" id="" required />
                Content: <textarea onChange={handleChange('content')} value={content} name="" id="" required/>
                User: <input onChange={handleChange('user')} value={user} type="text" name="" id=""/>
                <button>Create</button>
            </form>
        </div>
    )
}
