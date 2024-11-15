import React from 'react';
import ReactECharts from 'echarts-for-react';
import { FaAngleDown } from "react-icons/fa6";

const LatestExpence = () => {

    const option = {
        color: ['#0057B7', '#FFD700'], 
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true, // Changed from false to true for emphasis display
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 700, name: 'Rent or lease' },
                    { value: 300, name: 'Travel' }
                ]
            }
        ]
    };


    const transactions = [
        {
            date: "2024-11-01",
            vendor: "Vance Rollins",
            amount: "$500.00"
        },
        {
            date: "2024-11-02",
            vendor: "Acme Supplies",
            amount: "$750.00"
        },
        {
            date: "2024-11-03",
            vendor: "Tech Solutions",
            amount: "$300.00"
        },
        {
            date: "2024-11-04",
            vendor: "Global Enterprises",
            amount: "$450.00"
        },
        {
            date: "2024-11-05",
            vendor: "Creative Designs",
            amount: "$600.00"
        }
    ];
    
    
    
    return (
        <div className='my-10' >
           <div className='grid grid-cols-3 gap-5'>
            <div className='bg-white col-span-2 rounded-2xl'>
                <p className='text-[#1B2559] text-[20px] font-[700] py-5 pl-10'>Latest Expence</p>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-base-200 text-[#4F46E5] text-[14px] font-[700]">
        <th className='px-10 py-5'>Date</th>
        <th>Vendor</th>
        <th>Amount</th>
       
      </tr>
    </thead>
    <tbody className='text-[#1B2559] text-[14px] font-[500]'>
    {
        transactions.map(single=>
        <tr key={single.date}>
            <td className='px-10 py-5'>{single.date}</td>
            <td>{single.vendor}</td>
            <td>{single.amount}</td>
          </tr>)
    }
    </tbody>
  </table>
</div>
            </div>
            <div className='bg-white col-span-1 rounded-2xl p-5 pt-10'>
                <div className='flex items-center justify-between'>
                <p className='text-[#2B3674] text-[20px] font-[700]'>Income by Category</p>
                <div className='flex gap-1 items-center'>
                <p className='text-[#2B3674] text-[12px] font-[600]'>This Week</p>
               <span className=''><FaAngleDown /></span>
                </div>
                   
                </div>
                    
                    {/* Chart */}
                    <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
                </div>
            
            </div> 
        </div>
    );
};

export default LatestExpence;