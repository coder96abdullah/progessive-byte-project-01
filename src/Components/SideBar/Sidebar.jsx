

const Sidebar = () => {


  return (
   <div>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page Content */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
      Open Sidebar
    </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-50  text-[#F5F5FF] text-[16px] font-[500]">
      {/* Sidebar content */}
      <li><a>Dashboard</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
</div>

   </div>
  );
};

export default Sidebar;
