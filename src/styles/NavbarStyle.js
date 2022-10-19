import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
background-color: #e5e1f1;

`

export const Navegation = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
width: 30em;
height: 4em;

a{
    text-decoration: none;
    color: black;
}

@media only screen and (min-width: 360px) and (max-width: 800px){
    width: 22em;
    height: 3.3em;
}

`
export const Page = styled.p`
font-size: 1.1em;
text-shadow: 1px 1px 1px #938baa;
transition: 1s all;

:hover{
    transform:scale(1.08);
    color: #8f04fa85;
    text-shadow: none;
    background-color: #ffffffba;
    padding: .2em .5em .3em .5em;
    border-radius: 1em;
    border: 1px solid #1e0233;
}

@media only screen and (min-width: 360px) and (max-width: 800px){
    font-size: 1em;
}
`
