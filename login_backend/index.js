// package imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
// route imports
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
// constants
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const SECRET = process.env.SECRET;
const NODE_ENV = process.env.NODE_ENV;

// express
const api = express();
// express middlewares
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

const corsConfig = {
    origin: "http://localhost:3000",
    credentials: true,
};
api.use(cors(corsConfig));

// connection
mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log(`MongoDB connected to ${MONGO_URL}`);
        api.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
    })
    .catch((error) => console.error(error.message));

const sessionTimeout = 60 * 1000; // in miliseconds
const sessionConfig = {
    store: new MongoStore({
        mongoUrl: MONGO_URL,
    }),
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: sessionTimeout,
        secure: NODE_ENV == "prod",
    },
};

// session middlewares
api.use(session(sessionConfig));
api.use(cookieParser());

// routes
api.use("/user", userRoutes);
