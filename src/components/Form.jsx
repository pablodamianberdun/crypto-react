import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useCoin from '../hooks/useCoin'
import useCrypto from '../hooks/useCrypto'

const FormContainer = styled.form`
	margin: 30px 0;
    padding: 30px;
    border-radius: 10px;
    border: solid 1px #eee;
	box-shadow: 0 2px 2px #ccc;
    text-align: center;
`

const Button = styled.button`
	display: block;
    margin: 20px auto;
    padding: 10px 30px;
    background-color: #5439CB;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
	&:hover{
    background-color: #5200BA;
    cursor: pointer;
	}
`

const Form = (props) => {
	const [ cryptoList, setCryptoList] = useState([])

	useEffect( () => {
		const getTopCryptos = async () => {
			const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
			const response = await axios.get(url)
			setCryptoList(response.data.Data)
		}
		getTopCryptos()
	}, [])

	const coins = [
		{code: "USD", name: "Dólar USD"},
		{code: "EUR", name: "Euro"},
		{code: "ARS", name: "Peso Argentino"}
	]

	const [coin, SelectCoin] = useCoin([], coins)

	const [crypto, SelectCrypto] = useCrypto([], cryptoList)

	return ( 
		<FormContainer>
			<h2>Cotizador de Criptomonedas</h2>
			<SelectCoin/>
			<SelectCrypto/>
			<Button>Cotizar</Button>
		</FormContainer>
	);
}
 
export default Form;