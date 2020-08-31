import React from 'react'
import PropTypes from 'prop-types'
import '../../index.css'
import { Container, Section } from 'react-bulma-components'

const Header = ({ title }) => {
  return (
    <Section>
      <Container>
        <div className="container">
          <div className="logo">{title}</div>
        </div>
      </Container>
    </Section>
  )
}

Header.prototype = {
  title: PropTypes.string.isRequired
}

/*
    <Section>
      <Container>
        <h1 className="title  has-text-centered">{title}</h1>
      </Container>
    </Section>
 */
export default Header
