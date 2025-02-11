import {
  ArrowLeft,
  HorizontalLine,
  Logo,
  ProgressContainer,
} from "./components/utils/assets";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6">
      {/* header starts here */}
      <header className="flex items-center justify-between w-[1200px] h-[76px] border-[1px] bg-headerBg/40 border-borderColor rounded-[24px] py-[12px] px-[16px] mb-10">
        <img src={Logo} alt="logo" />

        <div>
          <ul className="flex gap-[16px] ">
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

      {/* ticket main here */}
      <main className="flex flex-col justify-center bg-mainBg border-[1px] border-borderColor rounded-[40px] p-[48px] gap-[32px] w-[700px] h-[902px]">
        <div className="flex items-center justify-between py-2">
          <h1 className="text-[32px] font-normal underline leading-[32px]">
            Ticket Selection
          </h1>
          <p className="text-[16px] font-normal leading-[24px] underline">
            Step 1/3
          </p>
        </div>

        <div className="mb-6">
          <img src={ProgressContainer} alt="" />
        </div>

        <div className="flex bg-ticketCenter border-[1px] border-borderColor rounded-[32px] p-[24px] gap-[32px] ">
          <div className="flex flex-col justify-center ">
            <div className="w-[556px] flex flex-col justify-center items-center rounded-[24px] p-[24px] gap-[8px] mb-4 border-solid border-[#07373F] border-t-0 border-r-2 border-b-2 border-l-2">
              <h1 className="text-[52px] leading-[62px] font-normal underline">
                Techember Fest "25
              </h1>
              <p className="text-[16px] leading[24px] font-normal underline">
                Join us for an unforgettable experience at <br /> [Event Name]!
                Secure your spot now.
              </p>

              <div className="flex gap-[16px] ">
                <p>📍[Event Location]</p>
                <p>| |</p>
                <p>March 15, 2025 | 7:00 PM</p>
              </div>
            </div>

            <div className="my-6">
              <img src={HorizontalLine} alt="" />
            </div>

            <div className="flex flex-col gap-[8px]">
              <p className="underline">Select Ticket Type:</p>

              <div className="flex rounded-[16px] border-[1px] border-borderColor p-[16px] gap-[16px] bg-[#052228] ">
                <div className="flex flex-wrap justify-between items-center gap-[16px]  p-[16px] w-[556px]">

                  <div className="flex underline rounded-[12px] gap-[8px] p-[8px] border-[1px] border-borderColor bg-[#197686] w-[242px] h-[65px]">
                    <div>
                      <p>REGULAR ACCESS</p>
                      <p>20 left!</p>
                    </div>
                    <button className="btn bg-[#0E464F] border-[1px] text-[20px] text-right text-white leading-[22px] border-borderColor gap-[8px] py-[8px] pl-[30px] ">Free</button> 
                  </div>

                  <div className="flex underline rounded-[12px] gap-[10px] p-[8px] border-[1px] border-borderColor bg-[#197686] w-[242px] h-[65px]">
                    <div>
                      <p>VIP ACCESS</p>
                      <p>20 left!</p>
                    </div>
                    <button className="btn bg-[#0E464F] border-[1px] text-[20px] text-right text-white leading-[22px] border-borderColor gap-[10px] py-[8px] pl-[30px] ">$50</button> 
                  </div>


                  <div className="flex underline rounded-[12px] gap-[10px] p-[8px] border-[1px] border-borderColor bg-[#197686] w-[242px] h-[65px]">
                    <div>
                      <p>VVIP ACCESS</p>
                      <p>20 left!</p>
                    </div>
                    <button className="btn bg-[#0E464F] border-[1px] text-[20px] text-right text-white leading-[22px] border-borderColor gap-[8px] py-[8px] pl-[30px] ">$150</button> 
                  </div>


                </div>
              </div>
            </div>

            <div>
              <p>Number of Tickets</p>
              {/* dropdown here */}
            </div>

            <div>
              <button className="btn">Cancel</button>
              <button className="btn">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
