import { BsMessenger, BsFillChatLeftDotsFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import Logo from "../assets/images/logo.png";

const Navbar = () => {

  return (
    <nav className='w-full h-15 px-[2rem] py-[3px] flex items-center justify-between border-b-[1px] border-neutral-900'>
        <div className='flex basis-[10%] gap-2 items-center justify-center cursor-pointer'>
            <img src={Logo} width={30} height={30} alt='Logo'/>
            <p className='text-xl'>BuzzHub</p>
        </div>
        <div className='flex basis-[60%] gap-3 px-5 py-3 rounded-3xl items-center bg-neutral-900'>
            <BiSearch/>
            <input type="text" placeholder='Search...' className='outline-none bg-transparent w-full'/>
        </div>
        <div className='flex basis-[15%] items-center justify-between '>
            <AiFillHome className='text-xl cursor-pointer'/>
            <IoMdNotifications className='text-xl cursor-pointer'/>
            <BsFillChatLeftDotsFill className='cursor-pointer' />
            <FaUser className='text-lg cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar