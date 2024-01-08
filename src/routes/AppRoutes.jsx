import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
//
import Hero1 from '../components/Hero/Hero1/Hero'
import Hero2 from '../components/Hero/Hero2/Hero'
import Hero3 from '../components/Hero/Hero3/Hero'
//

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
				<Route>
					<Route index element={<Hero1 />} />
					<Route path='hero2' element={<Hero2 />} />
					<Route path='hero3' element={<Hero3 />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default AppRoutes
