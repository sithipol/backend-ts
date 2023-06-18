import express from "express";
import user from "./users/router";
import connection from "../config/db.config";
import bodyParser from "body-parser";
import cors from "cors";
import multer, { StorageEngine } from "multer";
import path from "path";

const app = express();
const port = 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    // allowedHeaders: "Content-Type,Authorization",
  })
);

const storage: StorageEngine = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "uploads/");
  },
  filename: function (_req, file, cb) {
    const fileExt = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = file.fieldname + "-" + uniqueSuffix + fileExt;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });
app.use("/uploads", express.static("uploads"));
// Use the router middleware
app.use("/", upload.single("image"), user);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");

  // Start your Express.js server
  app.listen(port, () => {
    console.log("Server is running on port " + port);
  });
});
