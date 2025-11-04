import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SuccessPt from "../Success/SuccessPt";
import FailedPt from "../Failed/FailedPt";
import Waiting from "../Waiting/Waiting";
import CircularTimer from "../../Timer/Timer";



function PmToTheter( {from , to} : any) {

  const [submit , setSubmit] = useState(0)
  const fromProps = from
  const toProps = to
  const theme = useTheme();

  const handleSubmit = ()=>{
      setSubmit(1)
    }
    const handleFailde = ()=>{
      setSubmit(2)
    }
    const handleWait = ()=>{
      setSubmit(3)
    }

  return (
      <Paper sx={{ borderRadius: "30px", width: "100%" , textAlign:'start'}}>
        {submit === 0 && (
        <Box sx={{paddingY: 2, paddingX: "77px", boxShadow: 0}}>
        <Stack direction='row' sx={{ justifyContent:'space-between', alignItems:'center'}}>
            <Typography sx={{fontSize:'20px'}} color="primary">transaction details :</Typography>
            <CircularTimer duration={15} size={170} onComplete={() => setSubmit(2)}/>

        </Stack>


        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid #596B89",
            paddingBottom: 2,
            marginTop:'50px'
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
            <Stack direction="row" sx={{ gap: 1, marginBottom: 1 , justifyContent:'end' , display:'flex', fontWeight:'bold'}}>
              <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                {from}
              </Typography>
              <img src="/pm2.png" alt="" />
              <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                Perfect Money
              </Typography>
             
            </Stack>
            <Stack direction="row" sx={{ gap: 1 , justifyContent:'end' , display:'flex' }}>
              <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                {to}
              </Typography>
             <img src="/theter.png" alt="" />
              <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                USDT
              </Typography>

              
            </Stack>
          </Box>
        </Stack>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: 2,
            marginBottom: 2,
            
          }}
        >
          <FormLabel sx={{  color:'#ABABAB' }}>
            perfect money code :
          </FormLabel>
          <TextField
            value={''}
            name="email"
            type="email"
            required
            placeholder="Please enter perfect money code "
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <FormLabel sx={{  color:'#ABABAB' }}>
            perfect money number :
          </FormLabel>
          <TextField
            value={''}
            name="email"
            type="email"
            required
            placeholder="Please enter perfect money number "
          />
        </Box>
        <Box sx={{width:'100%'}}>
            <FormLabel sx={{  color:'#ABABAB' }}>
            perfect money number :
          </FormLabel>
        <Stack
                direction="row"
                sx={{
                  justifyContent: "start",
                  alignItems: "center",
                  width: "100%",
                  marginY:1
                }}
              >
                <Select
                defaultValue="TRON"
                  sx={{
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    backgroundColor: "#1D8D94",
                    width: "126px",
                    "& .MuiSelect-icon": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="TRON">TRON</MenuItem>
                </Select>
                <Typography
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    padding: 2,
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    width: "100%",
                  }}
                  color="secondry"
                >
                  {" "}
                  x09aa998ee454c456255daf3ac94908f1dcfb7033
                </Typography>
              </Stack>
              </Box>
              
        
        <Box sx={{display:'flex', justifyContent:'center' , marginTop:'42px', marginBottom:5}}>
            <Button onClick={handleSubmit} sx={{height:'60px' , width:'560px'}}>Submit</Button>
        </Box>
        <Stack direction='row' sx={{justifyContent:'center', alignItems:'center' , gap:5}}>
        <Box sx={{display:'flex', justifyContent:'center' , marginTop:'42px', marginBottom:5}}>
            <Button onClick={handleFailde} sx={{height:'60px' , width:'250px', backgroundColor : theme.palette.error.main}}>Failed</Button>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center' , marginTop:'42px', marginBottom:5}}>
            <Button onClick={handleWait} sx={{height:'60px' , width:'250px', backgroundColor : theme.palette.warning.main}}>Waiting</Button>
        </Box>
        </Stack>

        </Box>
        )}
        {submit === 1 && (<SuccessPt from ={fromProps} to={toProps}/>)}
        {submit === 2 && (<FailedPt from ={fromProps} to={toProps}/>)}
        {submit === 3 && (<Waiting from ={fromProps} to={toProps}/>)}
    </Paper>
  );
}

export default PmToTheter;
