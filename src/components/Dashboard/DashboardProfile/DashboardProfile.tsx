import { Paper } from '@mui/material'
import {
  Box,
  Typography,
  Button,
  useTheme,
  FormLabel,
  TextField,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useFormik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import type { FormValues } from '../../../types';
// import { register } from "../../store/authSlice";

const loginSchema = z.object({
  email: z
    .email("The email is incorrect")
    .nonempty({ error: "Email is required" }),
  password: z
    .string("Password is required")
    .min(8, "Must be more than 8 characters"),
  name: z.string("Name is required").min(4, "Must be more than 4 characters"),
});

function DashboardProfile() {
    
      const [showPassword, setShowPassword] = useState(false);
    
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
      const inputHideHandler = () => {
        setShowPassword(!showPassword);
      };
    
      const theme = useTheme();
  return (
    <Paper sx={{ height: "100%", width: "100%", borderRadius: "20px", padding: 2 , boxShadow : 0, display: 'flex', justifyContent : 'center' }}>
        
        <Box
        onSubmit={form.handleSubmit}
        component="form"
        py="34px"
        px="38px"
        marginY='35px'
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: "column",
          width: "510px",
          height: "auto",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "30px",
          maxWidth: "560px",
          maxHeight: "606px",
          minHeight: "366px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            height: "50px",
            background: theme.palette.text.primary,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            
          }}
        >
          Edit Profile
        </Typography>
        <FormLabel sx={{ color: theme.palette.text.primary }}>Name :</FormLabel>
        <TextField
          onChange={form.handleChange}
          value={form.values.name}
          name="name"
          type="text"
          required
          placeholder="ali"
          onBlur={form.handleBlur}
          error={Boolean(form.errors.name && form.touched.name)}
          helperText={form.touched.name && form.errors.name}
        />
        <FormLabel sx={{ color: theme.palette.text.primary }}>
          Email :
        </FormLabel>
        <TextField
          onChange={form.handleChange}
          value={form.values.email}
          name="email"
          type="email"
          required
          placeholder="jgfbhfg@gmail.com"
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
          <FormLabel sx={{ color: theme.palette.text.primary }}>
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
          Confirm
        </Button>
      </Box>


    </Paper>
  )
}

export default DashboardProfile
