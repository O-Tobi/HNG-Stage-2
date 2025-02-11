import { ArrowLeft, Logo } from "../utils/assets";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-[320px] h-[68px] md:w-[1200px] md:h-[76px] border-[1px] bg-headerBg/40 border-borderColor rounded-[12px] md:rounded-[24px] py-[12px] px-[16px] mb-10">
      <img src={Logo} alt="logo" />

      <div>
        <ul className="hidden md:flex gap-[16px] ">
          <li>
            <nav>Events</nav>
          </li>

          <li>
            <nav>My Tickets</nav>
          </li>

          <li>
            <nav>About Project</nav>
          </li>
        </ul>
      </div>

      <button className="btn">
        MY TICKETS <img src={ArrowLeft} />
      </button>
    </header>
  );
};

export default Header;
