import styled from 'styled-components'
import {motion} from 'framer-motion'
export const About = styled.div`
min-height: 85vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 7rem;
color: white;
`;    

export const Description =styled(motion.div)`
   z-index: 2;
    flex: 1;
    padding-right: 5rem;
    h2{
   font-weight: lighter;
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
`
export const Hide = styled.div`
    overflow: hidden;
`
