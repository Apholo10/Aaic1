export default async function handler(req, res) {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;
  const API_KEY  = process.env.GOOGLE_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/place/details/json`
    + `?place_id=${PLACE_ID}`
    + `&fields=reviews,rating,user_ratings_total`
    + `&key=${API_KEY}`;

  const response = await fetch(url);
  const data     = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data.result);
}