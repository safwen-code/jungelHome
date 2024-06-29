import React, { useState } from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { plantList } from '../data/PlantList'
import Categori from './Categori'

const ShoppingCarts = ({ card, setcard }) => {
  const [activeCategory, setactiveCategory] = useState('')

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  )

  const handleFavorites = (name, price) => {
    const currentPlantSaved = card.find((plant) => plant.name === name)
    if (currentPlantSaved) {
      const updatedCard = card.map((plant) =>
        plant.name === name ? { ...plant, amount: plant.amount + 1 } : plant,
      )
      setcard(updatedCard)
    } else {
      setcard([...card, { name, price, amount: 1 }])
    }
  }

  return (
    <>
      <Categori
        categories={categories}
        setactiveCategory={setactiveCategory}
        activeCategory={activeCategory}
      />
      <Grid container spacing={2} mt={2}>
        {plantList.map((plant) =>
          !activeCategory || activeCategory === plant.category ? (
            <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
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
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleFavorites(plant.name, plant.price)}
                    >
                      add favorite
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          ) : null,
        )}
      </Grid>
    </>
  )
}

export default ShoppingCarts
