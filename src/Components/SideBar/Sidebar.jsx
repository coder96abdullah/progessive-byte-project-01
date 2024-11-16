import { MdDashboard } from "react-icons/md";
import { BiLogoZoom } from "react-icons/bi";
import { MdOutlineInventory2 } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { FaMoneyBill,FaUserGroup } from "react-icons/fa6";
import { LuContact2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sidebar = () => {


  return (
   <div>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page Content */}
    <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
      Open Sidebar
    </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
   <Link to='/'><p className="text-[#F9FAFB] text-[24px] font-[800] pl-10 py-5">Progressive Byte</p></Link> 
    <ul className="menu p-4 w-50  text-[#F5F5FF] text-[16px] font-[500] space-y-2">
      {/* Sidebar content */}
      <li className=""><a><span className="text-white"><MdDashboard /> </span>Dashboard</a></li>
      
      
      
      <li>
        <details>
          <summary className="hover:bg-[#4F46E5]"><TbReportAnalytics />Reports</summary>
          <ul className="p-2 list-disc">
            <li><a>Invoice summary</a></li>
            <li><a>Sales reports</a></li>
            <li><a>Receivables</a></li>
            <li><a>Payables</a></li>
            <li><a>Bill summary</a></li>
            <li><a>Cash flow</a></li>
            <li><a>Transaction</a></li>
            <li><a>Income summary</a></li>
            <li>
              <Link to='/expenseSummary'><a>Expense summary</a></Link>
              </li>
            <li><a>income vs expense</a></li>
            <li><a>Tax summary</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary><IoPeople />HRM</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary><FaMoneyBill />Financial accounting</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a><span><MdOutlineInventory2 /> </span>Inventory Management</a></li>
      <li>
        <details>
          <summary><FaUserGroup />User management</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li className=""><a><span><BiLogoZoom /> </span>Zoom meeting</a></li>
      <li><a><span><BsChatDots /> </span>Chats</a></li>
      <li><a><LuContact2 />Contact Support</a></li>
    </ul>
  </div>
</div>

   </div>
  );
};

export default Sidebar;
