import {  HorizontalLine, ProgressContainer } from "../utils/assets";
import TicketForm1 from "../utils/TicketForm1";

const Page1 = () => {
  return (
    <div className="flex flex-col justify-center bg-[#08252B] md:bg-mainBg border-[1px] border-[#0E464F] md:border-borderColor rounded-[32px] md:rounded-[40px] p-[24px] md:p-[48px] gap-[32px] w-[335px] h-[1030px] md:w-[700px] md:h-[902px] ">
      <div className="flex flex-col md:flex-row gap-[12px] w-[287px] h-[76px] md:w-[604px] md:h-[48px] md:items-center md:justify-between md:pt-2">
        <h1 className="text-[32px] font-normal underline leading-[32px]">
          Ticket Selection
        </h1>
        <p className="text-[16px] font-normal leading-[24px] underline">
          Step 1/3
        </p>
        <div className="block md:hidden">
          <img src={ProgressContainer} alt="" />
        </div>
      </div>

      <div className="mb-2 hidden md:block">
        <img src={ProgressContainer} alt="" />
      </div>

      <div className="flex bg-transparent md:bg-ticketCenter md:border-[1px] border-borderColor md:rounded-[32px] md:p-[24px] md:gap-[32px] ">
        <div className="flex flex-col justify-center ">
          <div className="bg-gradient w-[287px] h-[273px] md:h-[200px] md:w-[556px] flex flex-col justify-center items-center rounded-[24px] py-[16px] px-[24px] md:p-[24px] gap-[8px] mb-4 border-solid border-[#07373F] border-t-0 border-r-2 border-b-2 border-l-2">
            <h1 className="text-[25px] text-center  md:text-[52px] leading-[62px] font-normal underline">
              Techember Fest &rsquo;25
            </h1>
            <p className="w-[239px] text-center  md:w-[240px] text-[14px] md:text-[16px] leading[24px] font-normal underline">
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>

            <div className="flex flex-col md:flex-row md:gap-[16px] text-[14px] md:text-[16px]">
              <p>📍[Event Location]</p>
              <p className="hidden md:block">| |</p>
              <p>March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          <div className="h-[4px] w-[287px]  md:w-[556px] my-6">
            <img src={HorizontalLine} alt="" />
          </div>

          <TicketForm1 />
        </div>
      </div>
    </div>
  );
};

export default Page1;
