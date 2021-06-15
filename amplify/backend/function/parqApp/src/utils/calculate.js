module.exports = function calculate(items, rates) {
  return items.map((item) => ({ ...item, tarifa: rates[item.tipo] }));
};
