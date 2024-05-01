
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/blogs/Home'
import Register from './pages/auth/Register'
import AddBlog from './pages/blogs/AddBlog'
import Login from './pages/auth/Login'
import EditBlog from './pages/blogs/EditBlog'
import SingleBlog from './pages/blogs/SingleBlog'

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/blog/add' element={<AddBlog/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/blog/edit' element={<EditBlog/>}/>
       <Route path='/blog/:id' element={<SingleBlog/>}/> 
  </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
