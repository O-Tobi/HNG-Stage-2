import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const navigateTo = useNavigate();

  const handleNewTicket = () => {
    localStorage.removeItem("ticketFormData");
    navigateTo("/");
  };

  // Retrieve stored data from localStorage
  const storedData = localStorage.getItem("ticketFormData");
  const ticketFormData = storedData ? JSON.parse(storedData) : {};

  return (
    <div
      role="main"
      className="flex flex-col justify-center items-center bg-[#08252B] lg:bg-mainBg border-[1px] border-[#0E464F] lg:border-borderColor rounded-[32px] lg:rounded-[40px] p-[48px] lg:p-[48px] gap-[32px] w-[335px] h-[1030px] lg:w-[700px] lg:h-[900px]"
    >
      <div
        role="banner"
        className="flex flex-col items-center justify-center gap-[16px] text-center lg:text-left"
      >
        <h1 className="text-[24px] lg:text-[32px]">Your Ticket is Booked</h1>
        <p>
          Check your email for a copy or you can{" "}
          <span className="font-bold">download</span>
        </p>
      </div>

      <section
        role="region"
        aria-labelledby="ticket-details"
        className="flex flex-col gap-8 p-0 w-[300px] h-[600px] justify-center items-center bg-[url(./assets/ticketBg.svg)] bg-cover"
      >
        <div
          className="flex flex-col justify-center items-center p-[14px] w-[260px] h-[446px] rounded-[16px] border-[1px] border-[#24A0B5] bg-[#031E21]/10 gap-[8px]"
          aria-labelledby="ticket-header"
        >
          <h2
            id="ticket-header"
            className="text-[25px] text-center font-bold italic"
          >
            Techember Fest &rsquo;25
          </h2>

          <div className="flex flex-col justify-center items-center gap-[4px] p-[4px] text-[10px]">
            <p>📍 04 Rumens Road, Ikoyi, Lagos</p>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>

          <div className="border-[4px] border-[#24A0B5]/50">
            <img
              src={ticketFormData.profilePhoto}
              alt="Profile Photo"
              className="w-[140px] h-[140px] object-cover"
            />
          </div>

          <div
            className="table p-[4px] bg-[#08343C] border-[1px] border-[#133D44] rounded-[8px]"
            aria-labelledby="ticket-info"
          >
            <h3 id="ticket-info" className="sr-only">
              Ticket Information
            </h3>
            <div className="flex">
              <div className="border-[1px] border-[#12464E] p-[4px] gap-[4px] text-left">
                <p className="text-[10px] opacity-[33%]">Name</p>
                <p className="text-[12px] font-bold">
                  {ticketFormData.name || "N/A"}
                </p>
              </div>

              <div className="border-[1px] border-[#12464E] p-[4px] gap-[4px] text-left">
                <p className="text-[10px] opacity-[33%]">Email</p>
                <p className="text-[12px] font-bold">
                  {ticketFormData.email || "N/A"}
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <div className="grow border-[1px] border-[#12464E] p-[4px] gap-[4px] text-left">
                  <p className="text-[10px] opacity-[33%]">Ticket Type</p>
                  <p className="text-[12px] font-bold">
                    {ticketFormData.ticketType?.toUpperCase() || "N/A"}
                  </p>
                </div>

                <div className="grow border-[1px] border-[#12464E] p-[4px] gap-[4px] text-left">
                  <p className="text-[10px] opacity-[33%]">Number of Tickets</p>
                  <p className="text-[12px] font-bold">
                    {ticketFormData.numberOfTickets || "N/A"}
                  </p>
                </div>
              </div>

              <div className="w-full">
                <p className="text-[10px] opacity-[33%]">Project Details</p>
                <p className="text-[12px] font-bold">
                  {ticketFormData.aboutProject || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[236px] h-[68px] bg-[url(./assets/BarCode.svg)] bg-cover"></div>
      </section>

      <div
        role="toolbar"
        aria-label="Ticket Actions"
        className="flex justify-center items-center flex-col lg:flex-row h-[112px] w-full gap-[20px] lg:gap-[32px] lg:h-[48px]"
      >
        <button
          type="button"
          onClick={handleNewTicket}
          className="order-1 btn w-[287px] lg:w-[270px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-transparent text-[16px] text-[#24A0B5] focus:ring focus:ring-[#24A0B5] focus:outline-none"
        >
          Book Another Ticket
        </button>

        <button
          type="button"
          className="order-2 btn w-[287px] lg:w-[270px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-[#24A0B5] text-[16px] text-white focus:ring focus:ring-[#24A0B5] focus:outline-none"
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default Page3;
