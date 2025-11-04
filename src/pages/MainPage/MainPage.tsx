import {
  Container,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import React from "react";
import Exchange from "../../components/Exchange/Exchange";
import Confirm from "../../components/Confirm/Confirm";
import PmToTheter from "../../components/Complete/PmToTheter/PmToTheter";
import TheterToPm from "../../components/Complete/TheterToPm/TheterToPm";

const steps = [
  {
    title: "Exchange",
  },
  {
    title: "Confirm",
  },
  {
    title: "Complete",
  },
];

function MainPage() {
  const theme = useTheme();
  const [exchange, setExchange] = React.useState({
    direction: "",
    fromAmount: "",
    toAmount: "",
    swap: false,
  });
  console.log("swap", exchange.swap);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prev) => prev + 1);
    }
  };
  // const handleBack= ()=>{
  //   if (index < activeStep){
  //     setActiveStep((prev) => prev-1)
  //   }
  // }

  return (
    <Container>
      <Box
        sx={{
          mt: 4,
          backgroundColor: theme.palette.background.paper,
          borderRadius: "30px",
        }}
      >
        <Stepper
          activeStep={activeStep}
          sx={{
            "& .MuiStepIcon-root": { color: "#596B89" },
            "& .MuiStepIcon-root.Mui-active": {
              color: "#40A578",
              boxShadow: "0px 4px 10px 0px #40A57880",
              borderRadius: "50%",
            },
            "& .MuiStepIcon-root.Mui-completed": { color: "#40A578" },
            "& .MuiStepConnector-line": {
              width: "65%",
              margin: "0 auto",
              color: "#596B89",
            },
            "& .MuiStepLabel-label": {
              color: "#596B89",
              fontSize: "14px",
              fontWeight: 500,
            },
            "& .MuiStepLabel-label.Mui-active": {
              color: "#40A578",
              fontWeight: 600,
            },
            "& .MuiStepLabel-label.Mui-completed": {
              color: "#40A578",
              fontWeight: 600,
            },

            "& .Mui-active .MuiStepConnector-line": {
              borderColor: "#40A578",
            },
            "& .Mui-completed .MuiStepConnector-line": {
              borderColor: "#40A578",
            },
            "& .MuiStepIcon-text": {
              fill: "#fff",
              
            },
            paddingY: "36px",
            paddingX: "235px",
            borderRadius: "50%",
          }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                onClick={() => {
                  if (index < activeStep) {
                    setActiveStep(index);
                  }
                }}
                sx={{ cursor: "pointer" }}
              >
                {step.title}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ mt: 3 }}>
        {activeStep === 0 && (
          <Exchange onNext1={handleNext} onSetExchange={setExchange} />
        )}
        {activeStep === 1 && (
          <Confirm
            onNext1={handleNext}
            from={exchange.fromAmount}
            to={exchange.toAmount}
            swap={exchange.swap}
          />
        )}

        {activeStep === 2 && (
          <Typography sx={{ mt: 5, textAlign: "center" }}>
            {exchange.direction === "usdt-to-pm" ? (
              <TheterToPm from={exchange.fromAmount} to={exchange.toAmount} />
            ) : (
              <PmToTheter from={exchange.fromAmount} to={exchange.toAmount} />
            )}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default MainPage;
