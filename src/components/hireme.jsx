import Button from "./button";
import { useState , useRef, act} from "react";
import emailjs from '@emailjs/browser';
import { YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID } from "../constants";

const HireMe = ({ 
  active = false,
  hadleFormClousure
}) => {
  const initialFormState = { name: "", email: "", message: "" }
  const [formData, setFormData] = useState(initialFormState);
  const [formErr, setFormErr] = useState({});
  const formRef = useRef();

 
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleValidation() {
    let errors = {}; 
    
    if (!formData.name?.trim()) errors.name = "Name is required";
    if (!formData.email?.trim()) errors.email = "Email is required";
    if (!formData.message?.trim()) errors.message = "Reason is required";

    setFormErr(errors);
    return Object.keys(errors).length === 0;
  }

  function handleFormSubmission(e) {
   
    e.preventDefault(); 
    
    if (!handleValidation()) {

      return;
    }
    emailjs
      .sendForm(
        `${YOUR_SERVICE_ID}`,
        `${YOUR_TEMPLATE_ID}`,
        formRef.current,
        `${YOUR_PUBLIC_KEY}`
      )
      .then(
        (result) => {
         
          alert("Message sent successfully!");
        },
        (error) => {

          alert("Failed to send message.");
        }
      );

    formRef.current?.reset();

  }

  return (
<div className="w-full bg-purple-200 px-4 sm:px-8 md:px-16 lg:px-20 flex justify-center md:justify-start pb-10 md:pb-20">
  <form
    ref={formRef}
    className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-start text-black gap-4 md:gap-5"
  >

    {/* Heading */}
    <div className="w-full">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900">
        Contact Me
      </h3>

      <p className="text-sm sm:text-base text-purple-700 opacity-70 font-serif mt-2">
        If you require full-stack development services or would like to discuss job opportunities,
        please provide your information below.
      </p>
    </div>

    {/* Name + Email */}
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6">
      
      <div className="w-full">
        {formErr.name && <p className="text-red-500 text-xs">{formErr.name}</p>}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          className="outline-none px-3 py-2 w-full border border-white rounded-md bg-white"
        />
      </div>

      <div className="w-full">
        {formErr.email && <p className="text-red-500 text-xs">{formErr.email}</p>}
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={handleChange}
          className="outline-none px-3 py-2 w-full border border-white bg-white rounded-md"
        />
      </div>

    </div>

    {/* Message */}
    <div className="w-full">
      {formErr.message && <p className="text-red-500 text-xs">{formErr.message}</p>}
      <textarea
        name="message"
        placeholder="Type message"
        onChange={handleChange}
        className="outline-none px-3 py-2 w-full border border-white bg-white rounded-md"
        rows="5"
      ></textarea>
    </div>

    {/* Button */}
    <div className="w-full flex justify-center sm:justify-start">
      <Button onClick={handleFormSubmission}>
        Submit
      </Button>
    </div>

  </form>
</div>
  );
};

export default HireMe;
