import { useEffect, useState } from "react";

export default function ATSScore() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/ats-score")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setScores(data.scores);
        else setScores([]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>ATS Scores</h2>
      {scores.length === 0 ? (
        <p>No resumes uploaded yet.</p>
      ) : (
        <ul>
          {scores.map((s) => (
            <li key={s.resume}>
              <strong>{s.resume}</strong>: {s.score}%
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
