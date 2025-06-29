const express = require('express');
const router = express.Router();

const partidos = [
  {
    equipoA: "ESPN",
    equipoB: "",
    hora: "Canal en vivo",
    link: "https://tv.latv-hd.com/canal/espn.php"
  },
  {
    equipoA: "TUDN",
    equipoB: "",
    hora: "Canal en vivo",
    link: "https://tv.latv-hd.com/canal/tudn.php"
  },
  {
    equipoA: "DIRECTV Sports",
    equipoB: "",
    hora: "Canal en vivo",
    link: "https://tv.latv-hd.com/canal/directv.php"
  }
];

router.get('/', (req, res) => {
  res.render('index', { partidos });
});

module.exports = router;
