import React from 'react'
import Layout from '../../components/layout/Layout'

import Form from './components/form/Form'
import { baseUrl } from '../../../config'

const AddBlog = () => {
  const handleCreateBlog = async (data)=>{
const response = await axios.post(`${baseUrl}`,data,{
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
      <Form type='Create'onsubmit={handleCreateBlog}/>
      </Layout>
  )
}

export default AddBlog