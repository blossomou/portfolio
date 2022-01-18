import { motion } from 'framer-motion';

import { fadeInUp, routeAnimation } from '../animations';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const Resume = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
      {/* education & experience */}
      <div className="grid grid-cols-2 gap-6 md:">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Cleveland State University</h5>
            <p className="font-semibold">Information System (IS) (2007 - 2011)</p>
            <h5 className="my-2 text-xl font-bold">Bedford High School</h5>
            <p className="font-semibold">High school courses (2004 - 2007)</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software developer</h5>
            <p className="font-semibold">Medical Mutual of Ohio (2013 - 2017)</p>
            <p className="font-semibold">Univeristy Hospital (2017 - 2021)</p>
            <p className="font-semibold">Embrace Pet Insurance (2021 - Present)</p>
            <p className="my-3">I like problem solvings because it makes my brain think!</p>
          </div>
        </motion.div>
      </div>

      {/* languages & tool */}
      <div className="grid grid-cols-2 gap-6 md:">
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
