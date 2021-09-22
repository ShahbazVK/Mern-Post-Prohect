import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import Create from './Create'
import Nav from './Nav'
import SinglePost from './SinglePost';
// import UpdatePost from './UpdatePost';
export default function Routes() {
    return (
        <BrowserRouter>
        <Nav/>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route exact path='/create' component={Create}/>
                <Route exact path='/post/:slug' component={SinglePost}/>
                {/* <Route exact path='/post/update/:slug' component={UpdatePost}/> */}
            </Switch>
        </BrowserRouter>
    )
}
