import {
  Box,
  Container,
  Button,
  useTheme,
  Typography,
  Stack,
  TextField,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import { useState } from "react";

function Exchange({ onNext1, onSetExchange }: any) {
  const theme = useTheme();
  const [swap, setSwap] = useState(false);

  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const handleSwap = () => {
    setSwap((prev) => !prev);

    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleMakeExchange = () => {
    if(fromAmount !== '' && toAmount !== ''){
    const exchangeData = {
      direction: swap ? "pm-to-usdt" : "usdt-to-pm",
      fromAmount,
      toAmount,
      swap,
    };

    onSetExchange(exchangeData);
    onNext1();}
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: "30px",
            width: "560px",
            height: "213px",
            padding: 4,
          }}
        >
          <Typography sx={{ paddingLeft: "3px" }} color="primary">
            From:
          </Typography>

          <Stack
            direction="row"
            sx={{
              width: "100%",
              backgroundColor: theme.palette.background.default,
              borderRadius: "10px",
              marginTop: 3,
            }}
          >
            <TextField
              value={fromAmount}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setFromAmount(value);
              }}
              sx={{
                width: "50%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                    borderRight: "1px solid #313A4B",
                  },
                },
              }}
              placeholder="1000"
            />
            <Select
              value={swap ? "pm" : "usdt"}
              sx={{
                width: "50%",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            >
              {swap ? (
                <MenuItem value="pm">
                  <img src="/pm2.png" alt="" width="22" height="22" /> Perfect
                  Money
                </MenuItem>
              ) : (
                <MenuItem value="usdt">
                  <img src="/theter.png" alt="" width="22" height="22" /> USDT
                  (TRC20)
                </MenuItem>
              )}
            </Select>
          </Stack>
          <Stack direction="row" sx={{ gap: 2, marginTop: 2 }}>
            <Typography sx={{ fontSize: "14px" }} color="primary">
              Min : $100
            </Typography>
            <Typography sx={{ fontSize: "14px" }} color="primary">
              Max: $4832
            </Typography>
          </Stack>
        </Box>

        <IconButton
          onClick={handleSwap}
          sx={{
            position: "absolute",
            ":hover": { border: "2px solid #8a8888ff" },
            left: "50%",
            top: "calc(100% - 345px)",
            transform: "translateX(-50%)",
            width: 70,
            height: 70,
            backgroundColor: theme.palette.background.default,
            zIndex: 10,
            "&:hover": { backgroundColor: theme.palette.background.default },
          }}
        >
          <SwapVertOutlinedIcon fontSize="large" sx={{ color: "#F3AC76" }} />
        </IconButton>

        <Box
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: "30px",
            width: "560px",
            height: "213px",
            padding: 4,
            marginTop: 3,
          }}
        >
          <Typography sx={{ paddingLeft: "3px" }} color="primary">
            To:
          </Typography>

          <Stack
            direction="row"
            sx={{
              width: "100%",
              backgroundColor: theme.palette.background.default,
              borderRadius: "10px",
              marginTop: 3,
            }}
          >
            <TextField
              value={toAmount}
               onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setToAmount(value);
              }}
              sx={{
                width: "50%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                    borderRight: "1px solid #313A4B",
                  },
                },
              }}
              placeholder="1000"
            />
            <Select
              value={swap ? "usdt" : "pm"}
              sx={{
                width: "50%",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            >
              {swap ? (
                <MenuItem value="usdt">
                  <img src="/theter.png" alt="" width="22" height="22" /> USDT
                  (TRC20)
                </MenuItem>
              ) : (
                <MenuItem value="pm">
                  <img src="/pm2.png" alt="" width="22" height="22" /> Perfect
                  Money
                </MenuItem>
              )}
            </Select>
          </Stack>
          <Stack direction="row" sx={{ gap: 2, marginTop: 2 }}>
            <Typography sx={{ fontSize: "14px" }} color="primary">
              Min : $100
            </Typography>
            <Typography sx={{ fontSize: "14px" }} color="primary">
              Max: $4832
            </Typography>
          </Stack>
        </Box>

        <Button
          onClick={handleMakeExchange}
          sx={{
            width: "100%",
            marginTop: 3,
            height: "60px",
          }}
        >
          Make Exchange
        </Button>
      </Box>
    </Container>
  );
}

export default Exchange;
