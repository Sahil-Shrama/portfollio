//page animation

import { delay, stagger } from "framer-motion"


export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};



export const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" ,delay: 0.3},
      
    },
  };
  
  export const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.75 ,delay: 0.5 },
    },
  };
  
  export const photoAnim = {
    hidden: { scale: 1.5, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 0.5
      },
    },
  };
// export const titleAnim ={
//     hidden :{y:22},
//     show:{y:0,
//     transition:{duration:0.75,
//         // delay:1,
//         ease:'easeOut'}
//     }
// }


// export const fade ={
//     hidden:{opacity:0},
//     show:{
//         opacity:1,
//         transition:{
//             ease :'easeOut',
//             duration:0.5,
//             // delay:1

//         }
//     }
// }
