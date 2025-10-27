import express from "express";
import cors from "cors";
import PDFDocument from "pdfkit";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Resume generator route
app.post("/generate-resume", (req, res) => {
  const data = req.body;

  // Create PDF
  const doc = new PDFDocument();
  let filename = `${data.fullName || "resume"}.pdf`;
  filename = encodeURIComponent(filename);

  // Set response headers
  res.setHeader("Content-disposition", `attachment; filename="${filename}"`);
  res.setHeader("Content-type", "application/pdf");

  // Pipe PDF to response
  doc.pipe(res);

  // Title
  doc.fontSize(22).fillColor("#2e3a87").text(data.fullName, { align: "center" });
  doc.moveDown(0.5);
  doc.fontSize(12).fillColor("black").text(`${data.email} | ${data.phone}`, { align: "center" });
  if (data.linkedin) doc.text(`LinkedIn: ${data.linkedin}`, { align: "center" });
  if (data.github) doc.text(`GitHub: ${data.github}`, { align: "center" });
  doc.moveDown(1.5);

  // Sections
  const addSection = (title, content) => {
    if (content && content.trim() !== "") {
      doc.fontSize(16).fillColor("#2e3a87").text(title, { underline: true });
      doc.moveDown(0.3);
      doc.fontSize(12).fillColor("black").text(content, { align: "left" });
      doc.moveDown(1);
    }
  };

  addSection("Skills", data.skills);
  addSection("Education", data.education);
  addSection("Experience", data.experience);
  addSection("Projects", data.projects);
  addSection("Achievements", data.achievements);

  // End document
  doc.end();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
