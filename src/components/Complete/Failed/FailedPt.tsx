import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function FailedPt({ from, to }: any) {
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
            marginTop: "80px",
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
              <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                {from}
              </Typography>
              <img src="/pm2.png" alt="" />
              <Typography sx={{ fontSize: "14px" , fontWeight:'bold'}} color="secondry">
                Perfect Money
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{ gap: 1, justifyContent: "end", display: "flex" }}
            >
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

        <Box sx={{ marginTop: "68px" }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "center", alignItems: "center", gap: 1 }}
          >
            <CloseOutlinedIcon color="error" sx={{ fontSize: "40px" }} />
            <Typography sx={{ fontSize: "32px" , fontWeight:'bold'}} color="error">
              Your payment time has expired !
            </Typography>
          </Stack>
          <Typography
            sx={{ fontSize: "18px", textAlign: "center", marginTop: "28px" }}
            color="primary"
          >
            Please complete the payment process again
          </Typography>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
            href="/"
              sx={{
                width: "173px",
                height: "65px",
                marginTop: "30px",
                marginBottom: "83px",
              }}
            >
              Try Again
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default FailedPt;
