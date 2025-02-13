import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CloudDownload, HorizontalLine } from "./utils/assets";

const TicketSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  aboutProject: Yup.string().required("Project details are required"),
  profilePhoto: Yup.mixed().required("Profile photo is required"),
});

const TicketForm2 = () => {
  const navigateTo = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (profileImage) {
        URL.revokeObjectURL(profileImage);
      }
    };
  }, [profileImage]);

  const handleBackButton = () => {
    navigateTo("/");
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        aboutProject: "",
        profilePhoto: null,
      }}
      validationSchema={TicketSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert(JSON.stringify(values, null, 2)); // save the data to a usestate here/local storage
        setSubmitting(false);
        resetForm();
        setProfileImage(null);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="flex flex-col gap-[14px]">
          {/* Image Upload */}
          <div className="flex flex-col w-[556px] h-[344px] border-[1px] border-[#07373F] bg-[#052228] rounded-[24px] gap-[32px] p-[24px]">
            <p>Upload Profile Photo</p>
            <div className="flex items-center justify-center w-full gap-[10px] bg-[#000000]/20">
              <label
                htmlFor="profilePhoto"
                className="flex flex-col justify-center items-center w-[240px] h-[240px] p-[24px] gap-[16px] rounded-[32px] bg-[#0E464F] cursor-pointer"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Uploaded Preview"
                    className="w-[240px] h-[240px] object-cover rounded-[32px]"
                  />
                ) : (
                  <>
                    <img src={CloudDownload} alt="Upload" className="w-[32px] h-[32px]" />
                    <p className="text-center text-[16px]">Drag & drop or Click to Upload</p>
                  </>
                )}
                <input
                  id="profilePhoto"
                  name="profilePhoto"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) {
                      setFieldValue("profilePhoto", file);
                      const objectUrl = URL.createObjectURL(file);
                      setProfileImage(objectUrl);
                    }
                  }}
                />
              </label>
            </div>
            <ErrorMessage name="profilePhoto" component="div" className="error text-red-500" />
          </div>

          <div className="h-[4px] w-[287px] md:w-[556px] my-6">
            <img src={HorizontalLine} alt="Separator" />
          </div>

          {/* Name Input */}
          <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor="name">Enter your name</label>
            <Field
              id="name"
              name="name"
              type="text"
              className="bg-transparent border-[1px] border-[#07373F] h-[48px] rounded-[12px] p-[12px] gap-[8px]"
            />
            <ErrorMessage name="name" component="div" className="error text-red-500" />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor="email">Enter your email *</label>
            <Field
              id="email"
              name="email"
              type="email"
              className="bg-transparent border-[1px] border-[#07373F] h-[48px] rounded-[12px] p-[12px] gap-[8px]"
            />
            <ErrorMessage name="email" component="div" className="error text-red-500" />
          </div>

          {/* About Project */}
          <div className="flex flex-col gap-[8px] w-full">
            <label htmlFor="aboutProject">About the Project</label>
            <Field
              as="textarea"
              id="aboutProject"
              name="aboutProject"
              className="bg-transparent border-[1px] border-[#07373F] h-[127px] rounded-[12px] p-[12px] gap-[8px]"
            />
            <ErrorMessage name="aboutProject" component="div" className="error text-red-500" />
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center flex-col md:flex-row h-[112px] w-full gap-[20px] md:gap-[32px] md:h-[48px]">
            <button
              type="button"
              onClick={handleBackButton}
              className="order-2 btn w-[287px] md:w-[270px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-transparent text-[16px] text-[#24A0B5]"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="order-1 btn w-[287px] md:w-[270px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-[#24A0B5] text-[16px] text-white"
            >
              Get My Free Ticket
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm2;
