import { Button as MuiButton } from '@mui/material'

const Button = ({ children }) => {
	return (
		<MuiButton
			sx={{
				background: '#F7AB42',
				p: '24px 53px',
			}}
			variant='contained'
		>
			{children}
		</MuiButton>
	)
}

export default Button
