import { Key } from 'react';

import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { IService } from '../models/type';

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science Engineering from Academy of Technology. I have
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400" style={{ marginLeft: '-1.5em', marginRight: '-1.5em' }}>
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service: IService, index: Key) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1" key={index}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
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
