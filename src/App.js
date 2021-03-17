import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import illustration from "./illustration-btc.svg";
import Form from "./components/Form";
import axios from 'axios'
import ResultCard from './components/ResultCard'
import Spinner from './components/Spinner'

const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
    font-family: 'Roboto', sans-serif;
`;

const FormContainer = styled.div`
	margin: 30px 0;
    padding: 30px;
    border-radius: 10px;
    border: solid 1px #eee;
	box-shadow: 0 2px 2px #ccc;
    text-align: center;
`

const Image = styled.img`
    width: 100%;
`;

function App() {
	const [coin, setCoin] = useState('')
	const [crypto, setCrypto] = useState('')
	const [result, setResult] = useState('')
	const [loading, setLoading] = useState(false)

	useEffect( () => {
		const getQuote = async () => {
			if (coin === '') return

			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
			const response = await axios.get(url)

			setLoading(true)

			setTimeout(() => {
				setLoading(false)
				setResult(response.data.DISPLAY[crypto][coin])
			}, 2000);

		}

		getQuote()
	}, [coin, crypto])

    return (
        <Fragment>
            <Header />
            <Container>
                <FormContainer>
                    <Form 
						setCoin={setCoin}
						setCrypto={setCrypto}
					></Form>
					{loading ? <Spinner/> : <ResultCard result={result}/>}
                </FormContainer>
                <div>
                    <Image src={illustration} alt="crypto illustration" />
                </div>
            </Container>
        </Fragment>
    );
}

export default App;
