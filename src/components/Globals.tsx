import styled from "styled-components";

export const Container = styled.main`
	/* Center the container content */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	/* Make the container take up the whole page */
	min-height: 100vh;
	width: 100%;

	/*
		In case the user has a large screen (e.g.: MacBook Pros) 
		It wont be pleasant if the content takes the whole width
		Center, and limit it to 1920px is a good solution
	*/
	max-width: 1920px;
	margin: 0 auto;
`

export const Title = styled.h1`
	font-weight: bold;
	font-size: xx-large;
	text-align: center;
	flex-basis: 100%;
`