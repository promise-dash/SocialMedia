import { Followers } from '../assets/FollowersData.js';

const FollowersCard = () => {
  return (
    <div className="w-full rounded-lg gap-[1rem] flex flex-col text-[13px] border-[1px] border-neutral-900 p-[1rem]">
        <h3 className='text-[1rem] font-bold'>Who is following You</h3>

        {Followers.map((follower, id)=>{
            return(
                <div key={id} className="flex justify-between items-center">
                    <div className='flex gap-[10px]'>
                        <img src={follower.img} alt="" className='w-[3.2rem] h-[3.2rem] rounded-full' />
                        <div className="flex flex-col items-start justify-center">
                            <span className='font-semibold'>{follower.name}</span>
                            <span className='text-gray-500'>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='h-[2rem] px-[20px] text-[1rem] rounded-lg bg-[#1d9bf0] hover:bg-[#0090f0] font-semibold'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard