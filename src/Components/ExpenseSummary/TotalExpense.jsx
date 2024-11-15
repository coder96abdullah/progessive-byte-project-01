import { FaCaretDown } from "react-icons/fa";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const TotalExpense = () => {
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
        <div className="mx-10 bg-white rounded-xl my-10 py-10">
            <div className="flex justify-between items-center px-10">
            <div className="flex gap-2 items-center">
              <p className="text-[#2B3674] text-[14px] font-[600] ">Total Expense</p>
              <span className="text-[#22C55E] text-[12px] font-bold px-2 py-1 bg-[#DCFCE7] rounded-full">+2.45%</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <p className="text-[#2B3674] text-[14px] font-[600]">Monthly</p>
              <FaCaretDown />
            </div>
          </div>
          <p className="text-[40px] font-[700] text-[#1B2559] mb-32 pl-10">$8987.00</p>
          <div className="mt-5">
            <ResponsiveContainer width="100%" height={400}>
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
    );
};

export default TotalExpense;