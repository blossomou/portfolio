import { motion, Variants } from 'framer-motion';
import { FunctionComponent } from 'react';

import { ISkill } from '../models/type';

const Bar: FunctionComponent<{ data: ISkill }> = ({ data: { Icon, level, name } }) => {
  const variants: Variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-primarycolor to-secondarycolor"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
