import { Box, FormLabel, Stack, Typography, useTheme } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';


function SuccessTp({from , to} : any) {
    const theme = useTheme()
  return (
    
        <Box sx={{ paddingY: 2, paddingX: "77px", boxShadow: 0 }}>

        <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography sx={{ fontSize: "20px", paddingTop:'90px' }} color="primary">
              transaction details :
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              borderBottom: "1px solid #596B89",
              paddingBottom: 2,
              marginTop: "49px",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "16px", marginBottom: 1 , color:'#ABABAB'}}
                color="primary"
              >
                send :
              </Typography>
              <Typography sx={{ fontSize: "16px" , color:'#ABABAB'}} color="primary">
                receive :
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
                <img src="/theter.png" alt="" />
                <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                  USDT
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ gap: 1, justifyContent: "end", display: "flex" }}
              >
                <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                  {to}
                </Typography>
                <img src="/pm2.png" alt="" />
                <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                  Perfect Money
                </Typography>
                
              </Stack>
            </Box>
          </Stack>
        
        <Box sx={{marginTop:'65px', marginBottom:5}}>
            <Stack direction='row' sx={{justifyContent:'center' , alignItems:'center', gap:1}}>
            <CheckIcon sx={{color : theme.palette.success.main ,fontSize:'41px'}}/>
            <Typography sx={{fontSize:'34px', fontWeight:'bold'}} color="success">payment success !</Typography>
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
            E-Voucher :
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
                  2326564925
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
          <FormLabel sx={{ color:'#ABABAB' ,fontSize:'18px' ,}}>
            Activation Code :
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
                  9012037427092330
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
          <FormLabel sx={{ color:'#ABABAB' ,fontSize:'18px' ,}}>
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
                  {from} USDT
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
          <FormLabel sx={{ color:'#ABABAB' ,fontSize:'18px' ,}}>
            Time & Date :
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
                  25-02-2023, 13:22:16
                </Typography>
        </Stack>
        </Box>

        </Box>

    
  )
}

export default SuccessTp
