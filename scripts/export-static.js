import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outDir = path.join(projectRoot, "build", "static");

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy public assets directly into outDir root
copyDir(path.join(projectRoot, "public"), outDir);
console.log("Copied public/ assets to build/static/");

const pages = [
  { url: "/", out: "index.html" },
  { url: "/about", out: "about/index.html", alias: "about.html" },
  { url: "/services", out: "services/index.html", alias: "services.html" },
  { url: "/services/modular-cleanrooms", out: "services/modular-cleanrooms/index.html" },
  { url: "/services/hvac-air-handling", out: "services/hvac-air-handling/index.html" },
  { url: "/services/cleanroom-equipment", out: "services/cleanroom-equipment/index.html" },
  { url: "/services/validation-maintenance", out: "services/validation-maintenance/index.html" },
  { url: "/industries", out: "industries/index.html", alias: "industries.html" },
  { url: "/why-choose-us", out: "why-choose-us/index.html", alias: "why-choose-us.html" },
  { url: "/projects", out: "projects/index.html", alias: "projects.html" },
  { url: "/process", out: "process/index.html", alias: "process.html" },
  { url: "/quote", out: "quote/index.html", alias: "quote.html" },
  { url: "/contact", out: "contact/index.html", alias: "contact.html" },
  { url: "/terms", out: "terms/index.html", alias: "terms.html" },
  { url: "/privacy", out: "privacy/index.html", alias: "privacy.html" },
  { url: "/disclaimer", out: "disclaimer/index.html", alias: "disclaimer.html" },
  { url: "/404", out: "404.html" }
];

async function exportPages() {
  for (const p of pages) {
    try {
      const res = await fetch("http://localhost:3000" + p.url);
      const html = await res.text();
      const targetFile = path.join(outDir, p.out);
      fs.mkdirSync(path.dirname(targetFile), { recursive: true });
      fs.writeFileSync(targetFile, html, "utf-8");
      console.log("Exported:", p.out);
      if (p.alias) {
        fs.writeFileSync(path.join(outDir, p.alias), html, "utf-8");
      }
    } catch (err) {
      console.error("Failed to export " + p.url, err.message);
    }
  }
}

await exportPages();

// Setup PHP Form Handlers
const apiDir = path.join(outDir, "api");
fs.mkdirSync(apiDir, { recursive: true });

const contactPhp = `<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit(0);
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true) ?: $_POST;

$name = htmlspecialchars($data["name"] ?? "");
$email = filter_var($data["email"] ?? "", FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data["phone"] ?? "");
$company = htmlspecialchars($data["company"] ?? "");
$sector = htmlspecialchars($data["sector"] ?? "");
$serviceInterest = htmlspecialchars($data["serviceInterest"] ?? "");
$message = htmlspecialchars($data["message"] ?? "");

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields (Name, Email, Message)."]);
    exit;
}

$to = "info@reinwerk-cleanroom.com";
$subject = "REINWERK Cleanroom Inquiry from " . $name;
$body = "Name: $name\\nEmail: $email\\nPhone: $phone\\nCompany: $company\\nSector: $sector\\nInterest: $serviceInterest\\n\\nMessage:\\n$message";
$serverName = $_SERVER["SERVER_NAME"] ?? "reinwerk.herositepro.com";
$headers = "From: webmaster@" . $serverName . "\\r\\nReply-To: " . $email;

@mail($to, $subject, $body, $headers);

echo json_encode([
    "success" => true,
    "message" => "Thank you! Your engineering inquiry has been received. Our senior cleanroom consultant will contact you within one business day."
]);
?>`;

fs.writeFileSync(path.join(apiDir, "contact.php"), contactPhp, "utf-8");

const quotePhp = `<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit(0);
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true) ?: $_POST;

$to = "info@reinwerk-cleanroom.com";
$subject = "REINWERK Cleanroom RFQ Specification";
$body = "Cleanroom Specification Request:\\n\\n" . print_r($data, true);
$serverName = $_SERVER["SERVER_NAME"] ?? "reinwerk.herositepro.com";
$headers = "From: webmaster@" . $serverName;

@mail($to, $subject, $body, $headers);

echo json_encode([
    "success" => true,
    "message" => "Cleanroom RFQ specification submitted successfully! A detailed engineering proposal is being prepared."
]);
?>`;

fs.writeFileSync(path.join(apiDir, "quote.php"), quotePhp, "utf-8");

// Create LiteSpeed / Apache clean .htaccess
const htaccess = `RewriteEngine On
RewriteBase /

# Route API calls to PHP scripts
RewriteRule ^api/contact/?$ api/contact.php [L,QSA]
RewriteRule ^api/quote/?$ api/quote.php [L,QSA]

# Clean URLs: Map /services to services.html or services/index.html
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Custom 404
ErrorDocument 404 /404.html
`;

fs.writeFileSync(path.join(outDir, ".htaccess"), htaccess, "utf-8");
console.log("Static export generation finished successfully!");
