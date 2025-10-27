import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      if (!allowedTypes.includes(selectedFile.type)) {
        alert("Only PDF or DOC/DOCX files are allowed");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file); // must match backend

    try {
      const res = await fetch("http://localhost:5000/upload-resume", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessage(data.message);
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="mb-2"
      />
      {file && (
        <p className="mb-2">
          Selected file: <strong>{file.name}</strong>
        </p>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
      >
        Upload
      </button>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
      >
        Back to Dashboard
      </button>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
