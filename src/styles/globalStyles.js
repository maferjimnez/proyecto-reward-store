import { createGlobalStyle } from 'styled-components';
import variables from '../styles/variables';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
	color: ${variables.darkGrayFont};
	scroll-behavior: smooth;
	    transition: 0.3s ease-in;
}`;

export default GlobalStyle