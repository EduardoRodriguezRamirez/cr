const check = document.getElementsByClassName("checkbox");

Array.from(check).forEach(cb =>{
    cb.addEventListener("click", ()=>{
        if(cb.style.background == "rgb(105, 253, 60)"){
            cb.style.background = "white"
        }else{
            cb.style.background = "rgb(105, 253, 60)"
        }
       var habilitador = cb.firstElementChild;
       habilitador.classList.toggle("enable")
    })
}
)