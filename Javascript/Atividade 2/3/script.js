const btSomar =document.querySelector("button")

btSomar.addEventListener("click", () => {
    const inputA = document.querySelector("input")
    let result = Number(inputA.value) + Number(inputA.value)*0.01
    if (isNaN (result)) {
        result = "Valor digitado inválido"
    }
    
    const Xpanresult = document.querySelector("span")
    Xpanresult.textContent = result
})
