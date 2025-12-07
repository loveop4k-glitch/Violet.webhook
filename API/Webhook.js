export default function handler(req, res) {

  // GET request → Facebook Webhook Verification
  if (req.method === "GET") {
    const VERIFY_TOKEN = "violet123";

    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode && token && mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("Webhook verified!");
      res.status(200).send(challenge);
    } else {
      res.status(403).send("Verification failed");
    }
  }

  // POST request → Facebook Messages
  else if (req.method === "POST") {
    console.log("Incoming webhook:", req.body);
    res.sendStatus(200);
  }

  else {
    res.status(405).send("Method not allowed");
  }
      }
