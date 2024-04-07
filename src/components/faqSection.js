import React from "react";
import styled from "styled-components";
import { About } from "./style";
import Toggle from "./Toffle";


const FaqSection = () => {
  
  return (
    <Faq
     
      initial="hidden"
    >
      <h2>
          <span>FAQ</span>
      </h2>
      
        <Toggle title="Education">
          <div className="answer">
            <p>BCA from PGGC 11 chandigarh in 2024</p>
            <p>
              10 + 12 from army public school
            </p>
          </div>
        </Toggle>
        <Toggle title="Intrest">
          <div className="answer">
            <p>Learning new technologies</p>
            <p>
              Sports * Travelling 
              
            </p>
          </div>
        </Toggle>
        
        <Toggle title="Contact">
          <div className="answer">
            <p>
              Check out resume for all details
            </p>
          </div>
        </Toggle>
        
        <Toggle title="Quote.">
          <div className="answer">
            <p>
              Its a shame for a men to die without knowing what he could have achive
            </p>
          </div>
        </Toggle>
      
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
