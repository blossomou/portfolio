import { useTheme } from 'next-themes';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiTie } from 'react-icons/gi';
import { GoLocation } from 'react-icons/go';

import ThemeToggle from './ThemeToggle';

/* eslint-disable @next/next/no-img-element */
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <img
        src="/images/QingAndMomo.jpg"
        alt="user avatar"
        className="mx-auto rounded-full"
        height="128px"
        width="128px"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
        <span className="text-primarycolor">Qing</span>
        Ou
      </h3>

      <p className="px-2 py-1 my-3 rounded-full bg-textbgcolor dark:bg-dark-200">Full Stack Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-textbgcolor dark:bg-dark-200"
        href="/assets/QingOuResume.pdf"
        download="QingOuResume.pdf"
      >
        <GiTie className="w-6 h-6 text-primarycolor" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-primarycolor">
        <a href="https://github.com/blossomou" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/qingou/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <div className="py-4 my-5 bg-textbgcolor dark:bg-dark-200" style={{ marginLeft: '-1rem ', marginRight: '-1rem' }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="text-primarycolor" />
          <span>Ohio, United States</span>
        </div>
        <p className="my-2">qingqingou@gmail.com</p>
        <p className="my-2"></p>
      </div>

      {/* EmailButton */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-primarycolor to-secondarycolor focus:outline-none"
        onClick={() => window.open('mailto: qingqingou@gmail.com')}
      >
        Email Me
      </button>

      <div className="flex justify-center w-full px-5 py-2 my-2">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
