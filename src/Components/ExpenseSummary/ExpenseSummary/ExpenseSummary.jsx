import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
const ExpenseSummary = () => {
   
   const payments= [
        {MaintenanceSales:[84.10,72.00,54.39,101.00,54.00,34.45,23.45,34.45,121.00,230.00,23.12,34.23]},
        {ProductSales:[84.10,72.00,54.39,101.00,54.00,34.45,23.45,34.45,121.00,230.0,23.12,34.23]}      
    ];
    

    const bills= [
        {MaintenanceSales:[84.10,72.00,54.39,101.00,54.00,34.45,23.45,34.45,121.00,230.00,23.12,34.23]},
        {ProductSales:[84.10,72.00,54.39,101.00,54.00,34.45,23.45,34.45,121.00,230.00,23.12,34.23]}
    ]
     
    
    
    return (
        <div className="bg-white rounded-xl my-10 mx-7 pt-10 py-5">
            <div className="text-[#1B2559] text-[16px] font-[700] pl-10 my-5">
                <p>Report: Expense Summary</p>
                <p>Duration: Jan 2024-Dec 2024</p>
            </div>
            < div className="flex gap-3 justify-end my-5 pr-5">
            <div className="form-control relative">
     <div className='absolute top-5 left-3 text-[14px] text-[#9CA3AF]'><FaSearch /></div>
      <input type="text" placeholder="Search" className="input pl-8 text-[#ABAFB1] text-[14px] font-[500]  border-[#CFD3D4] input-bordered w-[200px]" />
    </div>
    <div className="form-control relative">
     <div className='absolute top-5 left-3 text-[14px] text-[#53545C]'><CiFilter/></div>
      <input type="text" placeholder="Filter" className="input pl-8 text-[#53545C] text-[14px] font-[500]  border-[#53545C] input-bordered w-[90px]" />
    </div>

    <div className="form-control relative">
     <div className='absolute top-5 right-3 text-[14px] text-[#53545C]'><FaAngleDown /></div>
      <input type="text" placeholder="Year 2024" className="input pl-2 text-[#53545C] text-[14px] font-[500] border-[#53545C]  input-bordered w-[110px]" />
    </div>

    <div className="form-control relative">
     <div className='absolute top-5 right-3 text-[14px] text-[#53545C]'><FaAngleDown /></div>
      <input type="text" placeholder="Monthly" className="input pl-2 text-[#53545C] text-[14px] font-[500] border-[#53545C] input-bordered w-[110px]" />
    </div>

    <div className="form-control relative">
     <div className='absolute top-5 right-3 text-[14px] text-[#53545C]'><FaAngleDown /></div>
      <input type="text" placeholder="Category" className="input pl-2 text-[#53545C] text-[14px] font-[500] border-[#53545C] input-bordered w-[110px]" />
    </div>

    <div className="form-control relative">
     <div className='absolute top-5 right-3 text-[14px] text-[#53545C]'><FaAngleDown /></div>
      <input type="text" placeholder="Customer" className="input pl-2 text-[#53545C] text-[14px] font-[500] border-[#53545C] input-bordered w-[110px]" />
    </div>

    <div className="form-control relative">
     <div className='absolute top-5 right-3 text-[14px] text-[#53545C]'><FaAngleDown /></div>
      <input type="text" placeholder="Bulk Action" className="input pl-2 text-[#53545C] text-[14px] font-[500] border-[#53545C] input-bordered w-[120px]" />
    </div>
    
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-[#F9F9F9] text-[#4318FF] text-[14px] font-[600]">
        <th>Category</th>
        <th>January</th>
        <th>February</th>
        <th>March</th>
        <th>April</th>
        <th>May</th>
        <th>June</th>
        <th>July</th>
        <th>August</th>
        <th>September</th>
        <th>October</th>
        <th>November</th>
        <th>December</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th className="text-[16px] font-[700] text-[#1B2559]">Payment</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="text-[#1B2559] text-[14px] font-[400]">
        <td>Maintenance Sales</td>
        <td>${payments[0].MaintenanceSales[0]}</td>
        <td>${payments[0].MaintenanceSales[1]}</td>
        <td>${payments[0].MaintenanceSales[2]}</td>
        <td>${payments[0].MaintenanceSales[3]}</td>
        <td>${payments[0].MaintenanceSales[4]}</td>
        <td>${payments[0].MaintenanceSales[5]}</td>
        <td>${payments[0].MaintenanceSales[6]}</td>
        <td>${payments[0].MaintenanceSales[7]}</td>
        <td>${payments[0].MaintenanceSales[8]}</td>
        <td>${payments[0].MaintenanceSales[9]}</td>
        <td>${payments[0].MaintenanceSales[10]}</td>
        <td>${payments[0].MaintenanceSales[11]}</td>
      </tr>

      <tr className="text-[#1B2559] text-[14px] font-[400]">
        <td>Product sales</td>
        <td>${payments[1].ProductSales[0]}</td>
        <td>${payments[1].ProductSales[1]}</td>
        <td>${payments[1].ProductSales[2]}</td>
        <td>${payments[1].ProductSales[3]}</td>
        <td>${payments[1].ProductSales[4]}</td>
        <td>${payments[1].ProductSales[5]}</td>
        <td>${payments[1].ProductSales[6]}</td>
        <td>${payments[1].ProductSales[7]}</td>
        <td>${payments[1].ProductSales[8]}</td>
        <td>${payments[1].ProductSales[9]}</td>
        <td>${payments[1].ProductSales[10]}</td>
        <td>${payments[1].ProductSales[11]}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th className="text-[16px] font-[700] text-[#1B2559]">Bill</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="text-[#1B2559] text-[14px] font-[400]">
        <td>Maintenance Sales</td>
        <td>${bills[0].MaintenanceSales[0]}</td>
        <td>${bills[0].MaintenanceSales[1]}</td>
        <td>${bills[0].MaintenanceSales[2]}</td>
        <td>${bills[0].MaintenanceSales[3]}</td>
        <td>${bills[0].MaintenanceSales[4]}</td>
        <td>${bills[0].MaintenanceSales[5]}</td>
        <td>${bills[0].MaintenanceSales[6]}</td>
        <td>${bills[0].MaintenanceSales[7]}</td>
        <td>${bills[0].MaintenanceSales[8]}</td>
        <td>${bills[0].MaintenanceSales[9]}</td>
        <td>${bills[0].MaintenanceSales[10]}</td>
        <td>${bills[0].MaintenanceSales[11]}</td>
      </tr>
      <tr className="text-[#1B2559] text-[14px] font-[400]">
        <td>Product sales</td>
        <td>${bills[1].ProductSales[0]}</td>
        <td>${bills[1].ProductSales[1]}</td>
        <td>${bills[1].ProductSales[2]}</td>
        <td>${bills[1].ProductSales[3]}</td>
        <td>${bills[1].ProductSales[4]}</td>
        <td>${bills[1].ProductSales[5]}</td>
        <td>${bills[1].ProductSales[6]}</td>
        <td>${bills[1].ProductSales[7]}</td>
        <td>${bills[1].ProductSales[8]}</td>
        <td>${bills[1].ProductSales[9]}</td>
        <td>${bills[1].ProductSales[10]}</td>
        <td>${bills[1].ProductSales[11]}</td>
      </tr>
      <tr>
        <th className="text-[16px] font-[500] text-[#1B2559]" colSpan="3">Expense = Payment+Bill</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="text-[#1B2559] text-[14px] font-[400]">
        <th className="text-[16px] font-[700] text-[#1B2559]">Total</th>

        <td>${bills[0].MaintenanceSales[0]}</td>
        <td>${bills[0].MaintenanceSales[1]}</td>
        <td>${bills[0].MaintenanceSales[2]}</td>
        <td>${bills[0].MaintenanceSales[3]}</td>
        <td>${bills[0].MaintenanceSales[4]}</td>
        <td>${bills[0].MaintenanceSales[5]}</td>
        <td>${bills[0].MaintenanceSales[6]}</td>
        <td>${bills[0].MaintenanceSales[7]}</td>
        <td>${bills[0].MaintenanceSales[8]}</td>
        <td>${bills[0].MaintenanceSales[9]}</td>
        <td>${bills[0].MaintenanceSales[10]}</td>
        <td>${bills[0].MaintenanceSales[11]}</td>


      </tr>
      {/* row 3 */}
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ExpenseSummary;