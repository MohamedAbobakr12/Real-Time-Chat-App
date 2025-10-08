import express from "express";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";


const app = express();
const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json()); // req.body


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
    connectDB();
    }
);
