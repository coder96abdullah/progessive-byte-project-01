
import { FaSortDown } from "react-icons/fa";
import ReactECharts from 'echarts-for-react';

const Goals = () => {
  const option = {
    color: ['#5B93FF', '#ECEEFF'], 
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
                show: true,
                position: 'center',
                formatter: '{a|50%}\n{b|Used}', // Multiline text
                rich: {
                    a: {
                        fontSize: 16,
                        color: '#2B3674', // Blue color for "Used"
                        fontWeight: 'bold'
                    },
                    b: {
                        fontSize: 16,
                        color: '#1A16F3', // Dark color for "50%"
                        fontWeight: 'bold'
                    }
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: '#2B3674'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 500, name: '' },
                { value: 500, name: '' }
            ]
        }
    ]
};


  const goals = [
    {
        Name: "Bill Goal",
        Type: "Bill",
        Duration: "2023-06-01 to 2024-06-01",
        Target: "USD 150,000.00 of USD 200,000.00",
        Progress: "90"
    },
    {
        Name: "Invoice Goal",
        Type: "Invoice",
        Duration: "2023-07-15 to 2024-07-15",
        Target: "USD 180,000.00 of USD 250,000.00",
        Progress: "72"
    },
    {
        Name: "Payment Goal",
        Type: "Payment",
        Duration: "2023-08-20 to 2024-08-20",
        Target: "USD 220,000.00 of USD 300,000.00",
        Progress: "73"
    },
    {
        Name: "Revenue Goal",
        Type: "Revenue",
        Duration:"2023-09-10 to 2024-09-10",
        Target: "USD 280,000.00 of USD 350,000.00",
        Progress: "80"
    },
    {
        Name: "Bonus Goal",
        Type: "Bonus",
        Duration: "2023-10-05 to 2024-10-05",
        Target: "USD 320,000.00 of USD 400,000.00",
        Progress: "80"
    }
];

    
    return (
        <div className="mb-10">
     <div className='grid grid-cols-3 gap-5 '>
      <div className='col-span-2 bg-white p-10 rounded-2xl'>
        <div className='flex justify-between items-center pb-5'>
          <p className='text-[#1B2559] text-[24px] font-[700]'>Goals</p>
          <div className='flex items-center gap-1'>
          <p className='text-[#1B2559] text-[16px] font-[700]'>Monthly</p>
          <FaSortDown />
          </div>
          
        </div>
        {
          goals.map((goal, index) => 
            <div key={index} className='grid grid-cols-12 bg-white shadow-2xl my-4 gap-x-3 px-5 py-3 rounded-xl'>
          <div className='col-span-2'>
           <p className='text-[#4F46E5] text-[12px] font-[600] mb-2'>Name</p>
           <p className='text-[#1B2559] text-[10px] font-[500]'>{goal.Name}</p>
          </div>
          <div className='col-span-2'>
            <p className='text-[#4F46E5] text-[12px] font-[600] mb-2'>Type</p>
            <p className='text-[#1B2559] text-[10px] font-[500]'>{goal.Type}</p>
          </div>
          <div className='col-span-2 pr-4'>
            <p className='text-[#4F46E5] text-[12px] font-[600] mb-2'>Duration</p>
            <p className='text-[#1B2559] text-[10px] font-[500]'>{goal.Duration}</p>
          </div>
          <div className='col-span-2'>
            <p className='text-[#4F46E5] text-[12px] font-[600] mb-2'>Target</p>
            <p className='text-[#1B2559] text-[10px] font-[500]'>{goal.Target}</p>
          </div>
          <div className='col-span-4 pl-4'>
            <p className='text-[#4F46E5] text-[12px] font-[600] mb-2'>Progress</p>
           <p className="flex items-center gap-5"> <progress className="progress progress-success w-56" value={parseInt(goal.Progress)} max="100"></progress> <span className='text-[10px] font-[500] text-[#22C55E] p-2 bg-[#DCFCE7] rounded-3xl'>{goal.Progress}% </span></p>
          </div>
          </div>
          
          )
        }
      
      </div>
      <div className='col-span-1 bg-white rounded-2xl'>
        <p className="text-[#2B3674] text-[24px] font-[700] pl-10 pt-10">Storage Limit</p>
        <ReactECharts option={option} style={{ height: '400px', width: '100%' }} />
        <p className="text-[#2B3674] text-[16px] font-[700] text-center -mt-12">1000 MB/2000MB</p>

      </div>
     </div>
        </div>
    );
};

export default Goals;