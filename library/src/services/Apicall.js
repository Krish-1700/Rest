

import axios from 'axios';


// axios.methodname()

  export async function getallbooks()
 {
   let token=localStorage.getItem('token')
   let h={'Authorization':token}
     return await axios.get('http://127.0.0.1:8000/books',{'headers':h})
 }

 export async function postbookdetails(data){
  console.log(data)
  let token=localStorage.getItem('token')
  let h={'Authorization':token,'Content-Type':'multipart/form-data'}

return await axios.post("http://127.0.0.1:8000/books/",data,{'headers':h})
} 
 export async function getbookdetails(id)
 {
    return await  axios.get(`http://127.0.0.1:8000/books/${id}`)
 }
 export async function editbookdetails(data,id)
 { 
  let token=localStorage.getItem('token')
   let h={'Authorization':token,'Content-Type':'multipart/form-data'}
    return await  axios.put(`http://127.0.0.1:8000/books/${id}/`,data,{'headers':h})
 }
 export async function deletebookdetail(id)
 {
  let token=localStorage.getItem('token')
   let h={'Authorization':token}
    return await  axios.delete(`http://127.0.0.1:8000/books/${id}/`,{'headers':h})
 }
 export async function createuser(data)
 {
    return await  axios.post("http://127.0.0.1:8000/user/",data)
 }

 export async function loginuser(data)
 {
    return await  axios.post("http://127.0.0.1:8000/login/",data)
 }

 export async function userlogout()
 {
   let token=localStorage.getItem('token')
   let h={'Authorization':token}
    return await  axios.get("http://127.0.0.1:8000/Logout",{'headers':h})
 }

 export async function Searchbook(w)
 {
   let p={'search':w}
    return await  axios.get("http://127.0.0.1:8000/search",{params:p})
 }