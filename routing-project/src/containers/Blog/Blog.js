import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" activeClassName="active" exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/" render={() => <h1 style={{textAlign: "center"}}>Welcome! Let's learn React Router!</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;