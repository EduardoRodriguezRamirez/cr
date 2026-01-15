const btn_calendario = document.getElementsByClassName("calendario")
const btn_descripcion = document.getElementsByClassName("descripcion")

const hoy = new Date();
const fechaHoy = hoy.toISOString().split('T')[0];

var renglon = document.getElementsByClassName("renglon")

Array.from(renglon).forEach(rgl =>{
    rgl.addEventListener("dblclick", () => {
        var child = rgl.getElementsByClassName("inf-extra")
        var img = rgl.getElementsByClassName("despliegue")
        Array.from(child).forEach(cart =>{
            if(cart.classList.contains("abierto")){
                cart.classList.remove("abierto")
            }else{
                cart.classList.add("abierto")
            }
        })
        Array.from(img).forEach(imagen =>{
            if(!imagen.classList.contains("rotate")){
                imagen.classList.add("rotate")
            }else{
                imagen.classList.remove("rotate")
            }
            
        })
    });
});

document.getElementById('calendario-search').value = fechaHoy;

Array.from(btn_descripcion).forEach(btn => {
    btn.addEventListener("click", () => {
       var parent = btn.parentElement.parentElement.parentElement.parentElement;
       var childrens = parent.children
       Array.from(childrens).forEach(kido =>{
            if(kido.classList.contains("abierta")){
                kido.classList.remove("abierta")
            }
       })
       var child = btn.parentElement.parentElement.parentElement
        child.classList.add("abierta")
        
        var elementos = child.lastElementChild.firstElementChild

        var rgl = document.createElement("div")
        rgl.className = "renglon"
        rgl.innerHTML = `<div class="renglon">
                            <img src="Resource/abajo.png" alt="" class="icon despliegue">
                            <p>apt</p>
                            <div class="inf-extra">
                                <div class="img-xtr">
                                    <img src="Resource/info-deriva.png" alt="" class="icon">
                                </div>
                                <div class="mtop-bot">
                                    <p>mas info</p>
                                </div>
                            </div>
                        </div>`
        rgl.addEventListener("click", () =>{
            var child = rgl.getElementsByClassName("inf-extra")
        var img = rgl.getElementsByClassName("despliegue")
        Array.from(child).forEach(cart =>{
            if(cart.classList.contains("abierto")){
                cart.classList.remove("abierto")
            }else{
                cart.classList.add("abierto")
            }
        })
        Array.from(img).forEach(imagen =>{
            if(!imagen.classList.contains("rotate")){
                imagen.classList.add("rotate")
            }else{
                imagen.classList.remove("rotate")
            }
            
        })
        });
        elementos.appendChild(rgl)
    });
});
