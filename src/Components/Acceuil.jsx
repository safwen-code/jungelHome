import React from 'react'
import { Container } from '@mui/material'
import Navbar from './Navbar'
import Content from './Content'

const Acceuil = () => {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Content />
    </Container>
  )
}

export default Acceuil
