import React, { useEffect, useState } from 'react'
import{post} from "./Main"
import '../../styles/Post.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { addDoc, collection ,query,getDocs,where} from 'firebase/firestore';

interface props {
    post: post;
}

export default function Post(props: props) {
    const {post} = props;

    const [likeAmount, setLikeAmount] = useState<number | null>(null);

    const [user] = useAuthState(auth);

    const likeRef = collection(db,"like");

    const likeDoc = query(likeRef, where("postId","==",post.id));

    const getLike = async () => {
      const data =await getDocs(likeDoc);
      setLikeAmount(data.docs.length);
    }

    const addLike = async () =>{
      await addDoc(likeRef,{userId: user?.uid, postId: post.id});
    };
    useEffect(()=>{
      getLike();
    },[])
  return (
    <div className='container'>
      <div className='username'><p>@{post.username}</p></div>
      <div className='title'><h2>{post.title}</h2></div>
      <div className='description'><p>{post.description}</p>
      <button onClick={addLike} className='likeButton'>&#128077;</button>
       {likeAmount !== null && likeAmount > 0 && <div className='displayLikes'>&#128077; {likeAmount}</div>}</div>
      
      
    </div>
  )
}
