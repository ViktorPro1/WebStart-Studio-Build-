export async function handler(event) {
    if (event.httpMethod === "POST") {
        try {
            const report = JSON.parse(event.body);
            console.log("📢 CSP Report:", JSON.stringify(report, null, 2));
            return {
                statusCode: 204,
                body: "" // без відповіді, браузер цього хоче
            };
        } catch (error) {
            console.error("❌ Error parsing CSP report:", error);
            return {
                statusCode: 400,
                body: "Invalid report format"
            };
        }
    } else {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }
}

