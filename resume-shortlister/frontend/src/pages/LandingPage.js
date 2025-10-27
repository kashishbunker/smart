import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url('/images/landing-bg.png')", // background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        position: "relative",
        color: "white",
      }}
    >
      {/* Overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ zIndex: 2 }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "20px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
          }}
        >
          SMARTHIRE AI: Intelligent <br /> Resume Shortlister
        </h1>
        <p
          style={{
            fontSize: "20px",
            marginBottom: "40px",
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          Smartly rank, compare, and analyze resumes with AI-powered ATS scoring.
        </p>
        <div>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "14px 30px",
              fontSize: "18px",
              borderRadius: "12px",
              border: "none",
              background: "linear-gradient(135deg, #4F46E5, #6366F1)",
              color: "white",
              marginRight: "15px",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            style={{
              padding: "14px 30px",
              fontSize: "18px",
              borderRadius: "12px",
              border: "2px solid white",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
