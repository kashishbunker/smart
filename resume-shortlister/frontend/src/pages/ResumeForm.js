import React, { useState } from "react";
import axios from "axios";
import "./ResumeForm.css"; // create this CSS file for styles

function ResumeForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
    achievements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/generate-resume",
        formData,
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error generating resume:", error);
    }
  };

  return (
    <div className="resume-container">
      <h2 className="resume-title">Generate Resume</h2>
      <form className="resume-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
        <input type="text" name="github" placeholder="GitHub URL" onChange={handleChange} />
        <textarea name="education" placeholder="Education (e.g., B.Tech in CSE, XYZ University, 2023)" onChange={handleChange} />
        <textarea name="skills" placeholder="Skills (comma separated)" onChange={handleChange} />
        <textarea name="experience" placeholder="Experience (e.g., Software Intern at ABC Corp)" onChange={handleChange} />
        <textarea name="projects" placeholder="Projects (e.g., AI Resume Shortlister, built using NLP)" onChange={handleChange} />
        <textarea name="achievements" placeholder="Achievements (e.g., Hackathon Winner, Certifications)" onChange={handleChange} />

        <button type="submit" className="resume-button">Generate Resume PDF</button>
      </form>
    </div>
  );
}

export default ResumeForm;
