import React from 'react'
import * as S from './CardOnuStyle'

export default function index(props) {

  return (
    <S.Container>
      <S.Contain>
        <S.Image src={props.img} alt={props.title}/>
        <h2>{props.title}</h2>
      </S.Contain>
    </S.Container>
  )
}