import React from 'react'
import '../../styles/CreateForm.css'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc,collection} from "firebase/firestore"
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

interface CreateFormData {
  title : string;
  description: string;
}


export default function CreateForm() {

  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  })

  const {register, handleSubmit, formState:{errors}} = useForm<CreateFormData>({
    resolver : yupResolver(schema),
  })

  const whenSubmit = async (data:CreateFormData) => {
     await addDoc(postRef,{
      ...data,
      username: user?.displayName,
      id: user?.uid,
     });
     navigate("/")
  }

  const postRef = collection(db, "post")

  return (
    <form className='form' onSubmit={handleSubmit(whenSubmit)} >
        <div className='text'>Create Post</div>
        <input placeholder='Title...' {...register("title")}/><p className='error'>{errors.title?.message}</p>
        <textarea placeholder='Description...' {...register("description")}/><p className='error'>{errors.description?.message}</p>
        <input type='submit' className='submitForm'/>
    </form>
  )
}
