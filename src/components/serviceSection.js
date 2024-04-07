import React from "react";
import java from '../images/java.svg'
import js from '../images/js.svg'
import mySql from '../images/database-solid.svg'
import linux from '../images/linux.svg'

import code from '../images/coder.gif'
import styled from 'styled-components'
import { About,Description,Image,Hide } from "./style";


const ServiceSection = () =>{
    return(
        <Services>
            < Description>
            <h2>Technologies  & <span> Langauage </span> </h2>
            <Cards>
                <Card>
                    <div className="icons">
                        <img src={java} alt="java"/>
                        <h3>Java</h3>

                    </div>
                    <p>Have basic uderstanding of java and JDBC</p> 

                </Card>

                <Card>
                    <div className="icons">
                        <img src={js} alt="java"/>
                        <h3>Javascript</h3>

                    </div>
                    <p>Good in framework React and gsap</p> 

                </Card>
                <Card>
                    <div className="icons">
                        <img src={mySql} alt="java"/>
                        <h3>My SQL</h3>

                    </div>
                    <p>Crud operations and some more with MYSQL </p> 

                </Card>
                <Card>
                    <div className="icons">
                        <img src={linux} alt="java"/>
                        <h3>Linux</h3>

                    </div>
                    <p>famaliar with ubuntu</p> 

                </Card>
                </Cards>
                </Description>
             <Img>
                <img src={code} alt="trust me"  />
             </Img>

            
        </Services>
    )
}

const Services = styled(About)`

    h2{
        padding-bottom: 5rem;

    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
width: 40rem;

    display: flex;
    flex-wrap: wrap;

@media(max-width: 1200px){
    margin: auto;
    justify-content: center;
    
    /* flex-direction: column; */

}
@media(max-width: 768px){
    width: 100%;
    margin: auto;
    justify-content: center;
    
    /* flex-direction: column; */



}

`
const Card = styled.div`
flex-basis: 20rem;
.icons{
    display: flex;
    align-items: center;
    
}
img{
    width: 2rem;
}
h3{
    margin-left: 1rem;
    background-color: white;
    color: black;
    padding: 0.5rem;
}



`
const Img = styled(Image)`

width: 60rem;

@media(max-width: 1200px){
    width: 100%;
    margin-left: 0rem;

}
img{
    
    
}
`


export default ServiceSection;