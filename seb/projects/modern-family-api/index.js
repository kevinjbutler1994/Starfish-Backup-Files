import express from "express";
import db from "./db/connection.js";
import cors from 'cors'
import Characters from "./models/Character.js";
import Seasons from "./models/Season.js";
import Quotes from "./models/Quote.js";

const app = express();
app.use(express.json());
app.use(cors())

db.on('connected', () => {
  app.listen(3000, () => console.log("Hello!"));
})

app.get("/", (req, res) => {
  res.json({
    characters: "/characters",
    seasons: "/seasons",
    quotes: "/quotes"
  });
});

app.get("/characters", (req, res) => {
  Characters.find({}).then((character) => {
    res.json(character);
  });
});

app.get("/characters/:id", (req, res) => {
  Characters.findById(req.params.id).then(character => {
    res.json(character)
  })
});


app.get("/seasons", (req, res) => {
  Seasons.find({}).then((season) => {
    res.json(season)
  })
})

app.get("/seasons/:id", (req, res) => {
  Seasons.findById(req.params.id).then(season => {
    res.json(season)
  })
});

app.get("/quotes", (req, res) => {
  Quotes.find({}).then((quote) => {
    res.json(quote)
  })
})

app.post("/characters", (req, res) => {
  Characters.create(req.body).then(character => {
    res.json(character)
  })
})

app.post("/quotes", (req, res) => {
  Quotes.create(req.body).then(quotes => {
    res.json(quotes)
  })
})

app.put("/characters/:id", (req, res) => {
  Characters.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  ).then(character => {
    res.json(character)
  })
})

app.put("/seasons/:id", (req, res) => {
  Seasons.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  ).then(season => {
    res.json(season)
  })
})

app.put("/quotes/:id", (req, res) => {
  Quotes.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  ).then(quote => {
    res.json(quote)
  })
})


app.delete("/characters/:id", (req, res) => {
  Characters.findOneAndDelete({ _id: req.params.id })
    .then(character => {
      res.json(character)
    })
})

app.delete("/quotes/:id", (req, res) => {
  Quotes.findOneAndDelete({ _id: req.params.id })
    .then(quote => {
      res.json(quote)
    })
})