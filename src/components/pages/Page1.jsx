import { HorizontalLine, ProgressContainer } from "../utils/assets";
import TicketForm1 from "../utils/TicketForm1";

const Page1 = () => {
  return (
    <section
      className="flex flex-col justify-center bg-[#08252B] lg:bg-mainBg border-[1px] border-[#0E464F] lg:border-borderColor rounded-[32px] lg:rounded-[40px] p-[24px] lg:p-[48px] gap-[32px] w-[335px] h-[1030px] lg:w-[700px] lg:h-[902px]"
      role="main"
    >
      
      <div
        className="flex flex-col lg:flex-row gap-[12px] w-[287px] h-[76px] lg:w-[604px] lg:h-[48px] lg:items-center lg:justify-between lg:pt-0"
        role="banner"
      >
        <h1 className="text-[32px] font-normal underline leading-[32px]">
          Ticket Selection
        </h1>
        <p className="text-[16px] font-normal leading-[24px] underline">
          Step 1/3
        </p>
        <div className="block lg:hidden">
          <img src={ProgressContainer} alt="Progress indicator" />
        </div>
      </div>

      <div className="mb-2 hidden lg:block">
        <img src={ProgressContainer} alt="Progress indicator" />
      </div>

      {/* Event Information Section */}
      <section
        className="flex bg-transparent lg:bg-ticketCenter lg:border-[1px] border-borderColor lg:rounded-[32px] lg:p-[24px] lg:gap-[32px]"
        aria-labelledby="event-title"
      >
        <div className="flex flex-col justify-center">
          <div
            className="bg-gradient w-[287px] h-[273px] lg:h-[200px] lg:w-[556px] flex flex-col justify-center items-center rounded-[24px] py-[16px] px-[24px] lg:p-[24px] gap-[8px] mb-4 border-solid border-[#07373F] border-t-0 border-r-2 border-b-2 border-l-2"
            role="region"
            aria-labelledby="event-title"
          >
            <h2 id="event-title" className="text-[25px] text-center lg:text-[52px] leading-[62px] font-normal underline italic">
              Techember Fest &rsquo;25
            </h2>
            <p className="w-[239px] text-center lg:w-[240px] text-[14px] lg:text-[16px] leading[24px] font-normal underline">
              Join us for an unforgettable experience at Techember Fest! Secure
              your spot now.
            </p>

            <div className="flex flex-col lg:flex-row lg:gap-[16px] text-[14px] lg:text-[16px]">
              <p>📍 Event Location</p>
              <p className="hidden lg:block" aria-hidden="true">| |</p>
              <p>March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          {/* Separator Line */}
          <div className="h-[4px] w-[287px] lg:w-[556px] my-6">
            <img src={HorizontalLine} alt="Section divider line" />
          </div>

          {/* Ticket Form */}
          <TicketForm1 />
        </div>
      </section>
    </section>
  );
};

export default Page1;
