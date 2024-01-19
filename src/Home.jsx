import { styles } from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto flex-1">
      <div className={`${styles.paddingX}`}>
        <h1 className="font-bold text-7xl max-sm:text-5xl max-sm:mt-36 mt-64 ">
          Empowering Your Financial Journey with <br />
          <span className="text-[#dab355]">Innovation and Security</span>
        </h1>
        <Link to="/customers">
          <div className="mt-8 text-xl hover:text-[#dab355] w-fit">
            Go To Customers
            <hr className="bg-[#dab355] h-[2px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
