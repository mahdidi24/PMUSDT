import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SuccessTp from "../Success/SuccessTp";
import FailedTp from "../Failed/FailedTp";
import CircularTimer from "../../Timer/Timer";
import { QRCodeSVG } from "qrcode.react";

const items = [
  "any change in exchange rate on the binance exchange gives us the right to recalculate the amount of the application.",
  "the rate for your application will be fixed after 1 confirmation online.",
  "funds are credited after 20 transaction confirmations.",
];

function TheterToPm({ from, to }: any) {
  const theme = useTheme();
  const [submit, setSubmit] = useState(0);
  const fromProps = from;
  const toProps = to;

  const handleSubmit = () => {
    setSubmit(1);
  };
  const handleFailde = () => {
    setSubmit(2);
  };

  return (
    <Paper sx={{ borderRadius: "30px", width: "100%", textAlign: "start" }}>
      {submit === 0 && (
        <Box sx={{ paddingY: 2, paddingX: "77px", boxShadow: 0 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography sx={{ fontSize: "20px" }} color="primary">
              transaction details :
            </Typography>
            <CircularTimer
              duration={20}
              size={170}
              onComplete={() => setSubmit(2)}
            />
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
                <img src="/theter.png" alt="" />
                <Typography sx={{ fontSize: "14px" }} color="secondry">
                  USDT
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ gap: 1, justifyContent: "end", display: "flex" }}
              >
                <Typography sx={{ fontSize: "14px" }} color="secondry">
                  {to}
                </Typography>
                <img src="/pm2.png" alt="" />
                <Typography sx={{ fontSize: "14px" }} color="secondry">
                  Perfect Money
                </Typography>
              </Stack>
            </Box>
          </Stack>

          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "20px", marginBottom: "38px" }}
                color="primary"
              >
                choose network and To receive 120 Perfect Money, please deposit
                100 Tether to the Tether address below:
              </Typography>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "start",
                  alignItems: "center",
                  width: "90%",
                }}
              >
                <Select
                  sx={{
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    backgroundColor: "#1D8D94",
                    width: "126px",
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
                  x09aa998ee454c456255daf3ac94908f1dcfb7033
                </Typography>
              </Stack>
            </Box>
            <Box marginLeft={"30px"}>
              <QRCodeSVG
                value="x09aa998ee454c456255daf3ac94908f1dcfb7033" // 👈 آدرس یا هر داده‌ای که بخوای رمزگذاری بشه
                size={191} // اندازه QR
                fgColor="#000000ff"
                level="Q" // سطح تصحیح خطا (L, M, Q, H)
              />
            </Box>
          </Stack>

          <Box>
            <Typography
              sx={{ fontSize: "18px", marginY: 3, fontWeight: "bold" }}
              color="primary"
            >
              Exchange Conditions:
            </Typography>
            <List
              sx={{
                "& .MuiListItem-root": {
                  py: 0.2,
                  px: 0,
                },
              }}
            >
              {items.map((text, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", alignItems: "flex-start" }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#1D8D94",
                      width: "25px",
                      height: "25px",
                      fontSize: "14px",
                      color: "primary.main",
                      marginRight: 2,
                    }}
                  >
                    {index + 1}
                  </Typography>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "42px",
              marginBottom: 5,
            }}
          >
            <Button
              onClick={handleSubmit}
              sx={{ height: "60px", width: "560px" }}
            >
              Submit
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "42px",
              marginBottom: 5,
            }}
          >
            <Button
              onClick={handleFailde}
              sx={{
                height: "60px",
                width: "250px",
                backgroundColor: theme.palette.error.main,
              }}
            >
              Failed
            </Button>
          </Box>
        </Box>
      )}
      {submit === 1 && <SuccessTp from={fromProps} to={toProps} />}
      {submit === 2 && <FailedTp from={fromProps} to={toProps} />}
    </Paper>
  );
}

export default TheterToPm;
