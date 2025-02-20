import { Router } from "express";
import { chatbot } from "../controllers/chatbot.js";
const router = Router();
router.post("/answer",chatbot);

export default router