import React from 'react';

const RecentInvoice = () => {
    const invoices = [
        {
            invoiceNumber: "#INVO00012",
            customer: "John Doe",
            issueDate: "2024-11-01",
            dueDate: "2024-11-15",
            amount: "$500.00",
            status: "Paid"
        },
        {
            invoiceNumber: "#INVO00013",
            customer: "Jane Smith",
            issueDate: "2024-11-02",
            dueDate: "2024-11-16",
            amount: "$750.00",
            status: "Partially Paid"
        },
        {
            invoiceNumber: "#INVO00014",
            customer: "Bob Brown",
            issueDate: "2024-11-03",
            dueDate: "2024-11-17",
            amount: "$300.00",
            status: "Draft"
        },
        {
            invoiceNumber: "#INVO00015",
            customer: "Alice Johnson",
            issueDate: "2024-11-04",
            dueDate: "2024-11-18",
            amount: "$450.00",
            status: "Paid"
        },
        {
            invoiceNumber: "#INVO00016",
            customer: "Charlie Green",
            issueDate: "2024-11-05",
            dueDate: "2024-11-19",
            amount: "$600.00",
            status: "Draft"
        }
    ];
    
    
    
    
    return (
        <div className='bg-white rounded-2xl'>
            
           <div className="overflow-x-auto ">
           <p className='text-[#2B3674] text-[20px] font-[700] py-5 pl-10'>Recent Invoices</p>
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-[#4F46E5] bg-base-200 text-[14px]'>
        <th className='px-10 py-5'>Invoice number</th>
        <th>Customer</th>
        <th>Issue date</th>
        <th>Due date</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className='text-[#1B2559] text-[14px] font-[500]'>
      
      {
        invoices.map(voice=><tr key={voice.invoiceNumber} >
            <td className='px-10 py-5'>{voice.invoiceNumber}</td>
            <td>{voice.customer}</td>
            <td>{voice.issueDate}</td>
            <td>{voice.dueDate}</td>
            <td>{voice.amount}</td>
            <td> <span className={` py-2 px-2 rounded-lg ${voice.status === "Paid" ? 'bg-[#DCFCE7] text-[#22C55E]' : voice.status == "Partially Paid" ? 'bg-[#FEF3C7] text-[#F59E0B]' : voice.status == "Draft" ? 'bg-[#EDEDFC] text-[#4F46E5]': 'bg-none' }`}>{voice.status}</span></td>
          </tr>)
      }
      
     
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default RecentInvoice;
