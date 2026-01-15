import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" })); // req.body
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Check if origin matches CLIENT_URL (ignoring trailing slash)
      if (
        origin === ENV.CLIENT_URL ||
        origin === ENV.CLIENT_URL + "/" ||
        origin.replace(/\/$/, "") === ENV.CLIENT_URL.replace(/\/$/, "")
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
console.log("[DEBUG] NODE_ENV:", ENV.NODE_ENV);
if (ENV.NODE_ENV === "production") {
  const frontendPath = join(__dirname, "../frontend/dist");
  const indexPath = join(frontendPath, "index.html");

  console.log("[DEBUG] Frontend Path:", frontendPath);
  console.log("[DEBUG] Index Path:", indexPath);

  if (fs.existsSync(indexPath)) {
    console.log("[DEBUG] Index.html found!");
    app.use(express.static(frontendPath));

    app.get("*", (_, res) => {
      res.sendFile(indexPath);
    });
  } else {
    console.log("[DEBUG] Index.html NOT found! Check build output.");
    app.get("/", (req, res) => {
      res.send("Backend is running, but Frontend build not found.");
    });
  }
}

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});
