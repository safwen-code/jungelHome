import React, { useState } from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'

import { plantList } from '../data/PlantList'

const ShoppingCarts = () => {
  return (
    <Grid container spacing={2}>
      {plantList.map((plant) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={plant.name}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={plant.cover}
                alt={plant.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {plant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ShoppingCarts
