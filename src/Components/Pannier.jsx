import React, { useEffect, useState } from 'react'
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'

const Pannier = ({ card, setcard }) => {
  const [isOpen, setIsOpen] = useState(true)

  const total = card.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0,
  )
  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
  }, [total])
  const restPanier = () => {
    setcard([])
    setIsOpen(!isOpen)
  }
  return (
    <Drawer anchor="left" open={card.length > 0 && true} variant="persistent">
      <Divider />
      {card.length > 0 ? (
        <>
          <Typography component="h6">Mon Panier</Typography>
          <List>
            {card.map((c, index) => (
              <ListItem key={`${c.name} - ${index}`} disablePadding>
                <ListItemButton>
                  <ListItemText>
                    {c.name} {c.price}€ x {c.amount}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Typography component="h4" mx={2}>
              Total: {total}€
            </Typography>
            <Button color="success" onClick={() => restPanier()}>
              Clear panier
            </Button>
          </List>
        </>
      ) : (
        <Typography component="span">Votre panier est vide</Typography>
      )}
      <Divider />
    </Drawer>
  )
}

export default Pannier
