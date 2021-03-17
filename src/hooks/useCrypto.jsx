import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

const Select = styled.select`
    display: block;
	margin: 10px auto;
    padding: 5px;
    width: 60%;
`

const useCrypto = (initialState, cryptos) => {
	const [state, setState] = useState(initialState)

	const SelectCrypto = () => (
		<Fragment>
			<Select 
				onChange={ e => setState(e.target.value)} 
				value={state}
			>
				<option value="" disabled>-- Criptomenda --</option>
				{cryptos.map( crypto => (
					<option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
				))}
			</Select>
		</Fragment>
	)

	return [state, SelectCrypto, setState]
}
 
export default useCrypto;