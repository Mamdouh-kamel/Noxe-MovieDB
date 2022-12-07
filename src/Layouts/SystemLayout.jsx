import React from 'react'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { store } from '../components/Redux/Store'

export default function SystemLayout() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet></Outlet>
      </Provider>

    </>
  )
}
