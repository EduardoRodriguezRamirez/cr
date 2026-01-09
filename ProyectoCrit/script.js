
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
    document.getElementById("overlay").style.display = "none";
    document.getElementById("add-colab").style.display = "none";
}

function open_colab(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("add-colab").style.display = "block";
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

const rows = document.querySelectorAll("tr");
const tds = document.createElement("td");

rows.forEach(row => {
    row.addEventListener("dblclick", () => {
        if (row.querySelector("td") !== null) {
            const tds = row.getElementsByTagName("td");
            const ths = document.querySelectorAll("th");

            var ths_array = Array.from(ths)
            var tds_array = Array.from(tds)

            var info_selected = document.getElementById("info-selected");

            info_selected.innerHTML = "";
            
            for (let i = 0; i < tds.length; i++) {

                var header = ths_array[i].textContent.trim();
                var data = tds_array[i].textContent.trim();
                var information = document.createElement("div");
                



                information.setAttribute("class", "w-info-s");
                information.innerHTML = `
        <label for="`+ header +`" class="lbl-inf">`+ header +`</label>
        <div class="text-input">
            <input type="text" class="input-reset input-custom" id="`+ header +`" value="`+ data +`" />
            <img src="Resource/copia.png" class="icon" />
        </div>
`;              
                info_selected.appendChild(information);
        }
        }
    });
});

const btn_calendario = document.getElementsByClassName("calendario")
const btn_descripcion = document.getElementsByClassName("descripcion")

btn_calendario.forEach(btn => {
    btn.addEventListener("click", () => {
        var parent = btn.parentElement.parentElement.parentElement;
        parent.classList.add("abierto")
    });
});
