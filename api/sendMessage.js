export default async function handler(req, res) {
    const fetch = (await import("node-fetch")).default;

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Missing message text" });
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text })
    });

    if (!response.ok) {
        return res.status(500).json({ error: "Failed to send message" });
    }

    res.status(200).json({ success: true });
}