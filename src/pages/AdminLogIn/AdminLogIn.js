import React from 'react'
import { LogIn } from '../../components'
import { logInObject } from './Data'

const AdminLogIn = () => {
  return (
    <>
      <LogIn {...logInObject}/>
    </>
  )
}

export default AdminLogIn
