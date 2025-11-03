import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  FormLabel,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const emailSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
});

const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function ForgetPass() {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const theme = useTheme();

  
  const formEmail = useFormik({
    initialValues: { email: "" },
    validationSchema: toFormikValidationSchema(emailSchema),
    onSubmit: (values) => {
      console.log("Email sent:", values);
      setStep(2); 
    },
  });

  
  const form = useFormik({
    initialValues: { password: "", confirmPassword: "" },
    validationSchema: toFormikValidationSchema(passwordSchema),
    onSubmit: (values) => {
      console.log("New password:", values);
      alert("Password reset successfully!");
    },
  });

const inputHideHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center", mt: "100px" }}>
      <Box
        component="form"
        onSubmit={step === 1 ? formEmail.handleSubmit : form.handleSubmit}
        py="34px"
        px="38px"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "560px",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(to right, #1D8D94 0%, #91D2A3 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {step === 1 ? "Forget Password" : "Set New Password"}
        </Typography>

        {step === 1 ? (
          <>
            <FormLabel>Email:</FormLabel>
            <TextField
              name="email"
              value={formEmail.values.email}
              onChange={formEmail.handleChange}
              onBlur={formEmail.handleBlur}
              placeholder="Enter your email"
              error={Boolean(formEmail.touched.email && formEmail.errors.email)}
              helperText={formEmail.touched.email && formEmail.errors.email}
              InputProps={{
                endAdornment: formEmail.values.email && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => formEmail.setFieldValue("email", "")}
                      size="small"
                      sx={{ color: theme.palette.error.main }}
                    >
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" sx={{ mt: 2 }}>
              Continue
            </Button>
          </>
        ) : (
          <>
            <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <FormLabel sx={{ color: theme.palette.text.primary }}>
           New Password :
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

           
          <FormLabel sx={{ color: theme.palette.text.primary }}>
           Confirm Password :
          </FormLabel>
          
        <TextField
          onChange={form.handleChange}
          value={form.values.confirmPassword}
          name="confirmPassword"
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
              <Button type="submit">Confirm</Button>
          </>
        )}
      </Box>
    </Container>
  );
}

export default ForgetPass;
