
import { createTheme } from "@mui/material";


const theme = createTheme({

    palette : {
        primary:{
            main:"#E4E4E4"
        },
        secondary:{
            main:"#2A3342"
        },
        success:{
            main : "#40A578"
        },
        warning:{
            main : "#FF6600"
        },
        error:{
            main : "#F66066"
        },
        background:{
            default : "#242C39",
            paper : "#2A3342"
        },
        text : {
            primary : "#E4E4E4",
            secondary : "#FFFFFF",

        },
        
        

    },
    typography:{
        fontFamily: "Niramit, sans-serif",
        h3 : {
            fontSize : "36px"
        },
        
        
    },
    shape:{
        borderRadius:"10px"
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius : "10px",
                    backgroundColor : "#1D8D94",
                    boxShadow : "0px 0px 20px 0px #1D8D9480",
                    color : "#FFFFFF",
                    textAlign : "center",
                    fontSize : "16px",
                    justifyContent : "center",
                    textTransform: "none",

                }
            }
        },
        MuiTextField:{
            styleOverrides:{
                root:{
                    borderRadius : "10px",
                    background : "#242C39",
                    "& input::placeholder": {
                    color: "#ABABAB",
                    opacity: 1,
                    },
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { border: "none" },
                        "&:hover fieldset": { border: "none" }
                    }
                    
                    
                    
                }
            }
        },
        MuiLink:{
            styleOverrides:{
                root:{
                    cursor:"pointer",
                    fontWeight:700
                }
            }
        },
        MuiOutlinedInput:{
            styleOverrides:{
                input:{
                     '&::placeholder': {
                    color: '#ABABAB', // رنگ مورد نظر شما
                    opacity: 1,       // اگه نمی‌خوای محوتر باشه
          }
                }
            }
        },
        MuiFormHelperText: {
        styleOverrides: {
        root: {
        color: "#FF6B6B", // رنگ پیش‌فرض helperText برای کل پروژه
        fontSize: "14px",
        background : "#2A3342",
        margin : 0
        
      },
    },
  },
  
  
    },

    

})


export default theme;