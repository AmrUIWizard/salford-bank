import { useEffect, useState } from "react";
import { styles } from "./styles";
import { supabase } from "./supabase";
import UserCard from "./UserCard";
import Loading from "./Loading";

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, [setUsers]);
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

  return (
    <div className="max-w-7xl mx-auto">
      <div className={styles.paddingX}>
        <h1 className="font-bold text-5xl text-center mt-10">
          Customers in <span className="text-[#dab355]">Salford</span> Bank
        </h1>
        {loading ? (
          <Loading />
        ) : (
          <div className="mt-14 mb-8 flex justify-center items-center gap-10 flex-wrap">
            {users.map((user) => {
              return <UserCard key={user.id} {...user} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
