
import TicketForm2 from "../utils/TicketForm2";
import { ProgressContainer2 } from "../utils/assets";

const Page2 = () => {
  return (
    <div className="flex flex-col justify-center bg-[#08252B] md:bg-mainBg border-[1px] border-[#0E464F] md:border-borderColor rounded-[32px] md:rounded-[40px] p-[24px] md:p-[48px] gap-[32px] w-[335px] h-[1030px] md:w-[700px] md:h-[1099px] ">
      <div className="flex flex-col md:flex-row gap-[12px] w-[287px] h-[76px] md:w-[604px] md:h-[48px] md:items-center md:justify-between md:pt-2">
        <h1 className="text-[32px] font-normal underline leading-[32px]">
          Attendee Details
        </h1>
        <p className="text-[16px] font-normal leading-[24px] underline">
          Step 2/3
        </p>
        <div className="block md:hidden">
          <img src={ProgressContainer2} alt="" />
        </div>
      </div>

      <div className="mb-2 hidden md:block">
        <img src={ProgressContainer2} alt="" />
      </div>

      <div className="flex flex-col bg-transparent md:bg-ticketCenter md:border-[1px] border-borderColor md:rounded-[32px] md:p-[24px] md:gap-[32px]">

        {/* form ends here */}
        <TicketForm2 />
        {/* end */}
      </div>
    </div>
  );
};

export default Page2;
