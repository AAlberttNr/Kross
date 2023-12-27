import React from 'react'
import { Route, Router, Outlet } from 'react-router-dom'
import MainPage from '../pages/HomePage/HomePage'

const Layout = () => {
	return (
		<div>
			Header.
			<Outlet />
			Footer.
		</div>
	)
}

const AppRoutes = () => {
	return (
		<Router>
			<Route path='/' element={<Layout />}>
        <Route index element={<MainPage />}/>
      </Route>
		</Router>
	)
}

export default AppRoutes
