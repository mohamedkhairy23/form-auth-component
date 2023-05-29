import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 8888;

connectDB();

const app = express();

// body parser middleware
app.use(express.json());

// urlencoded middleware will allow us to send form data as well
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
