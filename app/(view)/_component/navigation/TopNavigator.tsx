import { IoIosSearch } from 'react-icons/io';
import { FaTools } from "react-icons/fa";
import logo from '../../../images/logo.png'
import './styles/TopNavigator.css'

export const TopNavigator = () => {
  return (
    <nav className="nav-style">
      <a href="./home" className="logo-title">
        <div className='logo'>
          <img src={logo.src} width={100} />
        </div>
        <span className="title">Lethal Company Tools</span>
      </a>
      <div className="menu">
        <IoIosSearch />
        <div className="menu-option">
          <a href="./home" className="logo-title">
            Home
          </a>
        </div>
        <FaTools />
        <div className="menu-option">
          <a href="./tools" className="logo-title">
            Tools
          </a>
        </div>
      </div>
    </nav>
  );
}