import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center  lg:px-0 py-3 lg:py-6">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
