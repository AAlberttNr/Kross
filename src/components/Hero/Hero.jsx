import React from 'react'
import css from './Hero.module.scss'
import Button from '../../UI/Button/Button'
import HeroShoes1 from '../../assets/img/Hero_Shoes1.png'
import HeroBlueBg from '../../assets/img/Hero_BlueBg.png'

const Hero = () => {
	return (
		<div className='container'>
			<div className={css.hero}>
				<div className={css.hero__left}>
					<h1>
						Adidas <br /> Nite Jogger
					</h1>
					<p>
						Городские кроссовки в<br /> ярком стиле 80-х
					</p>
					<div className={css.hero__left_button}>
						<Button>Смотреть все</Button>
					</div>
				</div>
				<div className={css.hero__right}>
					<div style={{ position: 'absolute' }}>
						<img src={HeroShoes1} />
					</div>
					<div style={{ marginTop: '-50px', marginRight: '-148px' }}>
						<img src={HeroBlueBg} />
					</div>
				</div>
			</div>

			<div>
				<div></div>
			</div>
		</div>
	)
}

export default Hero
