import { Container, Tab, Tabs, useTheme , Box } from '@mui/material'
import { useState } from 'react'
import DashboardTable from '../../components/Dashboard/DashboardTable/DashboardTable';
import DashboardProfile from '../../components/Dashboard/DashboardProfile/DashboardProfile';
import DashboardPartner from '../../components/Dashboard/DashboardPartner/DashboardPartner';
import { useDispatch} from 'react-redux';
import { logout } from '../../store/authSlice';





function Home() {
  const dispatch = useDispatch()
const theme = useTheme()
 const[value , setvalue] = useState(0)
    const handleChange = (event:any, newValue:number) => {
        setvalue(newValue);
        console.log(event)
      };

      const handleExit = ()=>{
        dispatch(logout())
      }

  return (
    <Container sx={{display : "flex" , gap : 3}}>
        <Tabs orientation="vertical"  onChange={handleChange} value={value} sx={{height: "fit-content",backgroundColor : theme.palette.background.paper , borderRadius : "20px" , width :"24%" , padding : 2 ,"& .MuiTabs-indicator": { display: "none" }}}>
            <Tab icon={<img src='home.png'/>} iconPosition='start' label="dashboard" sx={{justifyContent : "start" , fontSize : "16px" , color : theme.palette.text.primary , borderRadius : 5 , "&.Mui-selected":{color:"#fff", fontWeight:"bold"}}} />
            <Tab icon={<img src='person.png'/>} iconPosition='start' label="profile" sx={{justifyContent : "start" , fontSize : "16px" , color : theme.palette.text.primary , borderRadius : 5 ,  "&.Mui-selected":{color:"#fff", fontWeight:"bold"}}} />
            <Tab icon={<img src='add.png'/>} iconPosition='start' label="partner program" sx={{justifyContent : "start" , fontSize : "16px" , color : theme.palette.text.primary , borderRadius : 5 , "&.Mui-selected":{color:"#fff", fontWeight:"bold"}}} />
            <Tab onClick={handleExit} icon={<img src='exit.png'/>} iconPosition='start' label="exit" sx={{justifyContent : "start" , fontSize : "16px" , color : theme.palette.text.primary , borderRadius : 5 , "&.Mui-selected":{color:"#fff", fontWeight:"bold"}}} />
        </Tabs>
         <Box width="70%">
                {value === 0 && <DashboardTable/>}
                {value === 1 && <DashboardProfile/>}
                {value === 2 && <DashboardPartner/>}
            </Box>

            
    </Container>
  )
}

export default Home
