import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        font-family:'Roboto';
        align-items:center;
        justify-content:center;
        width:100vw;
        height:100vh;
        color: white;
        background: linear-gradient(to right,#5f2c82, #49a09d);
        backdrop-filter: blur(25px);
        padding:2em;
    }          
`