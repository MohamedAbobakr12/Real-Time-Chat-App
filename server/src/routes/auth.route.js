import express from "express";
import { signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signUp", signUp);

router.post("/login", (req, res) => {
    res.send("Login EndPoint")
});

router.post("/logout", (req, res) => {
    res.send("Logout EndPoint")
});

export default router;