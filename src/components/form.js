import React, { useState } from 'react';
import  Styled, { styled }  from 'styled-components';


import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

const ContactForm = () => {
const [state, handleSubmit] = useForm("xaygjylg");
if (state.succeeded) {
    return <Para>Thanks for Contacting!</Para>;
}

return (
    
<Form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
     <label htmlFor="message">

        Message
     </label>



      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </Form>


    );
    
};

  const Form = styled(motion.form)`
  display: flex;


  flex-direction: column;
 width:80vw;
 min-height: 80vh;
 /* justify-content: center; */
 /* justify-content: center; */
 margin: auto;
 /* background-color: beige; */

.form-group{
    width: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
    text-align: center;
}

label{
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(35, 217, 151);
    margin-top: 3%;
    
}

input{
    padding: 1rem;
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-top: 2%;
    font-size: 1rem;
    

}



textarea{
  font-size: 1rem;
    padding: 1rem;
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-top: 2%;


}

button{
    width: 50%;
    margin: auto;
}


`


const Para = styled('p')`
    font-size: 2rem;
    text-align: center;
    margin-top: 5%;
    color: white;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;



`

 export default ContactForm;