import React from "react";
import movie from '../images/Group 18.png'
import pichub from '../images/PICHUB (1).png'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { pageAnimation } from "../components/animate";
import { photoAnim ,fade  } from "../components/animate";


const MyWork = () =>{
    return(
        <Work variants={pageAnimation} initial = 'hidden' animate = 'show' exit= 'exit' >
            <Project>
                <motion.h2 variants={fade} initial="hidden"
          animate="show" >A Movie Website</motion.h2>
                <motion.div className="line" variants={lineAnim} initial="hidden"
          animate="show"></motion.div>
                <a href="https://major-project-movie-website.web.app/">
                    <motion.img src={movie} alt="moviesite" variants={photoAnim} initial="hidden"
          animate="show" />
                </a>
            </Project>
          
            <Project>
                <motion.h2 variants={fade} initial="hidden"
          animate="show" >Picture Website</motion.h2>
                <motion.div className="line" variants={lineAnim} initial="hidden"
          animate="show"></motion.div>
                <a href="https://pichub-woad.vercel.app/index.html">
                    <motion.img src={pichub} alt="moviesite" variants={photoAnim} initial="hidden"
          animate="show" />
                </a>
            </Project>
          


        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 2rem 10rem;

    h2{
        padding: 1rem 0rem;
        color: white;

    }
@media (max-width: 1200px){
    padding: 2rem 4rem;

}

`
const Project = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.3rem;
        border-radius: 5%;
        background-color: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
        object-position: center;
        @media(max-width:1300px){
            height: 100%;
    }


`

const lineAnim = {
  hidden : {
     width : 0 
    },
 show:{
   width : '100%',
   transition :{duration:1}
 }

}


export default MyWork;