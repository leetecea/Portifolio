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
    padding: 4rem;
    background-color: #c2a7a787;
    border: .1em solid #341b4e;
    border-radius: 2rem; 
    display:flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
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
width: 35em;
height: 15em;
`
export const Title = styled.h2`
padding-bottom: 1em;

`
    

export const Text = styled.p`

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
`

