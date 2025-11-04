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
  InputAdornment,
  IconButton,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useFormik } from "formik";
import type { FormValues } from "../../types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useDispatch} from "react-redux";
import { register } from "../../store/authSlice";

const loginSchema = z.object({
  email: z
    .email("The email is incorrect")
    .nonempty({ error: "Email is required" }),
  password: z
    .string("Password is required")
    .min(8, "Must be more than 8 characters"),
  name: z.string("Name is required").min(4, "Must be more than 4 characters"),
});

function Register() {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

  const form = useFormik<FormValues>({
    initialValues: { email: "", password: "", name: "" },

    onSubmit: (values) => {
      dispatch(register(values))
      
      console.log(values);
      form.resetForm();
    },

    validationSchema: toFormikValidationSchema(loginSchema),
  });

  const inputClearHandler = () => {
    form.setFieldValue("email", "");
  };
  const inputHideHandler = () => {
    setShowPassword(!showPassword);
  };

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
          gap: 1,
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
          Register
        </Typography>
        <FormLabel sx={{ color:'#ABABAB' }}>Name :</FormLabel>
        <TextField
          onChange={form.handleChange}
          value={form.values.name}
          name="name"
          type="text"
          required
          placeholder="Please enter your Name"
          onBlur={form.handleBlur}
          error={Boolean(form.errors.name && form.touched.name)}
          helperText={form.touched.name && form.errors.name}
        />
        <FormLabel sx={{ color:'#ABABAB' }}>
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
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <FormLabel sx={{ color:'#ABABAB' }}>
            Password :
          </FormLabel>
          {form.touched.password && (
            <Typography
              component="p"
              sx={{
                color:
                  form.values.password.length < 4
                    ? "red"
                    : form.values.password.length < 8
                    ? "orange"
                    : "green",
              }}
            >
              {form.values.password.length < 4
                ? "very weak"
                : form.values.password.length < 8
                ? "weak"
                : "strong"}
            </Typography>
          )}
        </Stack>
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

        <Button sx={{ paddingY: "16px", marginTop: "12px" }} type="submit">
          Register
        </Button>
        <Stack direction="row" gap="3px" justifyContent={"center"}>
          <Typography color={theme.palette.text.primary}>
            Have An Account?
          </Typography>
          <Link href="/auth/login" color="#1D8D94">Login</Link>
        </Stack>
      </Box>
    </Container>
  );
}

export default Register;
