import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function SinglePost(props) {
    const [post, setPost] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${props.match.params.slug}`)
        .then((response)=> setPost(response.data))
        .catch((err)=> console.log(err))
    })
    return (
        <div>
        {/* {console.log(post)} */}
            {/* {console.log(props)} */}
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h4>{post.user}</h4>
        </div>
    )
}
