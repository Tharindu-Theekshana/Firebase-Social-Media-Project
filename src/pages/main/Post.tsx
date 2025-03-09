import React, { useEffect, useState } from 'react'
import{post} from "./Main"
import '../../styles/Post.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase';
import { addDoc, collection ,query,getDocs,where, deleteDoc,doc} from 'firebase/firestore';

interface props {
    post: post;
}

interface like {
  userId: string;
}

export default function Post(props: props) {
    const {post} = props;

    const [likes, setLikes] = useState<like[] | null>(null);

    const [user] = useAuthState(auth);

    const likeRef = collection(db,"like");

    const likeDoc = query(likeRef, where("postId","==",post.id));

    const getLike = async () => {
      const data =await getDocs(likeDoc);
      setLikes(data.docs.map((doc)=> ({userId: doc.data().userId})));
    }

    const addLike = async () =>{
      try {await addDoc(likeRef,{userId: user?.uid, postId: post.id});
      if(user){
        setLikes((prev)=> prev?[...prev, {userId: user.uid}]: [{userId: user.uid}]);
      }
    }catch (err){
      console.log(err);
    }

    };

    const removeLike = async () => {
      try{
       const likeToDeleteQuery = query(likeRef,where("postId","==",post.id),where("userId","==",user?.uid));
       const likeToDeleteData = await getDocs(likeToDeleteQuery);
       const likeToDelete = doc(db,"like",likeToDeleteData.docs[0].id);
       await deleteDoc(likeToDelete);
      }catch(err){
        console.log(err);
      }
    }

    const isUserLiked = likes?.find((like)=> like.userId === user?.uid);

    useEffect(()=>{
      getLike();
    },[])
  return (
    <div className='container'>
      <div className='username'><p>@{post.username}</p></div>
      <div className='title'><h2>{post.title}</h2></div>
      <div className='description'><p>{post.description}</p>
      <button onClick={isUserLiked?removeLike:addLike} className='likeButton'>{isUserLiked?<>&#128078;</> :<>&#128077;</>}</button>
       {likes !== null && likes.length > 0 && <div className='displayLikes'>&#128077; {likes.length}</div>}</div>
      
      
    </div>
  )
}
