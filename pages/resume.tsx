import { motion } from 'framer-motion';

import { fadeInUp, routeAnimation } from '../animations';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const Resume = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
      {/* education & experience */}
      <div className="grid grid-cols-2 gap6 md:">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science Engineering</h5>
            <p className="font-semibold">Academy of Technology (2017-2021)</p>
            <p className="my-3">I am currently pursuing B.tech in Computer Science Engineering from Academy of Technology</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software developer</h5>
            <p className="font-semibold">TCS (2021 - Present)</p>
            <p className="my-3">I dont know why i am doing this job</p>
          </div>
        </motion.div>
      </div>

      {/* languages & tool */}
      <div className="grid grid-cols-2 gap6 md:">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Sofwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
