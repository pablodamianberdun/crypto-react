import styled from "styled-components"

const Container = styled.div`
	background-color: #5439CB;
	width: 100%;
	margin: 0;
`

const Title = styled.h1`
    margin: 0;
    padding: 20px 0;
    text-align: center;
    color: #ffffff;
    font-family: 'Caveat', cursive;
    font-size: 50px;
`

const Header = (props) => {
	return ( 
		<Container>
			<Title>{props.children}</Title>
		</Container>
	 );
}
 
export default Header;