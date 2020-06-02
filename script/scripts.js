const formulario = document.getElementById("form-principal");
const btnPedido = document.getElementById("btn-pedido");
const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const elemento4 = document.getElementById("elemento4");
const elemento5 = document.getElementById("elemento5");
const ciudad = document.getElementById("ciudad");
const pedidos = document.getElementById("pedidos");
const formulari1 = formulario;
const documento = document.getElementById("documento");

const cancelarConsultaPedido = document.getElementById("btn-cerrar");

cancelarConsultaPedido.addEventListener("click", ()=>{
    pedidos.remove();
    documento.prepend(formulario);
    pedidos.classList.add("noshow");
    documento.after(pedidos);
});


btnPedido.addEventListener("click", () => {
    formulario.remove();

    pedidos.classList.remove("noshow");
    //pedidos.classList.add("mover");
  
});

ciudad.addEventListener("change", () => {
  elemento1.classList.remove("noshow");
  elemento2.classList.remove("noshow");
  elemento3.classList.remove("noshow");
  elemento4.classList.remove("noshow");
  elemento5.classList.remove("noshow");
});

