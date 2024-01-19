import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styles } from "./styles";
import { supabase } from "./supabase";
import Loading from "./Loading";
import { FaUser } from "react-icons/fa6";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const OneCustomer = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [theUser, setTheUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [receive, setReceive] = useState(0);
  const [amount, setAmount] = useState(0);

  const userPayment = {
    from: theUser.name,
    to: value,
    amount: Number(amount),
  };

  useEffect(() => {
    getUsers();
    cutomList();
  }, [loading]);
  const getUsers = async () => {
    try {
      const { data, error } = await supabase.from("users").select("*");

      if (error) throw error;
      if (data != null) {
        setUsers(data);
        setLoading(false);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const cutomList = async () => {
    users.map((user) => {
      if (user.name === name) {
        setTheUser(user);
      }
    });
  };

  const usersList = users.filter((user) => user.name !== name);
  const balance = theUser.amount;
  const transferMoney = async (e) => {
    e.preventDefault();
    if (!userPayment.to) {
      alert("Please choose name");
      return;
    }
    if (theUser.amount < amount) {
      alert("Balance not enough");
      return;
    }
    try {
      const { data, error } = await supabase
        .from("users")
        .update({ amount: Number(receive + userPayment.amount) })
        .eq("name", userPayment.to);
    } catch (err) {
      alert(err.message);
    }
    try {
      const { data, error } = await supabase
        .from("users")
        .update({ amount: theUser.amount - userPayment.amount })
        .eq("name", name);
      navigate("/customers");
    } catch (err) {
      alert(err.message);
    }
    console.log(userPayment);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <div className={`${styles.paddingX} mt-10`}>
          <div className="flex items-center gap-4 mb-8">
            <FaUser size={30} />
            <h1 className="text-4xl font-bold">{theUser.name}</h1>
          </div>
          <h1 className="text-2xl font-bold">
            Balance: <span className="text-[#dab355]">${balance}</span>
          </h1>

          <form
            className="mt-16 flex flex-wrap gap-6 "
            onSubmit={transferMoney}
          >
            <input
              type="number"
              className="bg-gray- border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Amount"
              required
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="relative flex flex-col items-center w-40 rounded-lg">
              <p
                onClick={() => setIsOpen((prev) => !prev)}
                className=" p-2 w-full font-bold rounded-lg tracking-wider border-2  duration-300 flex justify-between items-center active:border-[#dab355] cursor-pointer"
              >
                {value ? "To: " + value : "Transfer to"}
                {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
              </p>

              {isOpen && (
                <div className="flex justify-start items-center gap-2 flex-col mt-12 rounded-lg bg-slate-800 w-40 pt-2 duration-300 absolute">
                  {usersList.map((user) => {
                    return (
                      <>
                        <p
                          onClick={() => {
                            setValue(user.name);
                            setReceive(user.amount);
                            setIsOpen(false);
                          }}
                          className="font-bold cursor-pointer hover:text-[#dab355]"
                          key={user.id}
                        >
                          {" "}
                          {user.name}
                        </p>
                        <hr className="h-[1px] w-full" />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="ring-2 ring-gray-500 p-2 rounded-lg text-lg cursor-pointer hover:text-[#dab355] hover:ring-[#dab355] font-bold w-40"
            >
              Send
            </button>
          </form>

          <Link to="/customers">
            <div className="mt-8 text-xl hover:text-[#dab355] w-fit">
              Return to customers
              <hr className="bg-[#dab355] h-[2px]" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OneCustomer;
