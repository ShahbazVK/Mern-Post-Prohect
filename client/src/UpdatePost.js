import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function UpdatePost(props) {
    const [state, setState] = useState({
        title: '',
        content: '',
        slug: '',
        user: ''
    });
    const { title, content, slug, user } = state;
    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${props.match.params.slug}`)
            .then((response) => {
                const { title, content, slug, user } = response.data;
                setState({ ...state, title, content, slug, user });
            })
            .catch((err) => console.log(err))
    })
    // const showUpdateForm = () => {
    //     return (

    //     )
    // }
    const handleChange = (name) => (event) => {
        setState({ ...state, [name]: event.target.value })
        // event.preventDefault();
    }
    const handleSubmit = (event) => {
        // console.table({ title, content, user });
        event.preventDefault();

        axios.put(`http://localhost:8000/api/post/${slug}`, { title, content, user })
            .then((response) => {
                console.log("response", response)
                // const {title,content,slug,user}=response.data;
                // setState({
                //     ...state, title, content, slug, user
                // })
                alert(`post title ${title} is updated`);
            })
            .catch((error) => {
                console.log("ERROR", error.response)
                alert("Duplicate title or content mostly chances", error.response.data.error)
            });
    }
    return (
        <div>
            <h1>Update Post</h1>
            <form onSubmit={handleSubmit}>
                Title: <input onChange={handleChange('title')} value={title} type="text" name="" id="" required />
                Content: <textarea onChange={handleChange('content')} value={content} name="" id="" required />
                User: <input onChange={handleChange('user')} value={user} type="text" name="" id="" />
                <button>Create</button>
            </form>
        </div>
    )
}
