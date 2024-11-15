// import { LuCalendarRange } from "react-icons/luc"; // Adjust if LuCalendarRange icon is from a different library
import { FaCaretDown } from "react-icons/fa";
import { LuCalendarRange } from "react-icons/lu";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const CashFlow = () => {
  const data = [
    { month: '3-oct', sales: 140 },
    { month: '4-oct', sales: 120 },
    { month: '5-oct', sales: 135 },
    { month: '6-oct', sales: 100 },
    { month: '7-oct', sales: 110 },
    { month: '8-oct', sales: 150 },
    { month: '9-oct', sales: 90 },
    { month: '10-oct', sales: 70 },
    { month: '11-oct', sales: 120 },
    { month: '12-oct', sales: 130 },
    { month: '13-oct', sales: 50 },
    { month: '14-oct', sales: 120 },
  ];
 
  return (
    <div className="my-10">
      <div className="grid grid-cols-3 gap-6">
        {/* Cash Flow Chart Section */}
        <div className="col-span-2 bg-white rounded-2xl p-7">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <p className="text-[#2B3674] text-[20px] font-bold">Cash Flow</p>
              <span className="text-[#22C55E] text-[12px] font-bold px-2 py-1 bg-[#DCFCE7] rounded-full">+2.45%</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <p className="text-[#2B3674] text-[16px] font-bold">Weekly</p>
              <FaCaretDown />
            </div>
          </div>
          <div className="mt-5">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#4F46E5" fill="#E9E3FF" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="col-span-1 bg-white rounded-2xl p-7">
          <p className="text-[#1B2559] text-[24px] font-bold">Office Attendance</p>
          <div className="my-10">
            <div className="flex gap-2 items-center">
              <LuCalendarRange />
              <p className="text-[#1B2559] text-[18px] font-medium">06 October 2024</p>
            </div>
            <p className="text-[#1B2559] text-[18px] font-medium">Office time: 9am - 5pm</p>
          </div>
          <button className="bg-[#4F46E5] text-white text-[16px] font-semibold w-full py-2 rounded-lg mt-10">Clock in</button>
          <button className="bg-[#EDEDFC] text-[#4F46E5] text-[16px] font-semibold w-full py-2 rounded-lg mt-5">Clock out</button>
        </div>
      </div>
    </div>
  );
};

export default CashFlow;
