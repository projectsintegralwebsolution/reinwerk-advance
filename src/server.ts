import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import { pagesRouter } from "./routes/pages.js";
import { apiRouter } from "./routes/api.js";
import { servicesData } from "./data/services.js";
import { industriesData } from "./data/industries.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Determine root directory (handles both tsx execution and compiled dist execution)
const rootDir = path.resolve(__dirname, "..");

// Set View Engine
app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

// Static Assets
app.use(express.static(path.join(rootDir, "public")));

// Mount Routes
app.use("/", pagesRouter);
app.use("/api", apiRouter);

// 404 Not Found Handler
app.use((req: Request, res: Response) => {
  res.status(404).render("pages/404", {
    activeRoute: "404",
    metaTitle: "404 - Page Not Found | REINWERK",
    metaDescription: "The page you are looking for does not exist or has been moved.",
    servicesList: servicesData,
    industriesList: industriesData,
    currentYear: new Date().getFullYear()
  });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("[REINWERK Server Error]:", err);
  res.status(500).render("pages/404", {
    activeRoute: "500",
    metaTitle: "500 - Server Error | REINWERK",
    metaDescription: "An internal server error occurred.",
    servicesList: servicesData,
    industriesList: industriesData,
    currentYear: new Date().getFullYear()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`  REINWERK Cleanroom & Plant Engineering Web App `);
  console.log(`  Live URL: http://localhost:${PORT}             `);
  console.log(`  Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`=================================================`);
});
