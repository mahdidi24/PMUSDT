import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  FormLabel,
  TextField,
  Link,
  Stack,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useFormik } from "formik";
import type { FormValues } from "../../types";
import {  Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import {  z } from "zod";
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authSlice";
import { Navigate } from "react-router-dom";



const loginSchema = z.object({
  email: z.email("The email is incorrect")
    .nonempty({ error :"Email is required"}),
  password: z
    .string("Password is required" )
    .min(8, "Must be more than 8 characters"),
});



function Login() {
  const {isLogin} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

  const form = useFormik<FormValues>({
    initialValues: { email: "", password: "" },

    onSubmit: (values) => {

        dispatch(login(values));
        

      
      console.log(values);
      
      form.resetForm();
    },

    validationSchema:toFormikValidationSchema(loginSchema)
    
  });

  const inputClearHandler = () => {
    form.setFieldValue("email", "");
  };
  const inputHideHandler = () => {
    setShowPassword(!showPassword);
  };
  
  if (isLogin) {
        return <Navigate to="/dashboard"/>
        }


  const theme = useTheme();
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <Box
        onSubmit={form.handleSubmit}
        component="form"
        py="34px"
        px="38px"
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          width: "560px",
          height: "auto",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "30px",
          maxWidth: "560px",
          maxHeight: "606px",
          minHeight: "366px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            height: "50px",
            background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Login
        </Typography>
        <FormLabel sx={{ color: theme.palette.text.primary }}>
          Email :
        </FormLabel>
        <TextField
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
        <FormLabel sx={{ color: theme.palette.text.primary }}>
          Password :
        </FormLabel>
        <TextField
          onChange={form.handleChange}
          value={form.values.password}
          name="password"
          type={showPassword ? "text" : "password"}
          required
          placeholder="Please enter your password"
          onBlur={form.handleBlur}
          error={Boolean(form.errors.password && form.touched.password)}
          helperText={form.touched.password && form.errors.password}
          InputProps={{
            endAdornment: form.values.password && (
              <InputAdornment position="end">
                <IconButton
                  onClick={inputHideHandler}
                  edge="end"
                  sx={{ color: theme.palette.text.primary }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Keep me login"
            sx={{
              color: theme.palette.text.primary,
              "& .MuiTypography-root": { fontSize: "16px" },
            }}
          />
          <Link href="/auth/forget" color="#1D8D94">Forgot your password?</Link>
        </Stack>
        <Button sx={{ paddingY: "16px" }} type="submit">
          Login
        </Button>
        <Stack direction="row" gap="3px" justifyContent={"center"}>
          <Typography color={theme.palette.text.primary}>
            dont have an account?
          </Typography>
          <Link href="/" color="#1D8D94">Register</Link>
        </Stack>
      </Box>
    </Container>
    
  );
}

export default Login;
