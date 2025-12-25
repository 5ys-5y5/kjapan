import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 루트 경로와 index.html 모두 API 키 교체
const serveIndexWithApiKey = (req, res) => {
  const html = fs.readFileSync(
    path.join(process.cwd(), "public/index.html"),
    "utf-8"
  );

  const rendered = html.replace(
    "__GOOGLE_MAPS_API_KEY__",
    process.env.GOOGLE_MAPS_API_KEY
  );

  res.send(rendered);
};

app.get("/", serveIndexWithApiKey);
app.get("/index.html", serveIndexWithApiKey);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
