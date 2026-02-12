import Button from "./button";
import { useState , useRef} from "react";
import emailjs from '@emailjs/browser';
import { YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, YOUR_TEMPLATE_ID } from "../constants";

const HireMe = () => {
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
    <div className="max-w-screen h-screen bg-blue-500 flex justify-center items-center">
      <form ref={formRef} className="w-fit px-5 py-10 flex flex-col items-center border border-blue-600 rounded-xl bg-white text-black gap-4">
        <h1 className="text-2xl font-bold">Contact Form</h1>

        
        <div className="w-80">
          {formErr.name && <p className="text-red-500 text-xs">{formErr.name}</p>}
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="outline-none px-2 py-2 w-full border border-blue-700 rounded-sm"
          />
        </div>

        <div className="w-80">
          {formErr.email && <p className="text-red-500 text-xs">{formErr.email}</p>}
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            className="outline-none px-2 py-2 w-full border border-blue-700 rounded-sm"
          />
        </div>

        <div className="w-80">
          {formErr.message && <p className="text-red-500 text-xs">{formErr.message}</p>}
          <textarea
            name="message"
            placeholder="Write reasons to contact me..."
            onChange={handleChange}
            className="outline-none px-2 py-2 w-full border border-blue-700 rounded-sm"
            rows="5"
          ></textarea>
        </div>

        <Button onClick={handleFormSubmission}>Submit</Button>
      </form>
    </div>
  );
};

export default HireMe;
