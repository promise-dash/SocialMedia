import { TrendData } from '../assets/TrendData.js';

const TrendCard = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-[1rem] border-[1px] border-neutral-900 p-[1rem] rounded-lg">
            <h3 className='text-[1rem] font-bold'>Trendings</h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="flex items-center justify-between gap-[0.5rem] text-[13px]">
                        <span className='font-semibold'>#{trend.name}</span>
                        <span className='text-gray-500'>{trend.shares}k shares</span>
                    </div>
                )
            })}
    </div>
  )
}

export default TrendCard