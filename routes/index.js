const express = require('express');
const router = express.Router();

const partidos = [
  {
    equipoA: "ESPN",
    equipoB: "",
    hora: "Canal en vivo",
    link: "https://www.futbollibretv.co/espn-en-vivo/"
  },
  {
    equipoA: "TUDN",
    equipoB: "",
    hora: "Canal en vivo",
    link: "https://www.futbollibretv.co/tudn-en-vivo/"
  },
  {
    equipoA: "DIRECTV Sports",
    equipoB: "",
    hora: "Canal en vivo",
    link: "https://www.futbollibretv.co/directv-sports-en-vivo/"
  }
];

router.get('/', (req, res) => {
  res.render('index', { partidos });
});

module.exports = router;

