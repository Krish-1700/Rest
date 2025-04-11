import React, { useState } from 'react'
import { createuser } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Register() {
 const naviagate=useNavigate()
  const [user,setuser]=useState({'username':'','password':'','email':'','first_name':'','last_name':''})
 async function Register(event)
{
 
  event.preventDefault()
  // console.log(user)
  let res=await createuser(user)
  console.log(res)
  naviagate('/')

}

  return (
    <div>
     <div class="container w-50 mx-auto">
  <h2 class="text-center mt-3">REGISTER</h2>
  
   <form onSubmit={Register} >
  <div class="mb-3 mt-3">
    <label class="form-label">Username:</label>
    <input type="text" class="form-control" placeholder="Enter username" onChange={(event)=>{setuser({...user,'username':event.target.value})}} ></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" onChange={(event)=>{setuser({...user,'password':event.target.value})}} ></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Email:</label>
    <input type="email" class="form-control" placeholder="Enter email" onChange={(event)=>{setuser({...user,'email':event.target.value})}} ></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">First_name:</label>
    <input type="text" class="form-control" placeholder="Enter first_name" onChange={(event)=>{setuser({...user,'first_name':event.target.value})}} ></input>
  </div>
  <div class="mb-3 mt-3">
    <label class="form-label">Last_name:</label>
    <input type="text" class="form-control" placeholder="Enter last_name" onChange={(event)=>{setuser({...user,'last_name':event.target.value})}} ></input>
  </div>
 

  <div class="mb-3 mt-3">
    <input type="submit" class="btn btn-outline-danger fw-bold"></input>
  </div>
  </form> 
    </div>
    </div>
  )
}

export default Register
