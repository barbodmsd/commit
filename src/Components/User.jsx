import React, { useContext } from 'react'
import AuthContext from '../Utils/authContext'

export default function User() {
    const {token}=useContext(AuthContext)
  return (
    <h2>User id:{token}</h2>
  )
}
