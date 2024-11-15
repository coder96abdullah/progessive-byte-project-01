import React from 'react';

const WeeklyStatistic = () => {
    return (
        <div className='flex gap-5 my-10'>
            <div className='bg-white py-10 px-5 flex-1 rounded-2xl'>
            <div className='flex gap-5 items-center pb-2'>
            <p className='text-[#4F46E5] text-[12px] font-[700] bg-[#EDEDFC] py-3 px-3 rounded-2xl'>Invoices weekly Statistics</p>
            <p className='text-[#4F46E5] text-[12px] font-[700]'>Invoices monthly Statistics</p>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
   
    <tbody className='text-[#1B2559]'>
      {/* row 1 */}
      <tr>
        <th>Total</th>
        <td>Invoice generated</td>
        <td>$1400,00</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>Total</th>
        <td>Paid</td>
        <td>$1200,00</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <th>Total</th>
        <td>Due</td>
        <td>$1100,00</td>
      </tr>
    </tbody>
  </table>
</div> 
            </div>

{/* column-02 */}

            <div className='bg-white py-10 px-5 flex-1 rounded-2xl'>
            <div className='flex gap-5 items-center pb-2'>
            <p className='text-[#4F46E5] text-[12px] font-[700] bg-[#EDEDFC] py-3 px-3 rounded-2xl'>Bills weekly Statistics</p>
            <p className='text-[#4F46E5] text-[12px] font-[700]'>Bills monthly Statistics</p>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
   
    <tbody className='text-[#1B2559]'>
      {/* row 1 */}
      <tr>
        <th>Total</th>
        <td>Invoice generated</td>
        <td>$1400,00</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>Total</th>
        <td>Paid</td>
        <td>$1200,00</td>
        
      </tr>
      {/* row 3 */}
      <tr>
        <th>Total</th>
        <td>Due</td>
        <td>$1100,00</td>
      </tr>
    </tbody>
  </table>
</div> 
            </div>
          
        </div>
    );
};

export default WeeklyStatistic;