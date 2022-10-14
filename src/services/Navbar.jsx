import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../styles/NavbarStyle'

export default function Navbar() {
  return (
    <S.Container>
      <S.Navegation>
          <Link to='/'>
            <p>Home</p>
            </Link>
            <Link to='/onu'>
            <p>Onu</p>
            </Link>
            <Link to='/projetos'>
            <p>Projetos</p>
          </Link>
      </S.Navegation>
    </S.Container>
  )
}
