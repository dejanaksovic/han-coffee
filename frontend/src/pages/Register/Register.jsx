import { useState, useEffect, useRef } from "react";
import { Box, Step, Stepper, Typography, Button, StepLabel, StepContent, Input,} from "@mui/material";
import { Google } from "@mui/icons-material";
import { useRequestOTP } from "../../hooks/useRequestOTP";

const Register = () => {
  const [activeStep, setActiveStep] = useState(Number(new URL(document.location).searchParams.get('step') ?? 0))
  const [completed, setCompleted] = useState({});
  const { loading, requestOTP } = useRequestOTP()
  const [phoneError, setPhoneError] = useState(null)
  const code = useRef("")
  const [num, setNum] = useState("")

  const handleNext = () => {
    if(activeStep === 1) {
        setActiveStep(2)
        requestOTP(`+381${num}`, 'create')
        return
    }
    requestOTP(`+381${num}`, 'check', code.current)
  }

  const handleChange = e => {
    setNum(e.target.value)
}

  const handleCodeChange = e => {
    code.current = e.target.value
  }

  const handlePrevious = () => {
    if(activeStep === 2) {
        setActiveStep((activeStep) => {
            return activeStep - 1
        })
    }
  }

  const steps = 
  [
   {title: "Verifikujte se preko google naloga", content: <Button variant = 'outlined' disabled = {loading} color = 'secondary'><Google/></Button>},
   {title: 'Unesite broj telefona', content:
   <>
   <Box sx = {{width: '100%', display:'flex', alignItems: 'center', gap: '.5rem'}}>
    <Box><Typography>+381</Typography></Box>
    <Box><Input type = 'number' onChange={handleChange} value = {num} sx = {{color: 'neutral.main'}}></Input></Box>
   </Box>
   <Typography variant = 'body2' color = {phoneError ? "error" : "neutral"}>{phoneError}</Typography>
   </>
   },
   {
    title: 'Unesite kod koji ste dobili',
    content:
   <>
    <Box sx = {{width: '100%', display:'flex', alignItems: 'center', gap: '.5rem'}}>
    <Box><Input type = 'number' onChange={handleCodeChange} sx = {{color: 'neutral.main'}}></Input></Box>
   </Box>
   <Typography variant = 'body2' color = {phoneError ? "error" : "neutral"}>{phoneError}</Typography>
   </>
   }
 ]

  return (
    <Box sx={{ minWidth: '70%', margin: '0 auto', color: 'neutral.main' }}>
      <Stepper
        nonLinear
        orientation = "vertical"
        activeStep = {activeStep}
      >
        {steps.map( (item, index) => 
        <Step key = {index} completed = {true}>
            <StepLabel>
                <Typography color = "neutral.main" variant = "body2">{item.title}</Typography>
            </StepLabel>
            <StepContent>
                {item.content}
            </StepContent>
        </Step> )}
      </Stepper>
      {
      activeStep !== 0 ?
      <Box sx = {{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        {activeStep === 2 && <Button variant = "outlined" color = "secondary" onClick = {handlePrevious}>Nazad</Button>}
        <Button variant = "outlined" disabled = {loading} color = "secondary" onClick = {handleNext}>{activeStep === 1 ? "Zahtevaj kod" : "Potvrdi kod"}</Button>
      </Box> :
      null
      }
    </Box>
  );
}
 
export default Register;