
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Add from './components/Add';
import Register from './components/Register';
import View from './components/View';
import Login from './components/Login';
import Detail from './components/Detail';
import Search from './components/Search';
import Edit from './components/Edit';


function App() {


  return (
    <div className="App">
          <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/view" element={<View/>}></Route>
      <Route path="/detail" element={<Detail/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
     </Routes>


     </BrowserRouter>
    </div>
  );
}

export default App;
