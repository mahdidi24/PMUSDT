import Container from "@mui/material/Container";
import { Box, Stack, useTheme } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { registeredUsers } from "../../store/authSlice";
import { Link } from "react-router-dom";

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
                    backgroundColor: "#40A578",
                  }}
                />
              )}

              <Link
                to={item.path}
                style={{
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                  transition: "0.2s",
                  color: "#E4E4E4",
                  textDecoration: "none",
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
              sx={{ width: "232px", justifyContent: "center", display: "flex", gap:'12px' }}
            >
              <img src="loginimg.png" alt="" />
              <Link
                to="/dashboard"
                style={{ color: "#E4E4E4", textDecoration: "none" }}
              >
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
                to="/auth/login"
                style={{ textDecoration: "none" , color: "#E4E4E4" }}
                
              >
                Login
              </Link>
              <Box>/</Box>
              <Link
                to="/auth/register"
                style={{ textDecoration: "none",color: "#E4E4E4" }}
                
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
