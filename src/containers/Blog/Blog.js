import React, { Component } from 'react';
//import axios from 'axios';
import { Route } from 'react-router-dom';

import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/posts">Posts</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/posts" exact render={() => <Posts/>} />
            </div>
        );
    }
}

export default Blog;