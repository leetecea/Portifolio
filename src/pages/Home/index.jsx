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
            <h2>Sobre mim</h2>
            <S.Text>Olá, visitante! Seja bem vindo ao meu portifólio, espero que o visual tenha te agradado. Me chamo Letícia, tenho 23 anos, sou vegetariana e apaixonada por animais (especialmente gatos). Como passatempo gosto muito de ler, assistir filmes, séries e também sou viciada em animações, meu lugar favorito no mundo até agora tem sido uma praia. E posso afirmar que estar em contato com a natureza me recarrega emocionalmente/espiritualmente de uma maneira inexplicável.</S.Text>
          </S.BoxTwo>
        </S.BoxOne>
        </S.Contain>
      <S.SocialMedias>
        <a href="https://www.instagram.com/leetecea/" target="_blank" rel="noreferrer noopener">
        <img src={Instagram} alt="Ícone Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/let%C3%ADcia-costa/" target="_blank" rel="noreferrer noopener">
        <img src={Linkedin} alt="Ícone Linkedin" />
        </a>
        <a href="https://github.com/leetecea" target="_blank" rel="noreferrer noopener">
        <img src={GitHub} alt="Ícone Github" />
        </a>
      </S.SocialMedias>
    </S.Container>
  )
}
