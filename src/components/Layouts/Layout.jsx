import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center  md:px-0 py-3 md:py-6">
      <Header />
      <main className="flex flex-col justify-center bg-[#08252B] md:bg-mainBg border-[1px] border-[#0E464F] md:border-borderColor rounded-[32px] md:rounded-[40px] p-[24px] md:p-[48px] gap-[32px] w-[335px] h-[1030px] md:w-[700px] md:h-[902px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
