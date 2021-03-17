import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

const Select = styled.select`
    display: block;
	margin: 10px auto;
    padding: 5px;
    width: 60%;
`

const useCoin = (initialState, options) => {
	const [state, setState] = useState(initialState)

	const SelectCoin = () => (
		<Fragment>
			<Select 
				onChange={ e => setState(e.target.value)} 
				value={state}
			>
				<option value="" disabled>-- Moneda --</option>
				{options.map( option => (
					<option key={option.code} value={option.code}>{option.name}</option>
				))}
			</Select>
		</Fragment>
	)

	return [state, SelectCoin, setState]
}
 
export default useCoin;