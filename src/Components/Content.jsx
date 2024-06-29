import React, { useEffect, useState } from 'react'
import Pannier from './Pannier'
import ShoppingCarts from './ShoppingCarts'
import { Box } from '@mui/material'

const Content = () => {
  const savedCard = localStorage.getItem('card')
  const [card, setcard] = useState(savedCard ? JSON.parse(savedCard) : [])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('card', JSON.stringify(card))
  }, [card])

  useEffect(() => {
    setIsOpen(card.length > 0)
  }, [card])

  return (
    <Box display="grid">
      <Pannier
        card={card}
        setcard={setcard}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <ShoppingCarts card={card} setcard={setcard} isOpen={isOpen} />
    </Box>
  )
}

export default Content
