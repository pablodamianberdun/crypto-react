import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	color: white;
	background-color: #3c2992;
	width: 100%;
	text-align: start;
	margin: 0 auto;
	padding: 30px 40px;
	border-radius: 10px;

	& p{
		margin-bottom: 10px;
	}

	& p span {
		font-weight: bold;
	}
`

const ResultCard = ({result}) => {
	if (Object.values(result).length === 0) return null

	return ( 
		<Card>
			<p>El precio es: <span>{result.PRICE}</span></p>
			<p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
			<p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
			<p>Variación Últimas 24 hs: <span>{result.CHANGEPCT24HOUR}%</span></p>
			<p>Última Actualización: <span>{result.LASTUPDATE}</span></p>
		</Card>
	 );
}
 
export default ResultCard;