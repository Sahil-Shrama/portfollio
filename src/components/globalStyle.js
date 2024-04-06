import styled  from "styled-components";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

@font-face {
    font-family:lobster ;
    src: url(../font/Lobster-Regular.ttf);
}

@font-face {
    font-family:inter-regular ;
    src: url(../font/Inter-Regular.ttf);
}


@font-face {
    font-family:inter-bold ;
    src: url(../font/Inter-Bold.ttf);
}




body{
    background: #1b1b1b;
    font-family: inter-regular;
}



button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    margin-right: 4rem;
    transition: all 1s ease;
    &:hover{
        background-color:#23d997 ;
        color: white;
    }
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
h3{
    color: white;
}
p{
    padding: 3rem 1rem;
    color: #ccc;
    font-size: 1.1rem;
    line-height: 150%;

}

h4{
    font-weight: bold;
    font-size: 2rem;
}
span{
    font-weight: bold;
    color: #23d997;
}
a{
    font-size: 1.1rem;
}
`

export default GlobalStyle;