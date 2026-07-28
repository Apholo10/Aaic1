export default async function handler(req, res) {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;

  if (!PLACE_ID || !API_KEY) {
    return res.status(500).json({ error: "Configuración faltante en el servidor" });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json`
    + `?place_id=${PLACE_ID}`
    + `&fields=reviews,rating,user_ratings_total`
    + `&language=es`
    + `&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(400).json({ error: data.error_message || "Error de Google API" });
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data.result);
  } catch (error) {
    res.status(500).json({ error: "Fallo al conectar con Google" });
  }
}