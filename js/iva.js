function CalcularIVA() {
  const MontoIVA = 0.13;
  let MontoProducto = document.getElementById("MontoProductoIngresado").value;
  let IvaDelProducto = MontoProducto * MontoIVA;

  document.getElementById("MontoProducto").innerHTML = MontoProducto;
  document.getElementById("TotalIva").innerHTML = IvaDelProducto;
  document.getElementById("MontoPagar").innerHTML =
    parseFloat(IvaDelProducto) + parseFloat(MontoProducto);
}
