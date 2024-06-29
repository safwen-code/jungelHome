import React from 'react'
import {
  Box,
  InputLabel,
  Button,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'

const Categori = ({ categories, setactiveCategory, activeCategory }) => {
  return (
    <Box
      sx={{ float: 'right', display: 'flex', flexDirection: 'column' }}
      pt={3}
    >
      <FormControl sx={{ width: '200px' }}>
        <InputLabel id="demo-simple-select-label">Choose Categorie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activeCategory}
          label="Categories"
          onChange={(e) => setactiveCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={() => setactiveCategory('')}>Réinitialiser</Button>
    </Box>
  )
}

export default Categori
