import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from './Header'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Header/>
      </div>
    </nav>
  );
};

export default Navbar;