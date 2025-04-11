import React, { useEffect, useState } from 'react'
import { deletebookdetail, getallbooks } from '../services/Apicall'
import {  useNavigate } from 'react-router-dom'

function View() {
  
  const [books,setbook]=useState([])
  const navigate=useNavigate()
  function detail(i)
  {
    navigate(`/detail?id=${i}`)
    // console.log(i)
  }
  function editbook(i)
  {
    // console.log(i)
    navigate(`/edit?id=${i}`)
  }
  async function deletebook(i)
  {
    let res=await deletebookdetail(i)
    console.log(res)
    if(res.status>199 && res.status<399)
    {
    fetchbooks()
    }
    else
    {
      alert("cannot delete book record,Try again....")
    }
  }
  async function fetchbooks()
  {
    let s= await getallbooks()
    setbook(s.data)
  }

  useEffect(()=>{fetchbooks()},[])   //useEffect  calls function fetchbooks()
                                     //When view component is loaded/rendered
                                    
  
  
  return (
    <div>
       <div>
      <div class="container mt-3 w-75 bg-secondary text-light p-3">
        <h2 class="text-center">View Books</h2>
        <table class="table table-bordered text-light">
        <thead>
            <tr>
            <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">price</th>
              <th scope='col'>Pages</th>
              <th scope='col'>Language</th>
              <th scope='col'>Actions</th>
            </tr>

          </thead>
          <tbody>
        {books.map((i)=>           <tr>
              <td><img src={i.image} height="100px" width="150px"></img></td>
              <td>{i.title}</td>
              <td>{i.author}</td>
              <td>{i.price}</td>
              <td>{i.pages}</td>
              <td>{i.languages}</td>
              <td><button class="btn btn-light me-2" onClick={()=>detail(i.id)}>view</button><button class="btn btn-light me-2"onClick={()=>editbook(i.id)}>edit</button><button class="btn btn-light me-2" onClick={()=>deletebook(i.id)}>delete</button></td>
            </tr>)}
         
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default View
