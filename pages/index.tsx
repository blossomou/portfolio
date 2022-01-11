import { motion } from 'framer-motion';
import { Key } from 'react';

import { fadeInUp, routeAnimation, stagger } from '../animations';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { IService } from '../models/type';

const index = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h5 className="my-3 font-medium">
        I graduated from Cleveland State University with a Bachelors in Information System (IS) and a minor in Mathematics. I
        am currently employeed at Embrace Pet Insurance. In my free time, I like to take walks with my dog Momo, exercise, do
        coding tutorials, practice piano, watch japanese anime and hang out with my friends. While I am busy coding away, I
        enjoy listening to k-pop music.
      </h5>
      <div className="flex-grow p-4 mt-5 dark:bg-dark-100" style={{ marginLeft: '-1.5em', marginRight: '-1.5em' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I do</h6>
        <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {services.map((service: IService, index: Key) => (
            <motion.div
              variants={fadeInUp}
              className="rounded-lg bg-textbgcolor dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   //calculation
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //calculation
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
