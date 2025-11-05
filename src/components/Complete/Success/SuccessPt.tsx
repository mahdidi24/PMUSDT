import { Box, FormLabel, Paper, Stack, Typography, useTheme, IconButton, Snackbar } from "@mui/material"
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import { useState } from "react";


function SuccessPt({from , to} : any) {
    const theme = useTheme()
    const [open, setOpen] = useState(false);
    const Tx = 'f9798ecf9e9cc54dd819c8e1dc36588a6a7fe9d8e055d56ef6a9847139a4ed6c'

    const handleCopy = async ()=>{
        await navigator.clipboard.writeText(Tx)
        setOpen(true);
    }

  return (
     <Paper sx={{ borderRadius: "30px", width: "100%", textAlign: "start" }}>
        <Box sx={{ paddingY: 2, paddingX: "77px", boxShadow: 0 }}>

        <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center", paddingTop:'90px'}}
          >
            <Typography sx={{ fontSize: "20px" }} color="primary">
              Transaction Details :
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              borderBottom: "1px solid #596B89",
              paddingBottom: 2,
              marginTop: "80px",
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
        
        <Box sx={{marginTop:'29px', marginBottom:5}}>
            <Stack direction='row' sx={{justifyContent:'center' , alignItems:'center', gap:1}}>
            <img src="success.png"/>
            <Typography sx={{fontSize:'34px', fontWeight:'bold'}} color="success">Payment Success !</Typography>
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
          <FormLabel sx={{ color:'#ABABAB' ,fontSize:'18px' ,}}>
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
        <Stack direction='row'
          sx={{
            width: "100%",
            marginY: 2,
            justifyContent : 'space-between',
            alignItems:'center'
          }}
        >
          <FormLabel sx={{  color:'#ABABAB' ,fontSize:'18px' ,}}>
            Tx Id :
          </FormLabel>
          <Stack direction='row' sx={{width: "80%", height:'112px' , backgroundColor: theme.palette.background.default, borderRadius:'10px', gap:5, justifyContent:'center' , alignItems:'center'}}>
          <Typography
                  sx={{
                    
                    padding: 2,
                    borderRadius:'10px',
                    letterSpacing: 4,
                    wordBreak: 'break-all',
                  }}
                  color="secondry"
                >
                  f9798ecf9e9cc54dd819c8e1dc36588a6a7fe9d8e055d56ef6a9847139a4ed6c
                </Typography>
                <IconButton onClick={handleCopy} sx={{backgroundColor: theme.palette.background.paper ,borderRadius:'10px', width:'45px' , height:'45px', marginRight:3}}>
                  <ContentCopyOutlinedIcon sx={{color:theme.palette.text.primary}}/>
                </IconButton>
                </Stack>
        </Stack>
        </Box>

        </Box>

        <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message="✅ ID copied!"
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              />

    </Paper>
  )
}

export default SuccessPt
