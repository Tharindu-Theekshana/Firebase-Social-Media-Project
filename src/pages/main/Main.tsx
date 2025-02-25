import {getDocs, collection, doc} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Post from "./Post";

export interface post{
  id: string,
  userId: string;
  username: string;
  title: string;
  description: string;
}

export default function Main() {

  const postRef = collection(db,"post");

  const [postList, setPostList] = useState<post[] | null>(null);

  const getPosts = async () => {
    const data = await getDocs(postRef);
    setPostList(data.docs.map((doc)=>({...doc.data(),id: doc.id})) as post[]);
  }
  useEffect(() => {
    getPosts()
  },[]);
  
  return (
    <div>
           {postList?.map((post)=>(<Post post={post}/>))}
       
    </div>
  )
}
