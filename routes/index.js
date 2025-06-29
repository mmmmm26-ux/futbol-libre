const express = require('express');
const router = express.Router();

const partidos = [
  {
    equipoA: "Colombia",
    equipoB: "Uruguay",
    hora: "6:00 PM",
    link: "https://latv-hd.com/canal/tyc.php"
  },
  {
    equipoA: "Chile",
    equipoB: "Paraguay",
    hora: "8:30 PM",
    link: "https://latv-hd.com/canal/espn.php"
  },
  {
    equipoA: "Perú",
    equipoB: "Venezuela",
    hora: "10:00 PM",
    link: "https://latv-hd.com/canal/directv.php"
  }
];

router.get('/', (req, res) => {
  res.render('index', { partidos });
});

module.exports = router;
