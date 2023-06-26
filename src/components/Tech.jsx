import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <div>
      <p className={styles.sectionSubText}>My Knowledge</p>
      <h4 className={styles.sectionHeadText}>Tech</h4>
    </div>
    
    </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-30 h-30' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");