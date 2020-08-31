import { Container, Section } from 'react-bulma-components'
import logo from '../../img/Farmacias.png'
import React from 'react'
import '../../index.css'

const FooterStore = () => {
  return (
    <Section>
      <Container className="is-centered footer">
        <img src={logo} alt="Logo"/>
      </Container>
    </Section>
  )
}

export default FooterStore