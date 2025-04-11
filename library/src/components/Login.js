import React, { useState } from 'react'
import { loginuser } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [loginn,setuser]=useState({'username':'','password':''})
  const navigate=useNavigate()

  async function login(event){
    event.preventDefault()
    console.log(login)

    let res=await loginuser(loginn)
    // console.log(res)

    let d=res.data['token']
    console.log(d)
    localStorage.setItem('token','token '+d)
    console.log(localStorage.getItem('token'))
    navigate('/')
  }
  return (
    <div>
<h2 class="mt-4 text-center">Login Here</h2>
        <div class="container w-50 mx-auto mt-5 bg-warning p-3">
          <form onSubmit={login}>
          <div class="mb-3 mt-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" onChange={(event)=>{setuser({...loginn,'username':event.target.value})}} placeholder="Enter Username"></input>
          </div>
          <div class="mb-3 mt-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" onChange={(event)=>{setuser({...loginn,'password':event.target.value})}} placeholder="Enter Password"></input>
          </div>
          <div class="mb-3 mt-4">
            <input type="submit" class="btn btn-outline-light fw-bold"></input>
          </div>
          </form>
            </div>
    </div>
  )
}

export default Login
