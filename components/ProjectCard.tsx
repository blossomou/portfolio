/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import { fadeInUp, stagger } from '../animations';
import { IProject } from '../models/type';

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: { name, image_path, category, deployed_url, description, github_url, key_techs, id },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        width="300"
        height="150"
        layout="responsive"
      />

      {/* <img src={image_path} alt={name} className="cursor-pointer" onClick={() => setShowDetail(true)} /> */}
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <motion.div
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black rounded-lg bg-textbgcolor md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.div variants={fadeInUp} className="border-4 border-primarycolor">
              <Image src={image_path} alt={name} width="300" height="150" layout="responsive" />
            </motion.div>

            {/* <img src={image_path} alt={name} /> */}

            <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg  bg-[#F9F0F9] dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg  bg-[#F9F0F9] dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span key={tech} className="px-2 py-1 my-1  bg-[#F9F0F9] rounded-sm dark:bg-dark-200">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1  bg-[#F9F0F9] rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
