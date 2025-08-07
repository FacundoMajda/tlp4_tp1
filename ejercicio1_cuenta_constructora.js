function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldo = saldoInicial;
}

CuentaBancaria.prototype.depositar = function (monto) {
  return monto > 0
    ? (this.saldo += monto)
    : console.log("Monto inválido para depositar");
};

CuentaBancaria.prototype.extraer = function (monto) {
  return monto > 0
    ? this.saldo >= monto
      ? (this.saldo -= monto)
      : console.log("Fondos insuficientes")
    : console.log("Monto inválido para extraer");
};

CuentaBancaria.prototype.consultarSaldo = function () {
  console.log(`Saldo actual: $${this.saldo}`);
  return this.saldo;
};

CuentaBancaria.prototype.infoCuenta = function () {
  console.log(`Titular: ${this.titular} | Saldo: $${this.saldo}`);
};

// uso
const cuenta1 = new CuentaBancaria("Facundo Majda", 1000);
cuenta1.depositar(500);
cuenta1.extraer(200);
cuenta1.consultarSaldo();
cuenta1.infoCuenta();

