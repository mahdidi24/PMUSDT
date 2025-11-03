import Container from "@mui/material/Container";
import { Box, Link, Stack, useTheme } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { registeredUsers } from "../../store/authSlice";
import { useSelector } from "react-redux";

function Navbar() {
  const { isLogin } = useSelector((state: any) => state.auth);
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        justifyContent={"space-between"}
        height={"160px"}
        alignItems="center"
      >
        <Box component="img" src="/logo.png" />
        <Box>
          <Stack direction="row" spacing={3}>
            <Link href="/" underline="none" color={theme.palette.text.primary}>
              Home
            </Link>
            <Link href='/aboutus' underline="none" color={theme.palette.text.primary}>
              About Us
            </Link>
            <Link href='/contactus' underline="none" color={theme.palette.text.primary}>
              Contact US
            </Link>
            <Link underline="none" color={theme.palette.text.primary}>
              Blog
            </Link>
            <Link href='/Faq' underline="none" color={theme.palette.text.primary}>
              FAQ
            </Link>
          </Stack>
        </Box>
        <Box>
          {isLogin ? (
            <Stack
              direction="row"
              sx={{ width: "232px", justifyContent: "center", display: "flex" }}
            >
              <Link underline='none' href='/dashboard'>{registeredUsers.name}</Link>
            </Stack>
          ) : (
            <Stack
              direction="row"
              spacing={1}
              sx={{ width: "232px", justifyContent: "center" }}
            >
              <Box>
                <AccountCircleOutlinedIcon />
              </Box>
              <Link
                href="/auth/login"
                sx={{ textDecoration: "none" }}
                color={theme.palette.text.primary}
              >
                Login
              </Link>
              <Box>/</Box>
              <Link
                href="/auth/register"
                sx={{ textDecoration: "none" }}
                color={theme.palette.text.primary}
              >
                Register
              </Link>
            </Stack>
          )}
        </Box>
      </Stack>
    </Container>
  );
}

export default Navbar;
