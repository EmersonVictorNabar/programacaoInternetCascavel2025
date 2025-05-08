const btSomar =document.querySelector("button")

btSomar.addEventListener("click", () => {
    const inputA = document.querySelector("#valueA")
    const inputB = document.querySelector("#valueB")
    const inputC = document.querySelector("#valueC")
    const inputD = document.querySelector("#valueD")
    
    const lista = 
        [Number(inputA.value),Number(inputB.value),Number(inputC.value),Number(inputD.value)]

    let result = Math.min(...lista)
 
    const Xpanresult = document.querySelector("span")
    Xpanresult.textContent = result
})
