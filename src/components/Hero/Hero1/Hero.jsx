import React from 'react'
import css from './Hero.module.scss'
import Button from '../../../UI/Button/Button'
import HeroShoes1 from '../../../assets/img/Hero_Bottom_Red.png'
import HeroBlueBg from '../../../assets/img/Hero_BlueBg.png'
// Bottom
import Hero_Arrow from '../../../assets/img/Hero_Arrow.png'
import bottom_shoes1 from '../../../assets/img/Hero2_Bottom_Yellow.png'
import bottom_shoes2 from '../../../assets/img/Hero3_Bottom_White.png'
//

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

			<div className={css.hero__cards}>
				<div className={css.hero__cards_card}>
					<img className={css.Arrow} src={Hero_Arrow} />
					<img className={css.bottom_shoes} width={183} src={bottom_shoes1} />
					<h4>
						Adidas <br />
						Yeezy Boost{' '}
					</h4>
				</div>
				<div className={css.hero__cards_card}>
					<img className={css.Arrow} src={Hero_Arrow} />
					<img className={css.bottom_shoes} width={183} src={bottom_shoes2} />
					<h4>Nike <br/>Air Max</h4>
				</div>
			</div>
		</div>
	)
}

export default Hero
