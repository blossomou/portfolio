import { FunctionComponent } from 'react';

import { Category } from '../models/type';

interface ProjectNavProps {
  value?: Category | 'all';
  handlerFilterCategory: Function;
  active: string;
}

export const NavItem: FunctionComponent<ProjectNavProps> = ({ value, handlerFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-primarycolor';
  if (active === value) {
    className += ' text-primarycolor';
  }
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<ProjectNavProps> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="react native" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="typescript" {...props} />
      <NavItem value="javascript" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
