const btn_calendario = document.getElementsByClassName("calendario")
const btn_descripcion = document.getElementsByClassName("descripcion")

const hoy = new Date();
const fechaHoy = hoy.toISOString().split('T')[0];

const renglon = document.getElementsByClassName("renglon")

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

Array.from(btn_calendario).forEach(btn => {
    btn.addEventListener("click", () => {
       var parent = btn.parentElement.parentElement.parentElement.parentElement;
       var childrens = parent.children
       Array.from(childrens).forEach(kido =>{
            if(kido.classList.contains("abierta")){
                kido.classList.remove("abierta")
            }
            var child = btn.parentElement.parentElement.parentElement
            child.classList.add("abierta")
       })
       
    });
});
