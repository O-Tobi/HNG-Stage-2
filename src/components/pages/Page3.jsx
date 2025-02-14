//import { TicketBg } from "../utils/assets";

const Page3 = () => {
    // Retrieve stored data from localStorage
    //const storedData = localStorage.getItem("ticketFormData");
  
    // Parse the JSON data or provide a default empty object if null
    //const ticketFormData = storedData ? JSON.parse(storedData) : {};
  
    return (
      <div className="flex flex-col justify-center items-center bg-[#08252B] md:bg-mainBg border-[1px] border-[#0E464F] md:border-borderColor rounded-[32px] md:rounded-[40px] p-[48px] md:p-[48px] gap-[32px] w-[335px] h-[1030px] lg:w-[700px] lg:h-[900px] ">
        <div className="flex flex-col items-center justify-center gap-[16px] ">
          <h1 className="text-[32px]">Your Ticket is Booked</h1>
          <p>Check your email for a copy or you can <span className="font-bold">download</span></p>
        </div>

        <div className="flex flex-col gap-8 p-0  w-[300px] h-[600px] justify-center items-center bg-[url(./assets/ticketBg.svg)] bg-cover">
          <div className="flex justify-center items-center p-[14px] w-[260px] h-[446px] rounded-[16px] border-[1px] border-[#24A0B5] bg-[#031E21]/10"></div>
          <div className="w-[236px] h-[68px] bg-[url(./assets/BarCode.svg)] bg-cover"></div>
        </div>
        
      </div>
    );
  };
  
  export default Page3;
  

  // <div>
  //         <p><strong>Name:</strong> {ticketFormData.name || "N/A"}</p>
  //         <p><strong>Profile Photo:</strong></p>
  //         {ticketFormData.profilePhoto ? (
  //           <img
  //             src={ticketFormData.profilePhoto}
  //             alt="Profile"
  //             className="w-24 h-24 rounded-full"
  //           />
  //         ) : (
  //           <p>No profile photo available</p>
  //         )}
  //         <p><strong>Ticket Type:</strong> {ticketFormData.ticketType || "N/A"}</p>
  //         <p><strong>Number of Tickets:</strong> {ticketFormData.numberOfTickets || "N/A"}</p>
  //       </div>