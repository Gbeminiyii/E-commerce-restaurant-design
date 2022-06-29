import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    body{
        background-color: black;
        overflow-x: hidden;
    }
`