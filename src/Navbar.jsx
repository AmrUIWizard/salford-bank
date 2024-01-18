import { styles } from "./styles";
import { Outlet, Link } from "react-router-dom";
import Logo from "../public/salford.svg";
import Text from "./assets/salfordtext.svg";

const Navbar = () => {
  return (
    <>
      <nav className="max-w-7xl mx-auto">
        <div
          className={`${styles.paddingX} w-full flex justify-between items-center py-5`}
        >
          <Link to="/">
            <div className="flex items-center gap-5 cursor-pointer">
              <img
                src={Logo}
                alt="logo"
                className="w-12 h-12 object-contain "
              />
              <p className="font-bold">
                Salford | <br />
                <span className="text-[#dab355]">Investment Banking</span>
              </p>
            </div>
          </Link>
          <Link to="/customers">
            <p className="font-bold hover:text-[#dab355]">All customers</p>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
