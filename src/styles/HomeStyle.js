import styled from "styled-components";
import Sun from '../assets/sol.jpg'

export const Container = styled.main`
display: flex;
flex-direction: column;
background-color: #e5e1f1;
width: 100%;
height: 93.1vh;

`

export const Contain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
padding: 2rem;
background-image: url(${Sun});
background-position: center;
background-repeat: no-repeat;
background-color: #e5e1f1;

@media only screen and (min-width: 360px) and (max-width: 800px) {
    height: inherit;
}
`

export const BoxOne = styled.div`
    padding: 2rem 1em 2em 1em;
    background-color: #c2a7a787;
    border: .1em solid #341b4e;
    border-radius: 2rem; 
    display:flex;
    align-items: center;
    justify-content: space-around;
    width: 70%;

@media only screen and (min-width: 360px) and (max-width: 800px){
    flex-direction: column;
    width: 100%;
    gap: 1em;
}
`

export const Imagem = styled.img`
width: 20em;
border-radius: 50%;
border: .2rem solid #341b4e;

@media only screen and (min-width: 360px) and (max-width: 800px){
    width: 9em;
}
`

export const BoxTwo = styled.section`
display: flex;
flex-direction: column;
gap: 1em;
align-items: center;
width: 60%;

`


export const Text = styled.p`
@media only screen and (min-width: 360px) and (max-width: 800px){
font-size: .9em;
width: 18em;
margin-bottom: 4.7em;
}
`

export const SocialMedias = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 2em;
padding: 1em;

img{
    width: 2.5em;
    object-fit: cover;
    transition: 1s all;
}
img:hover{
    opacity: .7;
    transform: scale(1.09);
}

@media only screen and (min-width: 360px) and (max-width: 800px){
    padding: .5em 0em .3em 0em;

    img{
    width: 1.8em;
}
}
`

