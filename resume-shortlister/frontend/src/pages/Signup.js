import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && password) {
      alert("Signup success (dummy)!");
      navigate("/dashboard");
    } else {
      alert("Enter email & password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4F46E5, #6366F1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px", color: "#4F46E5" }}>
          Signup
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "15px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #4F46E5, #6366F1)",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Signup
        </button>
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#4F46E5", cursor: "pointer", fontWeight: "600" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
