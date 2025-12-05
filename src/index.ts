import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final; failure is not fatal.",
  "Dream big and dare to fail.",
  "The harder you work, the luckier you get.",
  "Don't watch the clock; do what it does — keep goingggggggggggg."
];

app.get("/random-quote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  res.json({
    success: true,
    quote: randomQuote
  });
});



app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));


