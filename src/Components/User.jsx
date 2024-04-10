import React, { useContext } from 'react'
import AuthContext from '../Utils/authContext'

export default function User() {
    const id=useContext(AuthContext)
  return (
    <div>
        User id:{id}
    </div>
  )
}
