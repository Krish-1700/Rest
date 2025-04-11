import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userlogout } from '../services/Apicall'
import Search from './Search'

function Navbar() {
  const navigate=useNavigate()
  const [w,setw]=useState(' ')
  async function logout()
  {
    // console.log('hello')
    let res=await userlogout()
    console.log(res)
    if(res.status>199 && res.status<399)
    {
      localStorage.removeItem('token')
      navigate('/login')
    }

  }
  function input(event)
  {
    setw(event.target.value);
  }
  function Searchbook()
  {
    console.log(w)
    navigate('/search')
  }
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid fw-bold">
    <a class="navbar-brand" href="#">Library</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
        <li class="nav-item">
            <Link to="/">
          <a class="nav-link active" aria-current="page" href="">Home</a>
          </Link>
        </li>
        <li class="nav-item">
            <Link to="/add">
          <a class="nav-link active" href="#">Add</a>
        </Link>
        </li>
        <li class="nav-item">
            <Link to="/view">
          <a class="nav-link active" href="#">View</a>
          </Link>
        </li>
        <li class="nav-item">
            <Link to="/detail">
          <a class="nav-link active" href="#">Detail</a>
          </Link>
        </li>
        <li class="nav-item">
            <Link to="/edit">
          <a class="nav-link active" href="#">Edit</a>
          </Link>
        </li>
        
        <li class="nav-item">
        <Link to="/register">
          <a class="nav-link active" href="#">Register</a>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/login">
          <a class="nav-link active" href="#">Login</a>
        </Link>
        </li>
        <li class="nav-item">
        
          <a class="nav-link active" href="#" onClick={logout}>Logout</a>
        
        </li>
        
          <Link to="/search">
        <input class="form-control me-2" type="search" onChange={input} placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-info" onClick={Searchbook}>Search</button>
        </Link>
   
       
      
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
