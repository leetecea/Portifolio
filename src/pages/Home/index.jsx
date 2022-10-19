import React from 'react'
import Letícia from '../../assets/me.png'
import Linkedin from '../../assets/icon-linkedin.svg'
import Instagram from '../../assets/icon-instagram.svg'
import GitHub from '../../assets/icon-github.svg'
import * as S from '../../styles/HomeStyle'

export default function Home() {
  return (
    <S.Container>
      <S.Contain>
        <S.BoxOne>
          <figure>
            <S.Imagem src={Letícia} alt="Foto da Letícia" />
          </figure>
          <S.BoxTwo>
            <S.Title>Sobre mim</S.Title>
            <S.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</S.Text>
          </S.BoxTwo>
        </S.BoxOne>
        </S.Contain>
      <S.SocialMedias>
        <a href="https://www.instagram.com/leetecea/" target="_blank">
        <img src={Instagram} alt="Ícone Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/let%C3%ADcia-costa/" target="_blank">
        <img src={Linkedin} alt="Ícone Linkedin" />
        </a>
        <a href="https://github.com/leetecea" target="_blank">
        <img src={GitHub} alt="Ícone Github" />
        </a>
      </S.SocialMedias>
    </S.Container>
  )
}
