import {
  CloudDownload,
  HorizontalLine,
  ProgressContainer2,
} from "../utils/assets";

const Page2 = () => {
  return (
    <div>
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
        {/* add new features here */}

        <div className="flex flex-col w-[556px] h-[344px] border-[1px] border-[#07373F] bg-[#052228] rounded-[24px] gap-[32px] p-[24px]">
          <p>Upload Profile Photo</p>
          <div className="flex items-center justify-center w-full gap-[10px] bg-[#000000]/20">
            <div className="flex flex-col justify-center items-center w-[240px] h-[240px] p-[24px] gap-[16px] rounded-[32px] bg-[#0E464F]">
              <img src={CloudDownload} alt="" className="w-[32px] h-[32px]"/>
              <p className="text-center text-[16px]">Drag & drop or Click to Upload</p>
            </div>
          </div>
        </div>

        <div className="h-[4px] w-[287px]  md:w-[556px] my-6">
          <img src={HorizontalLine} alt="" />
        </div>

        {/* end */}

        <div className="flex justify-center items-center flex-col md:flex-row  h-[112px] w-full   gap-[20px] md:gap-[32px] md:h-[48px]">
          <button className="order-2 btn w-[287px] md:w-[270px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-transparent text-[16px] underline text-[#24A0B5]">
            Cancel
          </button>
          <button className="order-1 btn w-[287px] md:w-[270px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-[#24A0B5] text-[16px] underline text-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2;
