import React from 'react'
import * as S from '../../styles/OnuStyle.js'
import Card from '../CardOnu/index'
import Fome from '../../assets/fome.png'
import Lazer from '../../assets/lazer.png'
import Mercado from '../../assets/mercado.png'
import Saude from '../../assets/saude-mental.png'
import Educacao from '../../assets/educacao.png'

export default function index(props) {

  return (
    <S.Container>
      <h1>Objetivos de Desenvolvimento Sustentável em São Marcos</h1>
      <S.Contain>
        <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos especialmente pensados para a localidade de São Marcos.</p>
      </S.Contain>
      <S.Contain>
        <Card title='Fome Zero' img={Fome} />
        <Card title='Acesso ao esporte e cultura' img={Lazer} />
        <Card title='Diversificar mercadores locais' img={Mercado} />
        <Card title='Apoio a saúde mental' img={Saude} />
        <Card title='Educação de qualidade' img={Educacao} />
      </S.Contain>
    </S.Container>
  )
}
