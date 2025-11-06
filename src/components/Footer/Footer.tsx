import { Box, Container, Typography } from '@mui/material'


function Footer() {
  return (
    <Container maxWidth="lg" sx={{marginTop:'90px' , marginBottom:1}}>
      <Box sx={{borderTop : "1px solid #2E3E59"}}>
        <Typography variant="subtitle2" color="#ABABAB" textAlign={"center"} mt={"18px"}>Copyright © 2024 repayment. All rights reserved.</Typography>
      </Box>
    </Container>
  )
}


export default Footer