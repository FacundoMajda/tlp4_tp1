class CuentaBancaria {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  get saldo() {
    return this.#saldo;
  }

  set saldo(nuevoSaldo) {
    nuevoSaldo >= 0
      ? (this.#saldo = nuevoSaldo)
      : console.error("El saldo no puede ser negativo.");
  }

  depositar(monto) {
    return monto > 0
      ? (this.saldo += monto)
      : console.log("Monto inválido para depositar");
  }

  extraer(monto) {
    return monto > 0
      ? this.saldo >= monto
        ? (this.saldo -= monto)
        : console.error("Fondos insuficientes")
      : console.log("Monto inválido para extraer");
  }

  consultarSaldo() {
    console.log(`Saldo actual: $${this.saldo}`);
    return this.saldo;
  }

  infoCuenta() {
    console.log(`Titular: ${this.titular} | Saldo: $${this.saldo}`);
  }
}

// uso
const cuenta1 = new CuentaBancaria("Facundo Majda", -1100);

// métodos
cuenta1.depositar(500); // sumo plata
cuenta1.extraer(200); // saco plata
cuenta1.consultarSaldo(); // muestro saldo
cuenta1.infoCuenta(); // muestro titular y saldo

//  accedemos y cambiamos el saldo usando getter/setter
console.log("Getter y setter en acción:");
console.log("Saldo actual:", cuenta1.saldo); // leo saldo
cuenta1.saldo = 2000; // cambio saldo
console.log("Saldo cambiado:", cuenta1.saldo);
cuenta1.saldo = -100; // intento poner saldo negativo
console.log("Saldo después de intento inválido:", cuenta1.saldo);

// si se intenta acceder directo a la propiedad privada, se rompe
try {
  eval("console.log(cuenta1.#saldo);");
} catch (e) {
  console.log("Error al acceder a #saldo:", e.message);
}
