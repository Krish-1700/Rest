import React, { useEffect, useState } from 'react'
import { editbookdetails, getbookdetails } from '../services/Apicall'
import { useLocation, useNavigate } from 'react-router-dom'

function Edit() {
   const [book,setbook]=useState({'title':'','author':'','pages':'','price':'','language':'','image':null})
   const {search}=useLocation()
   console.log(search)
   
   const queryParams=new URLSearchParams(search)
   const id=queryParams.get('id')
   const navigate=useNavigate()
//    console.log(id)
       async function fetchbooks()
        {
        
           let res=await getbookdetails(id)
           // console.log(res.data)
           setbook(res.data)
       }
       async function editbook(event)
       {
        event.preventDefault()
        // let res= await editbookdetails(id,book)
        // console.log(res)
        console.log(book)

        const ubook={...book}

       if(typeof ubook.image=='string')
       {
        delete ubook.image
       }
        
        console.log(ubook)
        let res= await editbookdetails(ubook,id)
        console.log(res)
        navigate('/view')
       }
   
   
        useEffect(()=>{fetchbooks()},[]) 
  return (
    <div>
   <div class="container w-50 mx-auto">
  <h2 class="text-center mt-3">Add Book Details</h2>
  
   <form onSubmit={editbook} >
  <div class="mb-3 mt-3">
    <label class="form-label">Title</label>
    <input type="text" class="form-control" name="t" value={book.title} onChange={(event)=>{setbook({...book,'title':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Author</label>
    <input type="text" class="form-control" name="a" value={book.author} onChange={(event)=>{setbook({...book,'author':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Price</label>
    <input type="text" class="form-control" name="p" value={book.price} onChange={(event)=>{setbook({...book,'price':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Pages</label>
    <input type="number" class="form-control" name="pg" value={book.pages} onChange={(event)=>{setbook({...book,'pages':event.target.value})}}></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Language</label>
    <input type="text" class="form-control" name="l" value={book.languages} onChange={(event)=>{setbook({...book,'languages':event.target.value})}}></input>
  </div>
    <div class="mb-3 mt-3">
    <label class="form-label">Image</label>
    <img src={book.image} height="80px" widht="100px"></img>
    <input type="file" class="form-control" name="i" onChange={(event)=>{setbook({...book,'image':event.target.files[0]})}}></input>
  </div>


  <div class="mb-3 mt-3">
    <input type="submit" class="btn btn-outline-danger fw-bold"></input>
  </div>
  </form>
  
</div>
    </div>
  )
}

export default Edit
