import React from 'react'
import css from './Hero.module.scss'

const Hero = () => {
	return (
		<div className='container'>
			<div className={css.hero}>
				<div className={css.hero__left}>
					<h1>
						Adidas <br /> Nite Jogger
					</h1>
					<p>Городские кроссовки в<br/> ярком стиле 80-х</p>
					<button
						className={css.hero__left_button}
					>
						Смотреть все
					</button>
				</div>
				<div></div>
			</div>
			<div></div>
		</div>
	)
}

export default Hero
