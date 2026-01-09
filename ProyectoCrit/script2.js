const btn_calendario = document.getElementsByClassName("calendario")
const btn_descripcion = document.getElementsByClassName("descripcion")

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
