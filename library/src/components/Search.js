import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Searchbook } from '../services/Apicall'

function Search() {
  const {search}=useLocation()

  const queryParams=new URLSearchParams(search)
  const w=queryParams.get('word')
  console.log(w)
  const [books,setbook]=useState([])
 async function searchbooks()
  {
    let res=await Searchbook(w)
    // console.log(res)
    setbook(res.data)

  }


 useEffect(()=>{searchbooks()},[w]) 
  return (
    <div>
       <div>
      <div class="container mt-3 w-75 bg-secondary text-light p-3">
        {Array.isArray(books)? 
        <table class="table table-bordered text-light">
        <thead>
            <tr>
            <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">price</th>
              <th scope='col'>Pages</th>
              <th scope='col'>Language</th>
           
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
                          </tr>)}
         
          </tbody>
        </table>:<h2>NO results found</h2>}
       
      </div>
    </div>
    </div>
  )
}

export default Search
