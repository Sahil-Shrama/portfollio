import React from "react";
import {motion} from 'framer-motion'
import styled from 'styled-components'
import ContactForm from "../components/form";
const ContactUs = () =>{
    return(
        <>
        
        <ContactForm  variants={foorm} initial='hidden' animate='show' />

        </>
    )
}

const Frame1 = styled(motion.div)`
position: fixed;
top: 10%;
left: 0;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`;
const Frame2 = styled(Frame1)`
background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
background: #8ed2ff;

`;
const Frame4 = styled(Frame1)`
background: #8effa0;
`;


const slide = {
    hidden:{
        x:'-130%',
        skew:'45deg'
    },
    show :{
        x:'100%',
        skew : '0deg',
        transition:{ease:'easeOut' , duration :1   } 
    } 
}

const foorm ={
    hidden : {opacity:0},
    show : {opacity:1 , transition : {duration:1}}

}

const sliderContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, ease: "easeOut" } },
  };


export default ContactUs;