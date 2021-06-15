const express = require('express');
const router = express.Router();
const calculate = require('../utils/calculate');
const vehiclesArr = [
  { id: '1', tipo: 'auto', placa: 'EVC450' },
  { id: '2', tipo: 'carro', placa: 'DVC120' },
  { id: '3', tipo: 'camioneta', placa: 'RVC220' },
  { id: '4', tipo: 'carro', placa: 'TCC5739' },
  { id: '5', tipo: 'moto', placa: 'PEO666' },
  { id: '6', tipo: 'camioneta', placa: 'ESE222' },
];

const rates = {
  camioneta: 100,
  carro: 210,
  moto: 260,
  auto: 80,
  otro: 90,
};

router
  .route('/vehicles')
  .get((req, res) => {
    res.json({ vehicles: vehiclesArr, status: 'success' });
  })
  .post((req, res) => {
    const { vehicles } = req.body;
    const vehiclesWithRates = calculate(vehicles, rates);
    res.json({ vehiclesWithRates, status: 'success' });
  });

module.exports = router;
