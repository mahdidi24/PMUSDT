import { Box, Container, Paper, useTheme, Typography, FormLabel, TextField, Button } from "@mui/material"
import { useFormik } from "formik"
import type { ContactUsValues } from "../../types"
import {  z } from "zod";
import { toFormikValidationSchema } from 'zod-formik-adapter';


const conatctSchema = z.object({
    email : z.email("Email is required")
    .nonempty({ error :"Email is required"}),
    subject : z.string('subject is required'),
    message : z.string('subject is required'),
    })


function ContactUs() {
    const theme = useTheme()


    const form = useFormik<ContactUsValues>({
        initialValues : {email : '' , subject : '' , message : ''},
        onSubmit : (values) =>{
            console.log(values)
        
            form.resetForm()

        },
        validationSchema:toFormikValidationSchema(conatctSchema)
    })
  return (
    <Container sx={{display : 'flex', justifyContent:'center' , alignItems:'center'}}>
      <Paper
      onSubmit={form.handleSubmit}
      component='form'
        sx={{
          mt: 4,
          borderRadius: "30px",
          width:'560px',
          padding : 3
        }}
      >
    
        <Box sx={{marginBottom :5}}>
            <Typography sx={{fontSize:'32px' , background: "linear-gradient(to right, #1D8D94 0%, #caf8d7ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",fontWeight: "bold"}} color="initial">contact us</Typography>
            <Typography color="primary">reach out and we will get in touch within 24 hours.</Typography>
        </Box>

        <Box sx={{width:'100%'}}>
            <FormLabel sx={{ color: theme.palette.text.primary}}>
          Email :
        </FormLabel>
        <TextField
        name="email"
        onBlur={form.handleBlur}
        value={form.values.email}
        onChange={form.handleChange}
        placeholder="Please enter your email"
        sx={{width:'100%', marginY:2}}
        error={form.touched.email && Boolean(form.errors.email)}
          helperText={form.touched.email && form.errors.email}
          id=""
          label=""
        />
          <FormLabel sx={{ color: theme.palette.text.primary}}>
          Subject :
        </FormLabel>
        <TextField
        name="subject"
        onBlur={form.handleBlur}
        value={form.values.subject}
        onChange={form.handleChange}
        placeholder="Please Write your subject"
        sx={{width:'100%', marginY:2}}
        error={form.touched.subject && Boolean(form.errors.subject)}
          helperText={form.touched.subject && form.errors.subject}
          id=""
          label=""
        />
          <FormLabel sx={{ color: theme.palette.text.primary}}>
          Message text :
        </FormLabel>
        <TextField
        name="message"
        value={form.values.message}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        multiline
        rows={5}
        placeholder="Please Write your message"
        sx={{width:'100%', marginTop:2, height:'150px'}}
        error={form.touched.message && Boolean(form.errors.message)}
          helperText={form.touched.message && form.errors.message}
          id=""
          label=""
        />
        </Box>
        <Box sx={{marginY:3}}>
            <Button type="submit" sx={{width:'100%', height:'60px'}}>Send</Button>
        </Box>


      </Paper>
    
    </Container>
  )
}

export default ContactUs
