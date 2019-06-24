import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import './Blog.css';
//import asyncComponent from '../../hoc/asyncComponent';
// const AsyncNewPost = asyncComponent(() => {   ----- use this in route as "component={AsyncNewPost}"
//     return import('./NewPost/NewPost');
// });

const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
    }

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
                    {this.state.auth ? <Route 
                                            path="/new-post" 
                                            render={() => (
                                                <Suspense fallback={<div>Loading...</div>}>
                                                    <NewPost />
                                                </Suspense>
                                            )} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;