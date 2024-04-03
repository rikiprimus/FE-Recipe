import React from 'react'
import { Navigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'

export default function Auth({children}) {
	const authdata = useSelector((state)=>state.login.data)
	if(!authdata){
		return <Navigate to="/register" replace={true} />
	}
	return children
}
