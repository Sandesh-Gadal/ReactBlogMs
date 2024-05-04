import React from 'react'
import Layout from '../../components/layout/Layout'

import Form from './components/form/Form'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../../config'

const EditBlog = () => {
  const { id } = useParams(); 
  console.log(id)
  const navigate = useNavigate()
  const handleEditBlog = async (data)=>{
const response = await axios.patch(`${baseUrl}/blog/${id}`,data,{

  headers :{
    "Content-Type" : "multipart/form-data",
    "Authorization" : localStorage.getItem('token')
  }
})

try {
  if (response.status === 201){
    navigate('/')
  }else{
    alert("Something went wrong")
  }
} catch (error) {
  alert(error?.response?.data?.message)
}
  }
  return (
   <Layout>
      <Form  type='Edit'  onSubmit={handleEditBlog} buttonname='Edit'/>
   </Layout>

  )
}

export default EditBlog