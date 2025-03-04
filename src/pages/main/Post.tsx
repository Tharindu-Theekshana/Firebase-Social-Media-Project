import React from 'react'
import{post} from "./Main"
import '../../styles/Post.css';

interface props {
    post: post;
}

export default function Post(props: props) {

    const {post} = props;
    
  return (
    <div className='container'>
      <div className='title'><h2>{post.title}</h2></div>
      <div className='description'><p>{post.description}</p></div>
      <div className='username'><p>@{post.username}</p>
      <button>&#128077;</button></div>
      
    </div>
  )
}
