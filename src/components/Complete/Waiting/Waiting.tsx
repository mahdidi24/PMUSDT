import { Box, FormLabel, Paper, Stack, Typography, useTheme } from "@mui/material"
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';


function Waiting({ from, to }: any) {
    const theme = useTheme()
  return (
    <Paper sx={{ borderRadius: "30px", width: "100%", textAlign: "start" }}>
    <Box sx={{ paddingY: 2, paddingX: "77px", boxShadow: 0 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
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
            paddingBottom: 2,
            marginTop: "50px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "16px", marginBottom: 1 }}
              color="primary"
            >
              send :
            </Typography>
            <Typography sx={{ fontSize: "16px" }} color="primary">
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
              <Typography sx={{ fontSize: "14px" }} color="secondry">
                {from}
              </Typography>
              <img src="/pm2.png" alt="" />
              <Typography sx={{ fontSize: "14px" }} color="secondry">
                Perfect Money
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ gap: 1, justifyContent: "end", display: "flex" }}
            >
              <Typography sx={{ fontSize: "14px" }} color="secondry">
                {to}
              </Typography>
              <img src="/theter.png" alt="" />
              <Typography sx={{ fontSize: "14px" }} color="secondry">
                USDT
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Box sx={{marginTop:'65px', marginBottom:5}}>
            <Stack direction='row' sx={{justifyContent:'center' , alignItems:'center', gap:1}}>
            <TimerOutlinedIcon sx={{color : theme.palette.warning.main ,fontSize:'41px'}}/>
            <Typography sx={{fontSize:'34px'}} color="warning">waiting ...</Typography>
            </Stack>
            <Typography fontSize={'20px'} color="primary" sx={{marginTop:'25px' , marginBottom:'14px', textAlign:'center'}}>The transaction was successfully completed and the amount of 100 Tether was deposited to this address</Typography>
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
          <FormLabel sx={{ color: theme.palette.text.primary ,fontSize:'18px' ,}}>
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
          <FormLabel sx={{ color: theme.palette.text.primary ,fontSize:'18px' ,}}>
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
