// ARQUIVO: /api/ask-kairos.js
// A nossa "cozinha" segura.

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = request.body;
  const API_KEY = process.env.GEMINI_API_KEY; // Lê a chave segura do servidor

  if (!prompt) {
    return response.status(400).json({ error: "Prompt is required" });
  }
  if (!API_KEY) {
    return response
      .status(500)
      .json({ error: "API Key not configured on the server" });
  }

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

  try {
    const apiResponse = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });

    const data = await apiResponse.json();
    if (!apiResponse.ok || data.error) {
      throw new Error(data.error?.message || "Failed to get response from AI");
    }

    const aiText = data.candidates[0].content.parts[0].text;
    return response.status(200).json({ response: aiText });
  } catch (error) {
    console.error("Server Error:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
}
