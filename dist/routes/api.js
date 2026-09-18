import { Router } from "express";
import { sendContactEmail, sendQuoteEmail } from "../services/mailer.js";
export const apiRouter = Router();
// Health check endpoint
apiRouter.get("/health", (req, res) => {
    res.json({
        status: "ok",
        service: "REINWERK Cleanroom API",
        timestamp: new Date().toISOString()
    });
});
// Contact Form Submission
apiRouter.post("/contact", async (req, res) => {
    try {
        const { name, email, phone, company, sector, serviceInterest, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all required fields (Name, Email, and Message)."
            });
        }
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email address."
            });
        }
        const payload = {
            name: String(name).trim(),
            email: String(email).trim().toLowerCase(),
            phone: phone ? String(phone).trim() : undefined,
            company: company ? String(company).trim() : undefined,
            sector: sector ? String(sector).trim() : undefined,
            serviceInterest: serviceInterest ? String(serviceInterest).trim() : undefined,
            message: String(message).trim()
        };
        const result = await sendContactEmail(payload);
        if (result.success) {
            return res.json({ success: true, message: result.message });
        }
        else {
            return res.status(500).json({ success: false, message: result.message });
        }
    }
    catch (error) {
        console.error("API /contact error:", error);
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred while sending your message. Please try again or reach us by phone."
        });
    }
});
// Cleanroom Specification & Quote Request Submission
apiRouter.post("/quote", async (req, res) => {
    try {
        const { fullName, company, email, phone, industry, targetStandard, roomLength, roomWidth, roomHeight, wallType, airflowType, airlockCount, timeline, targetBudget, additionalNotes } = req.body;
        if (!fullName || !company || !email || !phone || !industry || !targetStandard) {
            return res.status(400).json({
                success: false,
                message: "Please complete all mandatory project fields."
            });
        }
        const parsedLength = parseFloat(roomLength) || 10;
        const parsedWidth = parseFloat(roomWidth) || 8;
        const parsedHeight = parseFloat(roomHeight) || 3.0;
        const payload = {
            fullName: String(fullName).trim(),
            company: String(company).trim(),
            email: String(email).trim().toLowerCase(),
            phone: String(phone).trim(),
            industry: String(industry).trim(),
            targetStandard: String(targetStandard).trim(),
            roomLength: parsedLength,
            roomWidth: parsedWidth,
            roomHeight: parsedHeight,
            wallType: String(wallType || "Monobloc Flush Panels").trim(),
            airflowType: String(airflowType || "Turbulent Mixing (ISO 7-8)").trim(),
            airlockCount: parseInt(String(airlockCount || "1"), 10),
            timeline: String(timeline || "3-6 Months").trim(),
            targetBudget: targetBudget ? String(targetBudget).trim() : undefined,
            additionalNotes: additionalNotes ? String(additionalNotes).trim() : undefined
        };
        const result = await sendQuoteEmail(payload);
        if (result.success) {
            return res.json({ success: true, message: result.message });
        }
        else {
            return res.status(500).json({ success: false, message: result.message });
        }
    }
    catch (error) {
        console.error("API /quote error:", error);
        return res.status(500).json({
            success: false,
            message: "Unable to process quote request at this time. Please try again."
        });
    }
});
