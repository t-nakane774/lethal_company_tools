import { IoIosSearch } from 'react-icons/io';
import { FaTools } from "react-icons/fa";
import logo from '../../../images/logo-with-crew.png'
import './styles/TopNavigator.css'

export default function TopNavigator() {

  return (
    <nav className="nav-style">
      <a href="./home" className="flex items-center flex-shrink-0 mr-6 hover:text-white">
        <div className='logo'>
          <img src={logo.src} width={100} />
        </div>
        <span className="font-semibold text-xl tracking-tight">Lethal Company Tools</span>
      </a>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex text-sm lg:flex-grow">
          <a href="./home" className="block lg:inline-block lg:mt-0 hover:text-white">
            <div className="flex-nowrap">
              <IoIosSearch />
              Home
            </div>
          </a>
        </div>
        <div className="flex text-sm lg:flex-grow">
          <a href="./tools" className="block lg:inline-block lg:mt-0 hover:text-white">
            <div className="flex-nowrap">
              <FaTools />
              Tools
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}