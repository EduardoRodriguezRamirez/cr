
const ventana_salida = document.getElementById("lateral-w");
const icon_salida = document.getElementById("lateral-exit");
const contenedor = document.getElementById("container");

function lateral_exit(){
    ventana_salida.style.display = "none";
    contenedor.classList.add("cerrado")
}

function lateral_insert(){
    ventana_salida.style.display = "flex";
    contenedor.classList.remove("cerrado")
}

icon_salida.addEventListener("click", () => {
    lateral_exit();
});

const colabs = document.querySelectorAll("td");

colabs.forEach(td => {
    td.addEventListener("dblclick", lateral_insert);
});

const exit_colab = document.getElementById("salir-colab") 
const add_colab = document.getElementById("add-colab")

function close_colab(){
    add_colab.classList.add("cerrado")
}

function open_colab(){
    add_colab.classList.remove("cerrado")
}


exit_colab.addEventListener("click", () => {
    close_colab();
});

const btn_add_colab = document.getElementById("add-btn")

btn_add_colab.addEventListener("click", () => {
    open_colab();
});

document.addEventListener("click", function(event){
    console.log(add_colab.classList.contains("cerrado"))
    if(!btn_add_colab.contains(event.target)){
        if(!add_colab.contains(event.target) && !add_colab.classList.contains("cerrado")){
            add_colab.classList.add("cerrado")
        console.log("entro")
    }
    }
    
    
});
