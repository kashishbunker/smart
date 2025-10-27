import { useEffect, useState } from "react";

export default function Compare() {
  const [comparison, setComparison] = useState([]);

  useEffect(() => {
    const fetchCompare = async () => {
      try {
        const res = await fetch("http://localhost:5000/compare");
        const data = await res.json();
        if (data.success) setComparison(data.comparison);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCompare();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Resume Comparison & Ranking</h2>
      {comparison.length === 0 && <p>No comparison available. Upload JD & resumes first.</p>}
      {comparison.length > 0 && (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Resume</th>
              <th className="border px-4 py-2">Score (%)</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((c) => (
              <tr key={c.resume}>
                <td className="border px-4 py-2">{c.resume}</td>
                <td className="border px-4 py-2">{c.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
