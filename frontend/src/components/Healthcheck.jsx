import React, { useState } from 'react'
import axios from 'axios'

const Healthcheck = () => {
  const [msg, setMsg] = useState('')
  const response = async () => {
    const data = await axios.post('/api/v1/users');
    // console.log(data.data)
    setMsg(data.data)
  }
  response()
  return (
    <div>Healthcheck: {msg}</div>
  )
}

export default Healthcheck