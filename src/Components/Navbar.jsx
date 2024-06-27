import React from 'react'
import { Box, Typography } from '@mui/material'
import logo1 from '../assets/logo1.png'
const Navbar = () => {
  return (
    <Box
      sx={{
        color: 'black',
        textAlign: 'right',
        padding: 4,
        borderBottom: 'solid 1px black',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={logo1}
        alt="logo"
        sx={{
          height: 45,
          width: 45,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          paddingLeft: 4,
        }}
      >
        Jungel Home
      </Typography>
    </Box>
  )
}

export default Navbar
