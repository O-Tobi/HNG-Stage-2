import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowDown, RadioButtons } from "./assets";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const TicketForm1 = () => {
  const navigateTo = useNavigate();
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    ticketType: "",
    numberOfTickets: "1",
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("ticketFormData"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const validationSchema = Yup.object({
    ticketType: Yup.string().required("Ticket type is required"),
    numberOfTickets: Yup.string().required("Number of tickets is required"),
  });

  const handleNext = () => {
    navigateTo("step-2");
  };

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        localStorage.setItem("ticketFormData", JSON.stringify(values));
        setSubmitting(false);
        handleNext();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {/* Ticket Type Selection */}
          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px] underline">Select Ticket Type:</p>

            <div className="flex rounded-[24px] border-[1px] border-[#07373F] p-[16px] bg-[#052228] w-[287px] lg:w-[556px]">
              <div className="flex flex-wrap gap-[24px]">
                {RadioButtons.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`flex justify-between rounded-[12px] gap-[8px] p-[8px] border-[1px] border-[#07373F] w-[242px] h-[65px] cursor-pointer 
                    ${
                      values.ticketType === ticket.id
                        ? "bg-[#197686] text-white"
                        : ""
                    }`}
                    tabIndex={0}
                    role="radio"
                    aria-checked={values.ticketType === ticket.id}
                    onClick={() => setFieldValue("ticketType", ticket.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setFieldValue("ticketType", ticket.id);
                      }
                    }}
                  >
                    <label className="flex justify-between w-full cursor-pointer">
                      <div>
                        <p>{ticket.label}</p>
                        <p>{ticket.left}</p>
                      </div>
                      <div className="btn bg-[#0E464F] border-[1px] text-[20px] text-white">
                        {ticket.price}
                      </div>
                      <Field
                        type="radio"
                        name="ticketType"
                        value={ticket.id}
                        className="hidden"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <ErrorMessage
              name="ticketType"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Number of Tickets Dropdown */}
          <div className="py-6">
            <p className="text-[16px] underline">Number of Tickets</p>
            <div
              className="dropdown w-[287px] lg:w-full"
              role="listbox"
              tabIndex={0}
              ref={dropdownRef}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)} // Delay closing to ensure value is set
            >
              <summary
                className="btn flex justify-between bg-transparent border-[1px] border-borderColor text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIsDropdownOpen(!isDropdownOpen);
                  }
                }}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
              >
                <p>{values.numberOfTickets}</p>
                <img
                  src={ArrowDown}
                  alt="Toggle dropdown"
                  className="w-3 h-3"
                />
              </summary>
              {isDropdownOpen && (
                <ul
                  className="menu bg-background dropdown-content rounded-box z-[1] w-full p-2 shadow"
                  role="listbox"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num} role="option" tabIndex={0}>
                      <a
                        onClick={() => {
                          setFieldValue("numberOfTickets", num.toString());
                          setTimeout(() => setIsDropdownOpen(false), 100); // Delay closing to ensure value is set
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            setFieldValue("numberOfTickets", num.toString());
                            setTimeout(() => setIsDropdownOpen(false), 100); // Delay closing to ensure value is set
                          }
                        }}
                      >
                        {num}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ErrorMessage
              name="numberOfTickets"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* Form Buttons */}
          <div className="flex justify-center items-center flex-col lg:flex-row w-[287px] h-[112px] lg:h-[48px] lg:w-full px-[48px] gap-[20px] lg:gap-[32px] bg-ticketCenter border-[1px] border-borderColor rounded-[24px]">
            <button
              type="button"
              className="order-1 btn w-[287px] lg:w-[214px] h-[48px] border-[1px] border-[#24A0B5] bg-transparent text-[16px] underline text-[#24A0B5]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="order-2 btn w-[287px] lg:w-[214px] h-[48px] border-[1px] border-[#24A0B5] bg-[#24A0B5] text-[16px] underline text-white"
            >
              Next
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm1;
