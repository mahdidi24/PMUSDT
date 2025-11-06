import {
  Box,
  FormLabel,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { z } from "zod";
import type { FormValues } from "../../types";
import { toFormikValidationSchema } from "zod-formik-adapter";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useState } from "react";
import { useSelector } from "react-redux";

const loginSchema = z.object({
  email: z
    .email("The email is incorrect")
    .nonempty({ error: "Email is required" }),
  password: z
    .string("Password is required")
    .min(8, "Must be more than 8 characters"),
  name: z.string("Name is required").min(4, "Must be more than 4 characters"),
});
const items = [
  "Any Change In Exchange Rate On The Binance Exchange Gives Us The Right To Recalculate The Amount Of The Application.",
  "The Rate For Your Application Will Be Fixed After 1 Confirmation Online.",
  "Funds Are Credited After 20 Transaction Confirmations.",
  "We Conduct AML Checks In Accordance With The AML Policy Of The Flashobmen Service.",
  "Fill Out All Fields Of The Form Provided.",
  "Click The “Make An Exchange” Button.",
  "Read The Terms Of Exchange. If You Accept Them, Check The Approprite Boxes9. Pay For The Application According To The Instructions On The Website.",
];

function Confirm({ onNext1, from, to, swap }: any) {
  const { isLogin } = useSelector((state: any) => state.auth);
  const [isChecked, setIsChecked] = useState(false);
  const theme = useTheme();

  const form = useFormik<FormValues>({
    initialValues: { email: "", password: "", name: "" },

    onSubmit: () => {
      form.resetForm();
    },

    validationSchema: toFormikValidationSchema(loginSchema),
  });
  const inputClearHandler = () => {
    form.setFieldValue("email", "");
  };

  const handleConfirm = () => {
    onNext1();
  };

  return (
    <Paper sx={{ borderRadius: "30px", width: "100%" }}>
      <Box sx={{ paddingY: 2, paddingX: "77px", boxShadow: 0 }}>
        <Typography sx={{ fontSize: "24px", marginBottom: 1 }} color="primary">
          Invoice Details :
        </Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            borderBottom: "1px solid #596B89",
            paddingBottom: 3,
            marginTop: "43px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "16px", marginBottom: 1, color: "#ABABAB" }}
              color="primary"
            >
              Send :
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#ABABAB" }}
              color="primary"
            >
              Receive :
            </Typography>
          </Box>
          {!swap && (
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
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  {from}
                </Typography>
                <img src="/theter.png" alt="" />
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  USDT
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ gap: 1, justifyContent: "end", display: "flex" }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  {to}
                </Typography>
                <img src="/pm2.png" alt="" />
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  Perfect Money
                </Typography>
              </Stack>
            </Box>
          )}

          {swap && (
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
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  {from}
                </Typography>
                <img src="/pm2.png" alt="" />
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  Perfect Money
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ gap: 1, justifyContent: "end", display: "flex" }}
              >
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  {to}
                </Typography>
                <img src="/theter.png" alt="" />
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                  color="secondry"
                >
                  USDT
                </Typography>
              </Stack>
            </Box>
          )}
        </Stack>

        {!isLogin ? (
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
            <FormLabel sx={{ color: "#ABABAB" }}>Email :</FormLabel>
            <TextField
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    border: "none",
                  },
                },
              }}
              onChange={form.handleChange}
              value={form.values.email}
              name="email"
              type="email"
              required
              placeholder="Please enter your email"
              onBlur={form.handleBlur}
              error={Boolean(form.errors.email && form.touched.email)}
              helperText={form.touched.email && form.errors.email}
              InputProps={{
                endAdornment: form.values.email && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={inputClearHandler}
                      size="small"
                      sx={{ color: theme.palette.error.main }}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        ) : (
          ""
        )}

        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              marginTop: "43px",
              marginBottom: "31px",
              fontWeight: "bold",
            }}
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
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 0,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#1D8D94",
                    width: 25,
                    height: 25,
                    fontSize: 14,
                    color: "primary.main",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </Box>

                <Typography
                  sx={{
                    lineHeight: 1.4,
                    color: "#ABABAB",
                    fontSize: "16px",
                    paddingY: "5px",
                  }}
                >
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Stack direction="row" sx={{ marginTop: "31px" }}>
          <FormControlLabel
            label={
              <Typography sx={{ fontSize: "16px" }}>
                I Agree With The{" "}
                <a
                  href="/aboutus"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#60A7F8",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  AML Policy
                </a>{" "}
                And{" "}
                <a
                  href="/aboutus"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#60A7F8",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "16px",
                  }}
                >
                  User Agreement
                </a>
                .
              </Typography>
            }
            control={
              <Checkbox
                sx={{
                  color: "#242C39", 
                  "&.Mui-checked": {
                    color: "#307a59ff",
                    '& .MuiSvgIcon-root': {
      backgroundColor: '#242C39', 
    },
    
                  },
                }}
                value=""
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(e.target.checked);
                }}
                color="primary"
              />
            }
          />
        </Stack>
        <Box sx={{ marginY: 4, display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleConfirm}
            disabled={!isChecked}
            sx={{ width: "560px", height: "60px" }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default Confirm;
