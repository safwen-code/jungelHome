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
  useMediaQuery,
  useTheme,
} from '@mui/material'

const Pannier = ({ card, setcard, isOpen, setIsOpen }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const total = card.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0,
  )

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
  }, [total])

  const restPanier = () => {
    setcard([])
    setIsOpen(false)
  }

  return (
    <>
      <Drawer
        anchor={isMobile ? 'bottom' : 'left'}
        open={isOpen}
        variant="persistent"
        PaperProps={{
          sx: {
            width: isMobile ? '100%' : '240px',
            height: isMobile ? 'auto' : '100%',
          },
        }}
      >
        <Divider />
        {card.length > 0 ? (
          <>
            <Typography component="h6" variant="h6" sx={{ p: 2 }}>
              Mon Panier
            </Typography>
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
              <Typography component="h4" sx={{ mx: 2 }}>
                Total: {total}€
              </Typography>
              <Button color="success" onClick={restPanier}>
                Clear panier
              </Button>
            </List>
          </>
        ) : (
          <Typography component="span" sx={{ p: 2 }}>
            Votre panier est vide
          </Typography>
        )}
        <Divider />
      </Drawer>
    </>
  )
}

export default Pannier
