const formulario = document.getElementById("main-form");
const btnEstadoPedido = document.getElementById("btn-estadoPedido");
const pedidos = document.getElementById("pedidos");
const ciudad = document.getElementById("ciudad");
const barrios = document.getElementById("barrios");
const labelAddress = document.getElementById("labelAddress");
const address = document.getElementById("address");
const labelBarrio = document.getElementById("labelBarrio");
const btnCobertura = document.getElementById("cobertura");
const textInfo = document.getElementById("text-info");
const cancelarConsultaPedido = document.getElementById("btn-cerrar");

cancelarConsultaPedido.addEventListener("click", () => {
  pedidos.remove();
  documento.prepend(formulario);
  pedidos.classList.remove("mover");
  pedidos.classList.add("noshow");
  documento.after(pedidos);
});

btnEstadoPedido.addEventListener("click", () => {
  formulario.remove();
  pedidos.classList.remove("noshow");
  pedidos.classList.add("mover");
});

ciudad.addEventListener("change", () => {
  labelBarrio.classList.remove("noshow");
  barrios.classList.remove("noshow");
  labelAddress.classList.remove("noshow");
  address.classList.remove("noshow");
  btnCobertura.classList.remove("noshow");
  textInfo.classList.remove("noshow");
});
