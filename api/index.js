import express, { json } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    1: "Juvanio Kangni Juvanio",
    2: "Is gonna be",
    3: "The best developper in the world",
    4: "horizon 2030",
    5: "I'm gonna be a billionnaire, I'm sure of it",
    6: "make sense of it all ?",
  });
});

app.listen(4000, () => console.log("Server running on port 3000"));
