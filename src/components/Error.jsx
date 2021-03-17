import React from 'react'
import styled from 'styled-components'

const Message = styled.h1`
	color: white;
	background-color: red;
	text-transform: uppercase;
	font-size: 20px;
	font-weight: bold;
	padding: 10px 0;
	margin-bottom: 20px;
`

const Error = ({msg}) => {
	return ( 
		<Message>{msg}</Message>
	 );
}
 
export default Error;