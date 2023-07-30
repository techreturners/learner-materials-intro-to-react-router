import { NavLink } from 'react-router-dom';

interface INavItem {
  to: string;
  text: string;
}

const NavItem: React.FC<INavItem> = ({ to, text }) => (
  <li className='px-1 m-1 capitalize'>
    <NavLink to={to}>{text}</NavLink>
  </li>
);

export default NavItem;
