import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className='xs:w-[250px] w-full'
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to my developer portfolio! <br />
        <br />
        I'm Chris, a Junior Web Developer and a student at MMBBS Hannover.{" "}
        <br /> I am proficient in Python, Java, HTML, CSS, Tailwind CSS,
        JavaScript, C# and frameworks like React and node.js. <br />
        <br />
        I'm passionate about building innovative applications. Explore my
        projects and witness my commitment to delivering high-quality solutions
        that enhance user experiences.
        <br />
        <br /> Let's connect and turn ideas into reality through coding.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
