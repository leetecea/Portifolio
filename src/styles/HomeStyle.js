import styled from "styled-components";
import Sun from '../assets/sol.jpg'

export const Container = styled.section`
display: flex;
flex-direction: column;
background-color: #e5e1f1;
width: 100%;
`

export const Contain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
background-image: url(${Sun});
background-position: center;
background-repeat: no-repeat;
height: 85.3vh;
background-color: #e5e1f1;
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
    height: 100vh;
    gap: 6em;
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
justify-content: space-evenly;
align-items: center;
width: 40em;
height: 15em;
`
export const Title = styled.h2`
padding-bottom: .5em;
`

export const Text = styled.p`
@media only screen and (min-width: 360px) and (max-width: 800px){
font-size: .9em;
width: 18em;
margin-bottom: 6em;
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
}

@media only screen and (min-width: 360px) and (max-width: 800px){
    padding: .5em 0em .3em 0em;

    img{
    width: 1.8em;
}
}
`

