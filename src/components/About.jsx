import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          I'm Ori Vered, a diligent software developer with a bachelor's degree in computer science from Hadassah Academic College. I graduated with a GPA of 85,
          underscoring my academic excellence and dedication.
          My journey extended into an intensive 5-week boot camp by Scale-Up Velocity,
          where I deepened my industry-level programming proficiency, honing the art of crafting clean, elegant, and efficient code.
          Beyond the realm of coding, my interests spill over into hobbies like surfing, bartending, indulging in specialty coffee, and exploring the world of cooking.
          These pursuits not only offer relaxation but have also honed my attention to detail and passion for experimentation.
          I take immense pride in being a dynamic team player, bolstered by a "Can-do" attitude and an insatiable drive to remain updated with the latest in emerging technologies.
          As I envision the next chapter of my career, I'm actively seeking a role that not only positions me at the forefront of technological innovation but also resonates with my intrinsic interests,
          ensuring a harmonious blend of professional growth, personal fulfillment, and positive impact on the world.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
