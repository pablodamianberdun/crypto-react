import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import illustration from "./illustration-btc.svg";
import Form from "./components/Form";
import axios from 'axios'

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }
    font-family: "Nanum Gothic", sans-serif;
`;

const Image = styled.img`
    width: 100%;
`;

function App() {
	const [coin, setCoin] = useState('')
	const [crypto, setCrypto] = useState('')

	useEffect( () => {
		const getQuote = async () => {
			if (coin === '') return

			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
			const response = await axios.get(url)

			console.log(response.data.DISPLAY[crypto][coin])
		}

		getQuote()
	}, [coin, crypto])

    return (
        <Fragment>
            <Header />
            <Container>
                <div>
                    <Form 
						setCoin={setCoin}
						setCrypto={setCrypto}
					></Form>
                </div>
                <div>
                    <Image src={illustration} alt="crypto illustration" />
                </div>
            </Container>
        </Fragment>
    );
}

export default App;
