import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Dropmenu = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative flex flex-col items-center w-40 rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className=" p-2 w-full font-bold rounded-lg tracking-wider border-2  duration-300 flex justify-between items-center active:border-[#dab355]"
      >
        {value ? "To: " + value : "Transfer to"}
        {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
      </button>

      {isOpen && (
        <div className="flex justify-start items-center gap-2 flex-col mt-12 rounded-lg bg-slate-800 w-40 pt-2 duration-300 absolute">
          {users.map((user) => {
            return (
              <>
                <p
                  onClick={() => {
                    setValue(user.name);
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
  );
};

export default Dropmenu;
