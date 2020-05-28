let m = 1;

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
});


