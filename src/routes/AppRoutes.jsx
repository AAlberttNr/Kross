import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import MainPage from '../pages/HomePage/HomePage'

const Layout = () => {
	return (
		<div>
			Header
			<Outlet />
			Footer
		</div>
	)
}

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
        <Route index element={<MainPage />}/>
        <Route path='test' element={<p>test</p>}/>
      </Route>
		</Routes>
	)
}

export default AppRoutes
