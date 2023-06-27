import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { BsFillPencilFill } from "react-icons/bs";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    window.location.href = "/login";
  }

  return (
    <div className="flex flex-col gap-[0.75rem] border-[1px] border-neutral-900 rounded-lg w-full p-[1rem]">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-[1rem]">Your Info</h4>
        <div className="hover: cursor-pointer">
          <BsFillPencilFill
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <br />
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Zainkeepscode inst</span>
      </div>
      <button 
      onClick={handleLogout}
      className="w-[7rem] h-[2rem] mt-[2rem] self-end text-[1rem] rounded-lg bg-[#1d9bf0] hover:bg-[#0090f0] font-semibold"
      >Logout</button>
    </div>
  );
};

export default InfoCard;
