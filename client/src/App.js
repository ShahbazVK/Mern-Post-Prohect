import './App.css';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
// import Nav from './Nav'
import axios from 'axios'
function App(props) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios.get('http://localhost:8000/api/posts')
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => alert('error'))
  }
  const deleteConfirm = (slug) => {
    console.log("Clicked");
    let answer=window.confirm("Are you sure you want to delte this?");
    if (answer) {deletePost(slug)};
  }

  const deletePost = (slug) => {
    axios.delete(`http://localhost:8000/api/post/${slug}`)
    .then((response)=>{
      alert("Post deletd")
      fetchPosts();
    })
    .catch((err)=>console.log(err))
  }

  useEffect(() => {
    fetchPosts();
  }, [])
  return (
    <div className='containerShowPosts'>
      {/* {console.log("PROPPPPPPPPSSsss", props)} */}
      {posts.map((element, key) => {
        return (
          <div class="container">
            <div class="row align-items-start">
              <div class="col">
                <div className='showingPosts'>
                  <Link to={`/post/${element.slug}`}>
                    <h1>{element.title}</h1>
                  </Link>
                  <p>{element.content.substring(0, 10) + "..."} <h4>{"  Click on title to read more?"}</h4></p>
                  <h2>{element.user}</h2>
                </div>
              </div>
              <div class="col">
                {/* <Link to={`/post/update/${element.slug}`} className='btn btn-primary'>Update</Link> */}
                {/* <button onClick={()=>deleteConfirm(element.slug)} className='btn btn-danger'>Delete</button> */}
                <Button variant="contained" onClick={()=>deleteConfirm(element.slug)} className='btn btn-danger'>Delete</Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
