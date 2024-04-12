import React, { useContext } from 'react'
import AuthContext from '../utils/authContext'

export default function User() {
    const {token}=useContext(AuthContext)
  return (
    <div>user id:{token}</div>
  )
}
