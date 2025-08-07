String.prototype.concatenarPalabra = function (palabra) {
  return `${this}-${palabra}`;
};

console.log(
  "hola".concatenarPalabra("mundo").concatenarPalabra("esto es una prueba")
);
