"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
// Routes
const auth_1 = require("./routes/auth");
const user_1 = require("./routes/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.post("/auth/register", register)
app.use("/auth", auth_1.authRoutes);
app.use("/users", user_1.userRoutes);
app.listen(8000, () => console.log("Server is Running"));
