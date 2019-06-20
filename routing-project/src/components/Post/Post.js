import React from 'react';
import './Post.css';

const Post = props => (
    <article className="post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="info">
            <div className="author">{props.author}</div>
        </div>
    </article>
);

export default Post;