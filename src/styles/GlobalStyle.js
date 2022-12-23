import { createGlobalStyle } from "styled-components"
import { pink } from "../constants/colorsButton"

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*{
    box-sizing: border-box;
}

body{
    box-sizing: border-box;
    background: #0E0E13;
    font-family: 'Roboto', sans-serif;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

input{
    width: 300px;
    height: 52px;
    border-radius: 8px;
    background: #FFFFFF;
    padding: 10px;
    border: none;
    color: #7E7E7E;
    font-size: 14px;

    &:focus {
        outline: 2px solid #FF4791;
      }
}

button{
    width: 300px;
    height: 52px;
    border-radius: 8px;
    background: ${pink};
    border: none;
    
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
}

a, link{
    color: inherit;
    text-decoration: none;
}

`

export default GlobalStyle