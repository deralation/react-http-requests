import React, {Component} from 'react';
import Post from './../../../components/Post/Post';
import axios from '../../../axios';
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom';
import './Posts.css';

class Posts extends Component{ 
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get("/posts")
            .then(response => {

                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'max'
                    }
                });

                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                console.log(error);
                //this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
    }

    render(){

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!!!!</p>

        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //<Link to={'/' + post.id} key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    //</Link>
                );
            });
        }
        return (
            <div>
                <section className = "Posts" >
                    { posts }
                </section>
                <Route path={this.props.match.url+"/:id"} exact component={FullPost}/>
            </div>
        );
    };
}

export default Posts;