const btTroco =document.querySelector("button")

btTroco.addEventListener("click", () => {
    const inputA = document.querySelector("#valueA")
    const inputB = document.querySelector("#valueB")
    let result = Number(inputA.value) - Number(inputB.value)
    if (isNaN (result)) {
        result = "Valor digitado inválido"
    }
    
    const Xpanresult = document.querySelector("span")
    Xpanresult.textContent = result
})
