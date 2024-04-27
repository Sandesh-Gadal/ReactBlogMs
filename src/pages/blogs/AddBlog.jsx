import React from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import Form from './components/form/Form'
import { baseUrl } from '../../../config'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const navigation = useNavigate()
  const handleCreateBlog = async (data)=>{
const response = await axios.post(`${baseUrl}/blog`,data,{
  headers :{
    "Content-Type" : "multipart/form-data",
    "Authorization" : localStorage.getItem('token')
  }
})

try {
  if (response.status === 201){
    navigation.navigate('/')
  }else{
    alert("Something went wrong")
  }
} catch (error) {
  alert(error?.response?.data?.message)
}
  }

  return (
    <Layout>
      <Form type='Create'onSubmit={handleCreateBlog}/>
      </Layout>
  )
}

export default AddBlog