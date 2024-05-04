import React from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import Form from './components/form/Form'
import { baseUrl } from '../../../config'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const navigate = useNavigate()
  const handleCreateBlog = async (data)=>{
const response = await axios.post(`${baseUrl}/blog`,data,{

  headers :{
    "Content-Type" : "multipart/form-data",
    "Authorization" : localStorage.getItem('token')
  }
})
console.log(response)

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
      <Form type='Create' onSubmit={handleCreateBlog} buttonname='Submit'/>
      </Layout>
  )
}

export default AddBlog