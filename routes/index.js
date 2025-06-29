const express = require('express');
const router = express.Router();

const partidos = [
  {
    equipoA: "Argentina",
    equipoB: "Brasil",
    hora: "6:00 PM",
    link: "https://www.youtube.com/embed/live_stream?channel=UCXXXX"
  },
  {
    equipoA: "Real Madrid",
    equipoB: "Barcelona",
    hora: "8:00 PM",
    link: "https://www.youtube.com/embed/live_stream?channel=UCYYYY"
  }
];

router.get('/', (req, res) => {
  res.render('index', { partidos });
});

module.exports = router;
