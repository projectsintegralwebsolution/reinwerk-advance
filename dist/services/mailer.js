import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
// Create email transporter
function createTransporter() {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const secure = process.env.SMTP_SECURE === "true";
    // Check if real SMTP credentials are provided and not dummy placeholders
    const hasValidConfig = host && host !== "smtp.example.com" && user && pass && pass !== "your_smtp_password_here";
    if (hasValidConfig) {
        return nodemailer.createTransport({
            host,
            port,
            secure,
            auth: { user, pass }
        });
    }
    // Graceful fallback logger for local development / testing
    return null;
}
const transporter = createTransporter();
/**
 * Send Contact Inquiry Email
 */
export async function sendContactEmail(data) {
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@reinwerk-cleanroom.com";
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
        .header { background: #0b3b60; padding: 24px; text-align: center; border-bottom: 4px solid #ba1c24; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
        .header p { color: #94a3b8; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; }
        .content { padding: 28px; }
        .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-bottom: 16px; }
        .field-group { margin-bottom: 16px; }
        .label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; margin-bottom: 4px; }
        .value { font-size: 15px; color: #0f172a; font-weight: 500; }
        .message-box { background: #f1f5f9; padding: 16px; border-radius: 6px; border-left: 3px solid #0b3b60; font-size: 14px; line-height: 1.6; }
        .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>REINWERK</h1>
          <p>Reinraum- und Anlagentechnik</p>
        </div>
        <div class="content">
          <span class="badge">New Website Inquiry</span>
          <h2 style="margin: 0 0 20px; font-size: 18px; color: #0b3b60;">Inquiry from ${data.name}</h2>
          
          <div class="field-group">
            <div class="label">Full Name</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field-group">
            <div class="label">Email Address</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          ${data.phone ? `
          <div class="field-group">
            <div class="label">Phone Number</div>
            <div class="value">${data.phone}</div>
          </div>` : ""}
          ${data.company ? `
          <div class="field-group">
            <div class="label">Company / Organization</div>
            <div class="value">${data.company}</div>
          </div>` : ""}
          ${data.sector ? `
          <div class="field-group">
            <div class="label">Industry Sector</div>
            <div class="value">${data.sector}</div>
          </div>` : ""}
          ${data.serviceInterest ? `
          <div class="field-group">
            <div class="label">Area of Interest</div>
            <div class="value">${data.serviceInterest}</div>
          </div>` : ""}
          <div class="field-group">
            <div class="label">Message / Project Requirements</div>
            <div class="message-box">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
        <div class="footer">
          Received via REINWERK Cleanroom Official Web Portal • ${new Date().toUTCString()}
        </div>
      </div>
    </body>
    </html>
  `;
    if (transporter) {
        try {
            await transporter.sendMail({
                from: `"REINWERK Cleanroom Web" <${process.env.SMTP_USER}>`,
                to: receiverEmail,
                replyTo: data.email,
                subject: `[REINWERK Inquiry] New Contact from ${data.name} (${data.company || "General"})`,
                html: htmlContent
            });
            return { success: true, message: "Your message has been sent successfully. A cleanroom engineer will review your request within 24 hours." };
        }
        catch (err) {
            console.error("[Nodemailer Error]:", err);
            return { success: false, message: "Failed to send email due to mail server error. Please try again or call us directly." };
        }
    }
    else {
        // Development console logging
        console.log("=================================================");
        console.log(" [DEV MODE] CONTACT EMAIL RECEIVED");
        console.log(` To: ${receiverEmail}`);
        console.log(` From: ${data.name} <${data.email}>`);
        console.log(` Company: ${data.company || "N/A"} | Sector: ${data.sector || "General"}`);
        console.log(` Message:\n${data.message}`);
        console.log("=================================================");
        return {
            success: true,
            message: "Your inquiry has been received successfully. A REINWERK engineer will get in touch shortly."
        };
    }
}
/**
 * Send Cleanroom Quote Request Email
 */
export async function sendQuoteEmail(data) {
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@reinwerk-cleanroom.com";
    const floorArea = (data.roomLength * data.roomWidth).toFixed(1);
    const roomVolume = (data.roomLength * data.roomWidth * data.roomHeight).toFixed(1);
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
        .container { max-width: 650px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
        .header { background: #0b3b60; padding: 24px; text-align: center; border-bottom: 4px solid #ba1c24; }
        .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
        .header p { color: #94a3b8; margin: 4px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; }
        .content { padding: 28px; }
        .badge { display: inline-block; background: #fef2f2; color: #ba1c24; border: 1px solid #fecaca; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 700; margin-bottom: 16px; }
        .grid-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        .grid-table th { background: #f1f5f9; text-align: left; padding: 10px 14px; font-size: 12px; text-transform: uppercase; color: #475569; border-bottom: 2px solid #cbd5e1; }
        .grid-table td { padding: 10px 14px; font-size: 14px; border-bottom: 1px solid #e2e8f0; color: #0f172a; }
        .highlight { font-weight: 700; color: #0b3b60; }
        .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>REINWERK</h1>
          <p>Cleanroom Specification & Quotation Request</p>
        </div>
        <div class="content">
          <span class="badge">URGENT: RFQ Specification</span>
          <h2 style="margin: 0 0 16px; font-size: 18px; color: #0b3b60;">Project Request from ${data.company}</h2>

          <h3 style="font-size: 14px; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">1. Client Details</h3>
          <table class="grid-table">
            <tr><td width="35%"><strong>Contact Name:</strong></td><td>${data.fullName}</td></tr>
            <tr><td><strong>Company:</strong></td><td>${data.company}</td></tr>
            <tr><td><strong>Email:</strong></td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>
            <tr><td><strong>Industry Sector:</strong></td><td class="highlight">${data.industry}</td></tr>
          </table>

          <h3 style="font-size: 14px; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">2. Cleanroom Technical Parameters</h3>
          <table class="grid-table">
            <tr><td width="35%"><strong>Target Cleanliness:</strong></td><td class="highlight" style="color:#ba1c24;">${data.targetStandard}</td></tr>
            <tr><td><strong>Room Dimensions:</strong></td><td>${data.roomLength} m (L) × ${data.roomWidth} m (W) × ${data.roomHeight} m (H)</td></tr>
            <tr><td><strong>Calculated Floor Area:</strong></td><td class="highlight">${floorArea} m²</td></tr>
            <tr><td><strong>Calculated Room Volume:</strong></td><td>${roomVolume} m³</td></tr>
            <tr><td><strong>Wall Partition Type:</strong></td><td>${data.wallType}</td></tr>
            <tr><td><strong>Airflow Pattern:</strong></td><td>${data.airflowType}</td></tr>
            <tr><td><strong>Personnel/Material Airlocks:</strong></td><td>${data.airlockCount} Airlock Unit(s)</td></tr>
            <tr><td><strong>Target Implementation:</strong></td><td>${data.timeline}</td></tr>
            ${data.targetBudget ? `<tr><td><strong>Target Budget Range:</strong></td><td>${data.targetBudget}</td></tr>` : ""}
          </table>

          ${data.additionalNotes ? `
          <h3 style="font-size: 14px; text-transform: uppercase; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">3. Engineering Notes</h3>
          <div style="background: #f8fafc; padding: 14px; border-radius: 6px; font-size: 14px; line-height: 1.6; border: 1px solid #e2e8f0;">
            ${data.additionalNotes.replace(/\n/g, "<br>")}
          </div>` : ""}
        </div>
        <div class="footer">
          Submitted via REINWERK Cleanroom Estimator • ${new Date().toUTCString()}
        </div>
      </div>
    </body>
    </html>
  `;
    if (transporter) {
        try {
            await transporter.sendMail({
                from: `"REINWERK Cleanroom Web" <${process.env.SMTP_USER}>`,
                to: receiverEmail,
                replyTo: data.email,
                subject: `[REINWERK RFQ] Quote Request: ${data.company} (${floorArea} m², ${data.targetStandard})`,
                html: htmlContent
            });
            return { success: true, message: "Your cleanroom specification has been submitted. Our engineering team will review the parameters and prepare a preliminary design proposal." };
        }
        catch (err) {
            console.error("[Nodemailer RFQ Error]:", err);
            return { success: false, message: "There was a mail server communication issue. Your specification has been saved; please contact us directly if urgent." };
        }
    }
    else {
        console.log("=================================================");
        console.log(" [DEV MODE] CLEANROOM RFQ RECEIVED");
        console.log(` Client: ${data.fullName} (${data.company})`);
        console.log(` Standard: ${data.targetStandard} | Area: ${floorArea} m² (${roomVolume} m³)`);
        console.log(` Dimensions: ${data.roomLength}m x ${data.roomWidth}m x ${data.roomHeight}m`);
        console.log(` Wall: ${data.wallType} | Airflow: ${data.airflowType} | Airlocks: ${data.airlockCount}`);
        console.log(` Timeline: ${data.timeline} | Budget: ${data.targetBudget || "N/A"}`);
        console.log("=================================================");
        return {
            success: true,
            message: "Cleanroom specification received successfully. Our engineering department will analyze your criteria and contact you within 24 hours."
        };
    }
}
