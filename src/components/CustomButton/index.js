import React from 'react'
import Button from '@mui/material/Button';

/** Custom button component */
const CustomButton = ({ name })=>  {
	// const name = props.name
	return (
		<Button variant="outlined">{ name }</Button>
	)
}

export default CustomButton