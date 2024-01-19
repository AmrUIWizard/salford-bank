import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserCard = ({ id, name, amount }) => {
  return (
    <div className="w-72 min-h-52 ring-2 ring-[#dab355] p-5 rounded-lg flex flex-col gap-5 justify-center items-center">
      <div className="flex items-center gap-2">
        <FaUser size={20} />
        <h1 className="font-bold text-2xl ">{name}</h1>
      </div>
      <h2 className="font-bold text-xl">
        Balance:{" "}
        <span className="text-[#dab355]">${amount.toLocaleString()}</span>
      </h2>
      <Link to={`/customer/${name}`}>
        <p className="ring-1 ring-gray-500 p-2 rounded-lg text-lg w-fit cursor-pointer hover:text-[#dab355] hover:ring-[#dab355] font-bold">
          Transfer Money
        </p>
      </Link>
    </div>
  );
};

export default UserCard;
