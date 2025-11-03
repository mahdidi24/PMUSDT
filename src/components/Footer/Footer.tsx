import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Container maxWidth="lg" sx={{marginTop:'90px' , marginBottom:1}}>
      <Box sx={{borderTop : "1px solid #2E3E59"}}>
        <Typography variant="subtitle2" color="#E4E4E4" textAlign={"center"} mt={"18px"}>Copyright © 2024 repayment. All rights reserved.</Typography>
      </Box>
    </Container>
  )
}


export default Footer