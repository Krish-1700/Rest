import React, { useState } from 'react'
import { postbookdetails } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Add() {

  const [book,setbook]=useState({'title':'','author':'','pages':'','price':'','language':'','image':null})

  const navigate=useNavigate()
  async function postbook(event){
    event.preventDefault()
  //  console.log(book)
  let res=await postbookdetails(book)
  console.log(res)

  navigate('/view')

 }

  return (
    <div>
      <div class="container w-50 mx-auto">
  <h2 class="text-center mt-3">Add Book Details</h2>
  
   <form onSubmit={postbook}>
  <div class="mb-3 mt-3">
    <label class="form-label">Title</label>
    <input type="text" class="form-control" name="t" placeholder="Enter title" onChange={(event)=>{setbook({...book,'title':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Author</label>
    <input type="text" class="form-control" name="a" placeholder="Enter Author"onChange={(event)=>{setbook({...book,'author':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Price</label>
    <input type="text" class="form-control" name="p" placeholder="Enter Price"onChange={(event)=>{setbook({...book,'price':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Pages</label>
    <input type="number" class="form-control" name="pg" placeholder="Enter Pages"onChange={(event)=>{setbook({...book,'pages':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Language</label>
    <input type="text" class="form-control" name="l" placeholder="Enter Language"onChange={(event)=>{setbook({...book,'languages':event.target.value})}}></input>
  </div>
    <div class="mb-3 mt-3">
    <label class="form-label">Image</label>
    <input type="file" class="form-control" name="i"onChange={(event)=>{setbook({...book,'image':event.target.files[0]})}}></input>
  </div>


  <div class="mb-3 mt-3">
    <input type="submit" class="btn btn-outline-danger fw-bold"></input>
  </div>
  </form>
  
</div>

    </div>
  )
}

export default Add
