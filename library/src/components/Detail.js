import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getbookdetails } from '../services/Apicall'

function Detail() {
  const [book,setbook]=useState({})
    const {search}=useLocation()
    console.log(search)
    
    const queryParams=new URLSearchParams(search)
    const id=queryParams.get('id')
    console.log(id)

    async function fetchbooks()
     {
     
        let res=await getbookdetails(id)
        // console.log(res.data)
        setbook(res.data)
    }


     useEffect(()=>{fetchbooks()},[]) 



  return (
    <div>
      <h3 class="text-center">Details</h3>
      <div class="container mt-3 w-75 bg-secondary text-light p-3">
        <table class="table table-bordered text-light">
        <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">TITLE</th>
              <th scope="col">AUTHOR</th>
              <th scope="col">PRICE</th>
              <th scope="col">PAGES</th>
              <th scope="col">LANGUAES</th>
            </tr>
          </thead>
          <tbody>
                  <tr>
              <td><img src={book.image} height="100px" width="100px"></img></td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.pages}</td>
              <td>{book.languages}</td>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Detail
