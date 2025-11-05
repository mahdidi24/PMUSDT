import { Box, FormLabel, Paper, Stack, Typography, useTheme } from "@mui/material"



function Waiting({ from, to }: any) {
    const theme = useTheme()
  return (
    <Paper sx={{ borderRadius: "30px", width: "100%", textAlign: "start" , boxShadow: 0}}>
    <Box sx={{ paddingY: 2, paddingX: "77px"}}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center", paddingTop:'90px' }}
        >
          <Typography sx={{ fontSize: "20px" }} color="primary">
            transaction details :
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid #596B89",
            paddingBottom: "44px",
            marginTop: "50px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "16px", marginBottom: 1 , color:'#ABABAB'}}
              color="primary"
            >
              Send :
            </Typography>
            <Typography sx={{ fontSize: "16px" , color:'#ABABAB'}} color="primary">
              Receive :
            </Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              sx={{
                gap: 1,
                marginBottom: 1,
                justifyContent: "end",
                display: "flex",
              }}
            >
              <Typography sx={{ fontSize: "14px" ,fontWeight:'bold'}} color="secondry">
                {from}
              </Typography>
              <img src="/pm2.png" alt="" />
              <Typography sx={{ fontSize: "14px" ,fontWeight:'bold'}} color="secondry">
                Perfect Money
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ gap: 1, justifyContent: "end", display: "flex" }}
            >
              <Typography sx={{ fontSize: "14px" ,fontWeight:'bold'}} color="secondry">
                {to}
              </Typography>
              <img src="/theter.png" alt="" />
              <Typography sx={{ fontSize: "14px" ,fontWeight:'bold'}} color="secondry">
                USDT
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Box sx={{marginTop:'28px', marginBottom:5}}>
            <Stack direction='row' sx={{justifyContent:'center' , alignItems:'center', gap:1}}>
            <img src="waiting.png"/>
            <Typography sx={{fontSize:'34px', fontWeight:'bold'}} color="#FFAF00">waiting ...</Typography>
            </Stack>
            <Typography fontSize={'20px'} color="primary" sx={{marginTop:'25px' , marginBottom:'14px', textAlign:'center', color:'#ABABAB'}}>The Transaction Was Successfully Completed And The Amount Of 100 Tether Was Deposited To This Address</Typography>
        </Box>
            <Box>
        <Stack direction='row'
          sx={{
            width: "100%",
            marginY: 2,
            justifyContent : 'space-between',
            alignItems:'center'
          }}
        >
          <FormLabel sx={{ color:'#ABABAB' ,fontSize:'18px' }}>
            Adress:
          </FormLabel>
          <Typography
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    padding: 2,
                    borderRadius:'10px',
                    width: "80%",
                    letterSpacing: 4
                  }}
                  color="secondry"
                >
                  x09aa998ee454c456255daf3ac94908f1dcfb7033
                </Typography>
        </Stack>
        <Stack direction='row'
          sx={{
            width: "100%",
            marginY: 2,
            justifyContent : 'space-between',
            alignItems:'center'
          }}
        >
          <FormLabel sx={{  color:'#ABABAB' ,fontSize:'18px' ,}}>
            Amount :
          </FormLabel>
          <Typography
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    padding: 2,
                    borderRadius:'10px',
                    width: "80%",
                    letterSpacing: 4
                  }}
                  color="secondry"
                >
                  {to} USDT
                </Typography>
        </Stack>
        <Stack direction='row'
          sx={{
            width: "100%",
            marginY: 2,
            justifyContent : 'space-between',
            alignItems:'center'
          }}
        >
        </Stack>
        
          </Box>


    </Box>
    </Paper>
  )
}

export default Waiting
