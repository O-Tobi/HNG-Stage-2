import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ArrowDown } from "./assets";
import { useNavigate } from "react-router-dom";

const TicketForm1 = () => {
  const navigateTo = useNavigate();
  const initialValues = {
    ticketType: "",
    numberOfTickets: "1",
  };

  const validationSchema = Yup.object({
    ticketType: Yup.string().required("Ticket type is required"),
    numberOfTickets: Yup.string().required("Number of tickets is required"),
  });

  const handleNext = () => {
    navigateTo("step-2");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        localStorage.setItem("ticketFormData", JSON.stringify(values));
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[16px] underline">Select Ticket Type:</p>

              <div className="flex rounded-[24px] md:rounded-[16px] border-[1px] border-[#07373F] md:border-borderColor p-[16px] gap-[16px] bg-[#052228] w-[287px] h-[275px] md:h-[186px] md:w-[556px]">
                <div className="flex flex-wrap justify-between items-center gap-[24px]">
                  {[
                    {
                      id: "regular",
                      label: "REGULAR ACCESS",
                      price: "Free",
                      left: "20 left!",
                    },
                    {
                      id: "vip",
                      label: "VIP ACCESS",
                      price: "$50",
                      left: "20 left!",
                    },
                    {
                      id: "vvip",
                      label: "VVIP ACCESS",
                      price: "$150",
                      left: "20 left!",
                    },
                  ].map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex justify-between underline rounded-[12px] gap-[8px] p-[8px] border-[1px] border-[#07373F] md:border-borderColor  w-[242px] h-[65px]"
                    >
                      <label className="flex justify-between w-full">
                        <div>
                          <p>{ticket.label}</p>
                          <p>{ticket.left}</p>
                        </div>
                        <div className="btn bg-[#0E464F] border-[1px] text-[20px] text-right text-white leading-[22px] border-borderColor gap-[8px] py-[8px] pl-[30px]">
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

            <div className="py-6">
              <p className="text-[16px] underline">Number of Tickets</p>
              <details className="dropdown w-[287px] md:w-full">
                <summary className="btn flex justify-between m-1 w-[287px] md:w-full bg-transparent border-[1px] border-borderColor hover:bg-transparent text-white">
                  <p>{values.numberOfTickets}</p>
                  <img src={ArrowDown} alt="" className="w-3 h-3" />
                </summary>
                <ul className="menu bg-background dropdown-content rounded-box z-[1] w-full p-2 shadow">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num}>
                      <a
                        onClick={() =>
                          setFieldValue("numberOfTickets", num.toString())
                        }
                      >
                        {num}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
              <ErrorMessage
                name="numberOfTickets"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex justify-center items-center flex-col md:flex-row w-[287px] h-[112px] md:w-full md:rounded-[24px] md:border-[1px] border-borderColor px-[48px] gap-[20px] md:gap-[32px] md:h-[48px] bg-ticketCenter">
              <button
                type="button"
                className="order-2 btn w-[287px] md:w-[214px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-transparent text-[16px] underline text-[#24A0B5]"
              >
                Cancel
              </button>
              <button
                onClick={handleNext}
                type="submit"
                className="order-1 btn w-[287px] md:w-[214px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-[#24A0B5] text-[16px] underline text-white"
              >
                Next
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm1;
