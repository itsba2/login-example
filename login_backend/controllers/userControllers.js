import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
    try {
        // Check if username already exists
        const existingUsername = await User.findOne({
            username: req.body.username,
        });
        existingUsername &&
            res.status(400).json({ message: "This username already exists." });
        // Hash password
        const saltRounds = 15;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // New user object to save in DB
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
        });
        // Save user
        await newUser.save();
        res.status(201).json({
            username: newUser.username,
            message: "Registration successful.",
        });
    } catch (error) {
        res.status(409);
    }
};

export const loginUser = async (req, res) => {
    try {
        // Check if user exists
        const validUser = await User.findOne({ username: req.body.username });
        !validUser && res.status(400).json("Invalid username or password");
        // Check password
        const validPassword = await bcrypt.compare(
            req.body.password,
            validUser.password
        );
        !validPassword && res.status(400).json("Invalid username or password");

        console.log("session", req.session);

        req.session.user = req.body.username;
        // await req.session.save();

        console.log(req.session)
        // session = req.session;
        // session.userid = req.body.username;

        res.status(200).json({
            _id: validUser._id,
            username: validUser.username,
            message: "Login successful.",
        });
    } catch (error) {   
        res.status(500);
    }
};

export const logoutUser = (req, res) => {
    try {
        req.session.destroy();
        res.status(200).json("Logged out.");
    } catch (error) {
        res.status(500);
    }
};
