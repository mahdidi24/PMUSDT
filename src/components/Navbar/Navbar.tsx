import Container from "@mui/material/Container";
import { Box, Link, Stack, useTheme } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { registeredUsers } from "../../store/authSlice";

function Navbar() {
  const { isLogin } = useSelector((state: any) => state.auth);
  const theme = useTheme();
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Contact Us", path: "/contactus" },
    { label: "Blog", path: "/blog" },
    { label: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        justifyContent={"space-between"}
        height={"160px"}
        alignItems="center"
      >
        
        <Box component="img" src="/logo.png" alt="Logo" />

        
        <Stack direction="row" spacing={4} alignItems="center">
          {navLinks.map((item) => (
            <Stack
              key={item.path}
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ position: "relative" }}
            >
              
              {isActive(item.path) && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: '#40A578',
                  }}
                />
              )}

              <Link
                href={item.path}
                underline="none"
                color={theme.palette.text.primary}
                sx={{
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                  transition: "0.2s",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                {item.label}
              </Link>
            </Stack>
          ))}
        </Stack>

        
        <Box>
          {isLogin ? (
            <Stack
              direction="row"
              sx={{ width: "232px", justifyContent: "center", display: "flex" }}
            >
              <Link underline="none" href="/dashboard">
                {registeredUsers.name}
              </Link>
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
