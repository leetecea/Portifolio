import React from 'react'
import Letícia from './imgs/me.png'
import Linkedin from './imgs/icon-linkedin.svg'
import Instagram from './imgs/icon-instagram.svg'
import GitHub from './imgs/icon-github.svg'
import * as S from '../../styles/HomeStyle'

export default function Home() {
  return (
    <S.Container>
      <S.Contain>
        <figure>
          <S.Imagem src={Letícia} alt="" />
        </figure>
        <section>
          <h2>Sobre mim</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
      </S.Contain>
      <div>
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
        <img src={GitHub} alt="" />
      </div  >
    </S.Container>
  )
}
