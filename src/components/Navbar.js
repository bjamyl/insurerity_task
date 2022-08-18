import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="mx-20 mt-4">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <img className="w-60" src={Logo} alt="" />
        </div>
        <div className="flex gap-x-20 font-bold text-xl">
          <Link to='/'>Home</Link>
          <Link to='/add'>Add New Complaint</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
