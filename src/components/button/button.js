import React from 'react'
// import { FiLoader } from 'react-icons/fi'

// import { defaultTheme } from '../../styles/theme'
import { Container } from './styles'

const Button = ({ color, type, message }) => {
  return (
    <Container disabled={false} color={color} type={type}>
			{message}
		</Container>
  )
}

export default Button
