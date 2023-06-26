import { Modal } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  
  return (
    <Modal
      overlayOpacity={0.85}
      overlayBlur={5}
      size="60%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="flex flex-col justify-center items-center gap-[2rem] text-white bg-black">
        <h3>Your info</h3>

        <div className="flex gap-[1rem] h-[2rem] w-[90%]">
          <input
            type="text"
            className="border-[1px] rounded-lg bg-black border-neutral-900 p-[20px] flex-1 outline-none"
            name="FirstName"
            placeholder="First Name"
          />

          <input
            type="text"
            className="border-[1px] rounded-lg bg-black border-neutral-900 p-[20px] flex-1 outline-none"
            name="LastName"
            placeholder="Last Name"
          />
        </div>

        <div className="flex gap-[1rem] h-[2rem] w-[90%]">
          <input
            type="text"
            className="border-[1px] rounded-lg bg-black border-neutral-900 p-[20px] flex-1 outline-none"
            name="worksAT"
            placeholder="Works at"
          />
        </div>

        <div className="flex gap-[1rem] h-[2rem] w-[90%]">
          <input
            type="text"
            className="border-[1px] rounded-lg bg-black border-neutral-900 p-[20px] flex-1 outline-none"
            name="livesIN"
            placeholder="LIves in"
          />

          <input
            type="text"
            className="border-[1px] rounded-lg bg-black border-neutral-900 p-[20px] flex-1 outline-none"
            name="Country"
            placeholder="Country"
          />
        </div>

        <div className="flex gap-[1rem] h-[2rem] w-[90%]">
          <input
            type="text"
            className="border-[1px] rounded-lg bg-black border-neutral-900 p-[20px] flex-1 outline-none"
            placeholder="RelationShip Status"
          />
        </div>


        <div className="flex gap-[1rem] h-[2rem] w-[90%]">
            Profile Image 
            <input type="file" name='profileImg'/>
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button className="w-[6rem] h-[2rem] self-end text-[1rem] rounded-lg bg-[#1d9bf0] hover:bg-[#0090f0] font-semibold">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
