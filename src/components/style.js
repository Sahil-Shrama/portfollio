import styled from 'styled-components'
import {motion} from 'framer-motion'
export const About = styled.div`
min-height: 85vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 7rem;
color: white;
@media (max-width: 1300px){

    display: block;
    padding: 2rem 2rem;
    text-align: center;
    /* padding: 2rem; */

}

`;    

export const Description =styled(motion.div)`
   z-index: 2;
    flex: 1;
    padding-right: 5rem;
    h2{
   font-weight: lighter;
    }

 @media (max-width: 1200px){
    padding: 0;
    button{
        margin: 2rem 0rem 5rem 3rem;
    
 }

}

`

export const Image = styled.div`
    flex: 1;
    z-index: 2;
    overflow: hidden;
    img{
        height: 80vh;
       width: 100%;
       object-fit: cover;
       object-position: bottom;

}
@media (max-width:1200px){
    img{
        height: 100%;
        width: 100%;
    }
}

`
export const Hide = styled.div`
    overflow: hidden;
`
