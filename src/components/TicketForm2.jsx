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
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aboutProject: "",
    profilePhoto: null,
  });
  const myPreset = import.meta.env.VITE_UPLOAD_PRESET;

  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  const handleBackButton = () => {
    navigateTo("/");
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", myPreset);
    formData.append("cloud_name", "dwlnm5sgl");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dwlnm5sgl/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url; // Return the uploaded image URL
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsUploading(true);
    try {
      // Upload image to Cloudinary
      const imageUrl = await uploadImageToCloudinary(values.profilePhoto);

      // Retrieve existing form data from localStorage
      const existingData =
        JSON.parse(localStorage.getItem("ticketFormData")) || {};

      // Merge new data with existing data, replacing the profilePhoto field
      const updatedData = {
        ...existingData,
        name: values.name,
        email: values.email,
        aboutProject: values.aboutProject,
        profilePhoto: imageUrl, // Store Cloudinary URL instead of file object
      };

      // Save updated data to localStorage
      localStorage.setItem("ticketFormData", JSON.stringify(updatedData));

      // Debugging
      console.log("Updated localStorage data:", updatedData);

      // Update preview image and reset form
      setPreviewImage(imageUrl);
      resetForm();
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setSubmitting(false);
      setIsUploading(false);
    }
  };

  // Load stored data on mount
useEffect(() => {
  const storedData = JSON.parse(localStorage.getItem("ticketFormData"));
  if (storedData) {
    setFormData(storedData);
    setPreviewImage(storedData.profilePhoto || null);
  }
}, []);

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={TicketSchema}
      onSubmit={handleSubmit}
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
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Uploaded Preview"
                    className="w-[240px] h-[240px] object-cover rounded-[32px]"
                  />
                ) : (
                  <>
                    <img
                      src={CloudDownload}
                      alt="Upload"
                      className="w-[32px] h-[32px]"
                    />
                    <p className="text-center text-[16px]">
                      Drag & drop or Click to Upload
                    </p>
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
                      setPreviewImage(objectUrl);
                    }
                  }}
                />
              </label>
            </div>
            <ErrorMessage
              name="profilePhoto"
              component="div"
              className="error text-red-500"
            />
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
            <ErrorMessage
              name="name"
              component="div"
              className="error text-red-500"
            />
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
            <ErrorMessage
              name="email"
              component="div"
              className="error text-red-500"
            />
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
            <ErrorMessage
              name="aboutProject"
              component="div"
              className="error text-red-500"
            />
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
              disabled={isSubmitting || isUploading}
              className="order-1 btn w-[287px] md:w-[270px] h-[48px] border-[1px] border-[#24A0B5] rounded-[8px] py-[12px] px-[24px] bg-[#24A0B5] text-[16px] text-white"
            >
              {isUploading ? "Uploading..." : "Get My Free Ticket"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm2;
