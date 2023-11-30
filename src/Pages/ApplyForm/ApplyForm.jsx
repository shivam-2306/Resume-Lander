import React, { useState } from "react";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './ApplyForm.scss'
const ApplyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institution: "",
    skills: "",
    resume: null, // Added for the file input
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("institution", formData.institution);
    form.append("skills", formData.skills);
    form.append("resume", formData.resume); // Append the file

    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      institution: "",
      skills: "",
      resume: null,
    });

    // try {
    //   const res = await axios.post('api-call', form);
    //   if (res.status === 200) {
    //     console.log('Form sent');
    //   } else {
    //     console.log('Error');
    //   }
    // } catch (err) {
    //   console.error("Error", err);
    // }
    navigate('/careerpage');
  };

  const handleChange = (e) => {
    // Update the state based on the input type
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="container">
      <h1>Apply for a Job</h1>
      <br />
      <div className="formcontainer">
        <form onSubmit={handleSubmit} className="form">
          <div className="inputfield">
            <label htmlFor="fullName" className="form-label">
              Full Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              value={formData.fullName}
            />
          </div>
          <div className="inputfield">
            <label htmlFor="email" className="form-label">
              Email ID:
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="inputfield">
            <label htmlFor="institution" className="form-label">
              Institution:
            </label>
            <input
              type="text"
              className="form-control"
              id="institution"
              name="institution"
              onChange={handleChange}
              value={formData.institution}
            />
          </div>
          <div className="inputfield">
            <label htmlFor="skills" className="form-label">
              Skills & Declarations
            </label>
            <textarea
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              onChange={handleChange}
              value={formData.skills}
            />
          </div>
          <div className="inputfield">
            <label htmlFor="resume" className="form-label">
              Resume or CV:
            </label>
            <input
              type="file"
              accept=".pdf"
              className="form-control"
              id="resume"
              name="resume"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
