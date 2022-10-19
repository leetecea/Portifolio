import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../styles/NavbarStyle'

export default function Navbar() {
  return (
    <S.Container>
      <S.Navegation>
          <Link to='/'>
            <S.Page>Home</S.Page>
            </Link>
            <Link to='/onu'>
            <S.Page>ODS - São Marcos</S.Page>
            </Link>
            <Link to='/projetos'>
            <S.Page>Projetos</S.Page>
          </Link>
      </S.Navegation>
    </S.Container>
  )
}
