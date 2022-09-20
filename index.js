// Средняя скорость //

const Sum = (a, b, c) => {
  return (a + b + c) / 3;
};
Sum(5, 24, 20);

// Фаренгейт в Цельсий//
const Far = (cTemp) => {
  return cTemp * 1.8 + 32;
};
Far(3);

// Цельсий в Фаренгейт//
const Cel = (fTemp) => {
  return (fTemp - 32) * (5 / 9);
};
Cel(3);
