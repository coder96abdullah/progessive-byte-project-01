import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

const Meeting = () => {
    return (
        <div className='grid grid-cols-3 gap-5 my-10'>
           <div className='bg-white py-10 px-10 space-y-5 col-span-1 rounded-2xl'>
            <h4 className='text-[#2B3674] text-[20px] font-[700] pb-5'>Meetings</h4>
             <div className='border-l-4 border-l-[#4F46E5] pl-2'>
                <p className='text-[#2B3674] text-[16px] font-[700]'>Meet w/ Simmmple</p>
                <p className='text-[#A3AED0] text-[16px] font-[500]'>01:00 PM - 02:00 PM</p>
             </div>
             <div className='border-l-4 border-l-[#4F46E5] pl-2'>
                <p className='text-[#2B3674] text-[16px] font-[700]'>Meet w/ Simmmple</p>
                <p className='text-[#A3AED0] text-[16px] font-[500]'>01:00 PM - 02:00 PM</p>
             </div>
             <div className='border-l-4 border-l-[#4F46E5] pl-2'>
                <p className='text-[#2B3674] text-[16px] font-[700]'>Meet w/ Simmmple</p>
                <p className='text-[#A3AED0] text-[16px] font-[500]'>01:00 PM - 02:00 PM</p>
             </div>
             <div className="flex items-center justify-end gap-2 text-[#4F46E5] text-[16px] font-[700]">
             <p >View all Meetings </p>
             <span><FaArrowRight /></span> 
             </div>
             
           </div>

           <div className='col-span-2 bg-white rounded-2xl px-10 py-8'>
            <div className="flex justify-between">
                <p className="text-[#2B3674] text-[20px] font-[700]">Income Vs Expense</p>
                <div className="flex items-center gap-1">
                    <p className="text-[#2B3674] text-[16px] font-[700]">Monthly</p>
                   <span className="mt-1"><IoMdArrowDropdown /></span> 
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 pt-10">
                <div className="bg-[#FFFFFF] shadow-2xl p-7 rounded-2xl">
                    <p className="text-[#A3AED0] text-[12px] font-[500]">Income Today</p>
                    <div className="flex gap-5">
                        <p className="text-[#1B2559] text-[24px] font-[700]">$52,422</p>
                        <p className="text-[#22C55E] text-[12px] font-[700] bg-[#DCFCE7] p-2 inline rounded-2xl">+2.45%</p>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] shadow-2xl p-7 rounded-2xl">
                    <p className="text-[#A3AED0] text-[12px] font-[500]">Income Today</p>
                    <div className="flex gap-5">
                        <p className="text-[#1B2559] text-[24px] font-[700]">$52,422</p>
                        <p className="text-[#22C55E] text-[12px] font-[700] bg-[#DCFCE7] p-2 inline rounded-2xl">+2.45%</p>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] shadow-2xl  p-7 rounded-2xl">
                    <p className="text-[#A3AED0] text-[12px] font-[500]">Income Today</p>
                    <div className="flex gap-5">
                        <p className="text-[#1B2559] text-[24px] font-[700]">$52,422</p>
                        <p className="text-[#22C55E] text-[12px] font-[700] bg-[#DCFCE7] p-2 inline rounded-2xl">+2.45%</p>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] shadow-2xl p-7 rounded-2xl">
                    <p className="text-[#A3AED0] text-[12px] font-[500]">Income Today</p>
                    <div className="flex gap-5">
                        <p className="text-[#1B2559] text-[24px] font-[700]">$52,422</p>
                        <p className="text-[#22C55E] text-[12px] font-[700] bg-[#DCFCE7] p-2 inline rounded-2xl">+2.45%</p>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default Meeting;