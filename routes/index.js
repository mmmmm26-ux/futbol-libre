const express = require('express');
const router = express.Router();

const partidos = [
  {
    equipoA: "Ejemplo FC",
    equipoB: "Real Esperanza",
    hora: "6:00 PM",
    link: "https://www.youtube.com/embed/live_stream?channel=UC4a-Gbdw7vOaccHmFo40b9g" // Al Jazeera - funcional
  },
  {
    equipoA: "Luz Interior",
    equipoB: "Sombra Eterna",
    hora: "8:00 PM",
    link: "https://www.youtube.com/embed/live_stream?channel=UCJjSDX-jUChzOEyok9XYRJQ" // NASA TV - prueba
  }
];

router.get('/', (req, res) => {
  res.render('index', { partidos });
});

module.exports = router;
