import { ArrowLeft, Logo } from "../utils/assets";

const Header = () => {
  return (
    <header 
      className="flex items-center justify-between w-[320px] h-[68px] lg:w-[1200px] lg:h-[76px] border-[1px] bg-headerBg/40 border-borderColor rounded-[12px] lg:rounded-[24px] py-[12px] px-[16px] mb-10"
      role="banner"
    >
      <a href="/" aria-label="Go to homepage">
        <img src={Logo} alt="Website Logo" />
      </a>

      <nav aria-label="Main navigation">
        <ul className="hidden lg:flex gap-[16px]">
          <li tabIndex={0}>
            <a href="/events" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
              Events
            </a>
          </li>
          <li tabIndex={0}>
            <a href="/my-tickets" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
              My Tickets
            </a>
          </li>
          <li tabIndex={0}>
            <a href="/about" className="focus:outline-none focus:ring-2 focus:ring-blue-500">
              About Project
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="btn focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="View my tickets"
      >
        MY TICKETS 
        <img src={ArrowLeft} alt="" aria-hidden="true" />
      </button>
    </header>
  );
};

export default Header;
