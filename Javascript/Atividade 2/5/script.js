const btSomar =document.querySelector("button")

btSomar.addEventListener("click", () => {
    const inputA = document.querySelector("#valueA")
    const inputB = document.querySelector("#valueB")
    const result = Number(inputA.value) < Number(inputB.value)

    let maior = Number(inputA.value)

    if (result) {
        maior = Number(inputB.value)
    }
    
    const Xpanresult = document.querySelector("span")
    Xpanresult.textContent = maior
})
