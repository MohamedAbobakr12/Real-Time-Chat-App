import express from "express";

const router = express.Router();

router.get("/signUp", (req, res) => {
    res.send("SignUp EndPoint")
});

router.get("/login", (req, res) => {
    res.send("Login EndPoint")
});

router.get("/logout", (req, res) => {
    res.send("Logout EndPoint")
});

export default router;