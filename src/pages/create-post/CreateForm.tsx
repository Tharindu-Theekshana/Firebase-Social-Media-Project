import React from 'react'
import '../../styles/CreateForm.css'

export default function CreateForm() {
  return (
    <form className='form'>
        <div className='text'>Create Post</div>
        <input placeholder='Title...'/>
        <textarea placeholder='Description...'/>
        <input type='submit'/>
    </form>
  )
}
