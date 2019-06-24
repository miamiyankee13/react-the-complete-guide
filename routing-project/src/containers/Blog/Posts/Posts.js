import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Anthony'
                    }
                });
                this.setState({
                    posts: updatedPosts
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSelectedPost = id => {
        this.props.history.push(`/posts/${id}`);
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                            key={post.id}  
                            title={post.title} 
                            author={post.author}
                            clicked={() => this.handleSelectedPost(post.id)} 
                        />
            });
        }

        return (
            <div>
                <section className="posts">
                        {posts}
                </section>
                <Route path={`${this.props.match.url}/:id`} component={FullPost} />
            </div>
        );
    }
}

export default Posts;