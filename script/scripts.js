


const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const elemento4 = document.getElementById("elemento4");
const elemento5 = document.getElementById("elemento5");

const ciudad = document.getElementById('ciudad');

ciudad.addEventListener('change',()=>{
    
    elemento1.classList.remove("noshow");
    elemento2.classList.remove("noshow");
    elemento3.classList.remove("noshow");
    elemento4.classList.remove("noshow");
    elemento5.classList.remove("noshow");
});    

/*let m = 1;

const div = document.getElementById('div');
const elemento = document.getElementById('ciudad');
const mensaje = document.createElement("P");
mensaje.textContent = "No joda, ya estoy trabajando para avanzar"
mensaje.classList.add('div1-p2');
mensaje.setAttribute("id","inserto");
elemento.addEventListener('change',()=>{
    
    if(m==1){
        alert('aqui voy');
        m++;
    }else{
        div.after(mensaje);
        const nuevo = document.getElementById('inserto');
        console.log(nuevo);
    }
});*/


