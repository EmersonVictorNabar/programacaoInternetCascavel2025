let h1Texto = document.querySelector("#h1Texto");
let inputTexto = document.querySelector("#inputTexto");
let btTrocaTexto = document.querySelector("#btTrocaTexto")

function trocarTexto(){
    //retornando o texto digitado no campo
    let textDigitado = inputTexto.value; 
    //alterando o texto do elemento h1
    h1Texto.textContent = textDigitado;
}

btTrocaTexto.onclick = trocarTexto
