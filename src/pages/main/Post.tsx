import React from 'react'
import{post} from "./Main"

interface props {
    post: post;
}

export default function Post(props: props) {

    const {post} = props;
    
  return (
    <div>
      <div><h2>{post.title}</h2></div>
      <div><p>{post.description}</p></div>
      <div><p>@{post.username}</p></div>
    </div>
  )
}
