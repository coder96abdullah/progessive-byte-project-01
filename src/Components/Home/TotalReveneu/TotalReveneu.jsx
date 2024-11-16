import * as React from 'react';
import { MdApartment } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { BarChart } from '@mui/x-charts/BarChart';

const TotalRevenue = () => {
  const uData = [40000, 30000, 20000, 27800, 18900, 23900, 34900, 24980, 33000];
  const pData = [20400, 10398, 90800, 30908, 40800, 30800, 40300, 40500, 34000];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  
  const records = [
    { bankName: "ROUND BANK", holder: "Holder: Benjamin Adams", amount: "$6,542.00" },
    { bankName: "US BANK, NA", holder: "Holder: Earl Hane MD", amount: "$834.00" },
    { bankName: "COBIZ BANK", holder: "Holder: Chisom Latifat", amount: "$2,202.76" }
  ];

  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='col-span-2 bg-white rounded-2xl p-7'>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <p className="text-[#2B3674] text-[20px] font-[700]">Total Revenue</p>
              <span className="text-[#22C55E] text-[12px] font-[700] p-1 bg-[#DCFCE7] rounded-full">+2.45%</span>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[#2B3674] text-[16px] font-[700]">Yearly</p>
              <FaCaretDown />
            </div>
          </div>
          <p className='text-[#718EBF] text-[12px] font-[500] my-4'> <span className='text-[#2B3674] text-[12px] font-[500]'>$37,560</span> Income & <span className='text-[#2B3674] text-[12px] font-[500]'>$15,420</span> Expense in this Month</p>
          <div className='flex items-center gap-1'>
            <div className='border-b-2 border-[#4F46E5] border-dotted w-[90%]'></div>
            <span className='text-[#4F46E5] text-[10px] font-[500]'>$42,000</span>
          </div>

          <div className='w-full'>
            <BarChart
              width={740}
              height={300}
              series={[
                { data: pData, label: 'Income', id: 'pvId', color: '#4F46E5' },  // Blue color for Income
                { data: uData, label: 'Expense', id: 'uvId', color: '#EDEDFC' }   // Red color for Expense
              ]}
              xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
          </div>
        </div>
        
        <div className='col-span-1 bg-white p-7 rounded-2xl'>
          <div className='text-white bg-gradient-to-r from-[#544fbd] to-[#4F46E5] rounded-md py-2 px-5'>
            <p className='text-[#E9EDF7] text-[14px] font-[500]'>Account Balance</p>
            <p className='text-[36px] font-[600]'>$25,215</p>
          </div>
          <p className='text-[#A3AED0] text-[14px] font-[500] mt-3'>Recent</p>

          {records.map((record, index) => (
            <div key={index} className="grid grid-cols-5 items-center my-4">
              <div className="col-span-1">
                <span className="bg-[#F4F7FE] rounded-full p-3 inline-block text-[#4F46E5] text-right">
                  <MdApartment />
                </span>
              </div>
              <div className="col-span-3 -ml-4">
                <p className="text-[#1B2559] font-[700] text-[14px]">{record.bankName}</p>
                <p className="text-[#A3AED0] text-[12px] font-[500]">{record.holder}</p>
              </div>
              <span className="col-span-1 text-right text-[#1B2559] text-[16px] font-[700]">{record.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
