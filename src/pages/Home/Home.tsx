import { Container, Tab, Tabs, useTheme, Box } from "@mui/material";
import { useState } from "react";
import DashboardTable from "../../components/Dashboard/DashboardTable/DashboardTable";
import DashboardProfile from "../../components/Dashboard/DashboardProfile/DashboardProfile";
import DashboardPartner from "../../components/Dashboard/DashboardPartner/DashboardPartner";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function Home() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [value, setvalue] = useState(0);
  const handleChange = (event: any, newValue: number) => {
    setvalue(newValue);
    console.log(event);
  };

  const handleExit = () => {
    dispatch(logout());
  };

  return (
    <Container sx={{ display: "flex", gap: 3 }}>
      <Tabs
        orientation="vertical"
        onChange={handleChange}
        value={value}
        sx={{
          height: "fit-content",
          backgroundColor: theme.palette.background.paper,
          borderRadius: "20px",
          width: "24%",
          padding: 2,
          "& .MuiTabs-indicator": { display: "none" },
        }}
      >
        <Tab
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 8V17.75C0.75 18.3023 1.19772 18.75 1.75 18.75H6.25C6.80228 18.75 7.25 18.3023 7.25 17.75V13.25C7.25 11.8693 8.3693 10.75 9.75 10.75C11.1307 10.75 12.25 11.8693 12.25 13.25V17.75C12.25 18.3023 12.6977 18.75 13.25 18.75H17.75C18.3023 18.75 18.75 18.3023 18.75 17.75V8C18.75 7.68524 18.6018 7.38885 18.35 7.2L9.75 0.75L1.15 7.2C0.89819 7.38885 0.75 7.68524 0.75 8Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          iconPosition="start"
          label="dashboard"
          sx={{
            justifyContent: "start",
            fontSize: "16px",
            color: theme.palette.text.primary,
            borderRadius: 5,
            "&.Mui-selected": { color: "#fff", fontWeight: "bold" },
          }}
        />
        <Tab
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.50988 18.5748C5.6673 16.3047 8.02709 14.75 10.75 14.75C13.4519 14.75 15.7962 16.2808 16.9631 18.5223M13.0833 9.1944C13.0833 10.5445 11.9889 11.6389 10.6389 11.6389C9.2889 11.6389 8.19444 10.5445 8.19444 9.1944C8.19444 7.84442 9.2889 6.75 10.6389 6.75C11.9889 6.75 13.0833 7.84442 13.0833 9.1944ZM10.75 20.75C5.22715 20.75 0.75 16.2728 0.75 10.75C0.75 5.22715 5.22715 0.75 10.75 0.75C16.2728 0.75 20.75 5.22715 20.75 10.75C20.75 16.2728 16.2728 20.75 10.75 20.75Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          iconPosition="start"
          label="profile"
          sx={{
            justifyContent: "start",
            fontSize: "16px",
            color: theme.palette.text.primary,
            borderRadius: 5,
            "&.Mui-selected": { color: "#fff", fontWeight: "bold" },
          }}
        />
        <Tab
          icon={
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.75 18.75V14.75C0.75 13.6454 1.64543 12.75 2.75 12.75H8.75M13.75 4.75C13.75 6.95914 11.9591 8.75 9.75 8.75C7.54086 8.75 5.75 6.95914 5.75 4.75C5.75 2.54086 7.54086 0.75 9.75 0.75C11.9591 0.75 13.75 2.54086 13.75 4.75ZM15.75 10.75C15.75 12.9591 13.9591 14.75 11.75 14.75C13.9591 14.75 15.75 16.5409 15.75 18.75C15.75 16.5409 17.5409 14.75 19.75 14.75C17.5409 14.75 15.75 12.9591 15.75 10.75Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          iconPosition="start"
          label="partner program"
          sx={{
            justifyContent: "start",
            fontSize: "16px",
            color: theme.palette.text.primary,
            borderRadius: 5,
            "&.Mui-selected": { color: "#fff", fontWeight: "bold" },
          }}
        />
        <Tab
          onClick={handleExit}
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.75 0.75H2.75C1.64543 0.75 0.75 1.64543 0.75 2.75V16.75C0.75 17.8546 1.64543 18.75 2.75 18.75H6.75M14.25 5.25L18.75 9.75L14.25 14.25M6.75 9.75H17.75"
                stroke="#ABABAB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
          iconPosition="start"
          label="exit"
          sx={{
            justifyContent: "start",
            fontSize: "16px",
            color: theme.palette.text.primary,
            borderRadius: 5,
            "&.Mui-selected": { color: "#fff", fontWeight: "bold" },
          }}
        />
      </Tabs>
      <Box width="70%">
        {value === 0 && <DashboardTable />}
        {value === 1 && <DashboardProfile />}
        {value === 2 && <DashboardPartner />}
      </Box>
    </Container>
  );
}

export default Home;
