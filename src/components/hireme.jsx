import Button from "./button";
import { useState } from "react";

const HireMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });
  const [formErr, setFormErr] = useState({});

  // Added 'e' parameter here
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleValidation() {
    let errors = {}; // Initialize as an object
    
    if (!formData.name?.trim()) errors.name = "Name is required";
    if (!formData.email?.trim()) errors.email = "Email is required";
    if (!formData.query?.trim()) errors.query = "Reason is required";

    setFormErr(errors);
    return Object.keys(errors).length === 0;
  }

  function handleFormSubmission(e) {
    // Prevent page reload if using a standard button
    e.preventDefault(); 
    
    if (!handleValidation()) {
      console.log("Validation failed");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // Suggestion: Use [EmailJS](https://www.emailjs.com) to send mail without a backend
  }

  return (
    <div className="max-w-screen h-screen bg-blue-500 flex justify-center items-center">
      <form className="w-fit px-5 py-10 flex flex-col items-center border border-blue-600 rounded-xl bg-white text-black gap-4">
        <h1 className="text-2xl font-bold">Contact Form</h1>

        {/* Display errors with some styling */}
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
          {formErr.query && <p className="text-red-500 text-xs">{formErr.query}</p>}
          <textarea
            name="query"
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
