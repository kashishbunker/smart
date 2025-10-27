// src/pages/Dashboard.js
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
        SMARTHIRE AI Dashboard
      </h1>
      <p className="text-lg text-gray-100 mb-12 text-center max-w-2xl">
        Welcome to <span className="font-semibold">SMARTHIRE AI</span> – Manage resumes, 
        job descriptions, and get ATS scores. Generate and compare resumes 
        intelligently with AI assistance.
      </p>

      {/* Buttons */}
      <div className="grid grid-cols-3 gap-8 max-w-4xl w-full">
        <Link to="/upload-resume">
          <button className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition">
            📄 Upload Resume
          </button>
        </Link>

        <Link to="/upload-jd">
          <button className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition">
            📝 Upload Job Description
          </button>
        </Link>

        <Link to="/ats-score">
          <button className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition">
            📊 ATS Score
          </button>
        </Link>

        <Link to="/compare">
          <button className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition">
            ⚖️ Compare Resumes
          </button>
        </Link>

        <Link to="/about">
          <button className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition">
            ℹ️ About
          </button>
        </Link>

        <Link to="/generate-resume">
          <button className="w-full px-6 py-4 rounded-xl bg-white text-gray-800 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition">
            🖨️ Generate Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
