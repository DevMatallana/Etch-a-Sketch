const d = document
const $ = el => d.querySelector(el)

const container = $(".container")
const btn = $(".btn")
console.log("Welcomeee!!!")



function createGrid(CUADRICULA) {
    if (CUADRICULA === "" || CUADRICULA === " ") {alert("No has ingresado un numero"); return "ERROR"}
    if (CUADRICULA > 100 || CUADRICULA < 0) {alert("El numero ingresado no esta en el rango"); return "ERROR"}

    for (let x = 1; x <= CUADRICULA; x++) {
        const divs = d.createElement("div")
        container.appendChild(divs)
        divs.classList.add("divs")
        // divs.textContent = x;
        
        divs.addEventListener("mousemove", () => {
            divs.classList.add("divsHover")
        })
        
        for (let y = 1; y <= (CUADRICULA - 1); y++) {
            const divsY = d.createElement("div")
            container.appendChild(divsY)
            divsY.classList.add("divs")
            // divsY.textContent = y;
      
            divsY.addEventListener("mousemove", () => {
                divsY.classList.add("divsHover")
            })
        }
    }
    return true
}

btn.addEventListener("click", () => {
    const CUADRICULA = prompt("Escoge un numero del 1 al 100")
    const resultado = (30 * CUADRICULA + 16) + "px";
    container.style.width = resultado;
    container.innerHTML = "";
    createGrid(CUADRICULA)
})
