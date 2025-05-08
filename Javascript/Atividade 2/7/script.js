const btSomar =document.querySelector("button")

btSomar.addEventListener("click", () => {
    const inputA = document.querySelector("#valueA")
    let result = Number(inputA.value) % 2 !== 0 ? "Impar" : "par"
    
    const Xpanresult = document.querySelector("span")
    Xpanresult.textContent = result
})
