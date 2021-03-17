import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import illustration from './illustration-btc.svg'
import Form from './components/Form'

const Container = styled.div`
	max-width: 80%;
	margin: 0 auto;
	text-align: center;
	@media (min-width: 992px){
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}
	font-family: 'Nanum Gothic', sans-serif;
`

const Image = styled.img`
	width: 100%;
`

function App() {
  return (
    <div>
      <Header>Crypto</Header>
	  <Container>
		  <div>
			<Form></Form>
		  </div>
		  <div>
			<Image
				src={illustration}
				alt="crypto illustration"
			/>
		  </div>
	  </Container>
    </div>
  );
}

export default App;