const btSomar =document.querySelector("button")

btSomar.addEventListener("click", () => {
    const inputA = document.querySelector("#valueA")
    const inputB = document.querySelector("#valueB")
    const inputC = document.querySelector("#valueC")
    const values = [Number(inputA.value),Number(inputB.value),Number(inputC.value)]
        
    const mediaAR = (values[0]+values[1]+values[2])/3
    const mediaPD = ((values[0]*3)+(values[1]*2)+(values[2]*5))/3
    const mediaSM = (mediaAR)+(mediaPD)
    const mediaFN = (mediaSM)/2

    const resA = document.querySelector(".resA")
    const resB = document.querySelector(".resB")
    const resC = document.querySelector(".resC")
    const resD = document.querySelector(".resD")
    
    resA.textContent = mediaAR
    resB.textContent = mediaPD
    resC.textContent = mediaSM
    resD.textContent = mediaFN

})
