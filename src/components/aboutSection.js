import React from "react";
import me from "../images/me.jpg";
import { Hide, Image, About, Description } from "./style";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, fade, photoAnim } from "./animate";
import Wave from "./waveAnimation";
import { styled } from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";


const AboutSection = () => {
const Navigate = useNavigate();

  return (
    <About variants={pageAnimation}    >
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show" >
              {" "}
              <span> Motivation </span>Dies in
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show" >
              {" "}
              two days but{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show" >
              {" "}
              <span> DISIPLANE </span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show" >
              {" "}
              Remains{" "}
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade} initial="hidden" animate="show">
          Contact us for stunning frontend design . Full fill your dream of
          having your business online
        </motion.p>
        <motion.button variants={fade} initial="hidden" animate="show"
        onClick={()=>{
          Navigate('/contactUs')
        }}
        >
          Conatct
        </motion.button>
        <motion.button variants={fade} initial="hidden" animate="show">
          Resume
        </motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={me}
          alt="me"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
