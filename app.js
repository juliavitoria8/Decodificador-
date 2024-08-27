const inputField = document.querySelector(".digitar");
const resultContent = document.getElementById("result-content");
const placeHolderContent = document.getElementById("placeholder-content");
const outputText = document.getElementById("output-text");
const copyButton = document.getElementById("copy-button");
const cripto = document.getElementById("cripto")
const descripto = document.getElementById("descripto");


inputField.addEventListener("input", function() {
    const inputValue = inputField.value

    if (inputValue) {
        placeHolderContent.style.display = "none";
        resultContent.style.display = "block";
        outputText.textContent = inputValue;
    } else {
        placeHolderContent.style.display = "flex";
        resultContent.style.display = "none";
    }
} );

copyButton.addEventListener("click", function() {
    navigator.clipboard.writeText(outputText.textContent)
    .then(() => {
        alert("Texto copiado para a área de transferência!");
    })
    .catch(err => {
        console.error("Erro ao copiar o texto", err);
    });
});

function criptografar(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    return textoEncriptado;
}

function descriptografar(texto) {
    let textoDescriptado = texto.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
    return textoDescriptado;
}

cripto.addEventListener("click", function() {
    const inputValue = inputField.value
    
    if (inputValue) {
        const criptedText = criptografar(inputValue);
        outputText.textContent = criptedText;
    } 
})

descripto.addEventListener("click", function() {
    const inputValue = inputField.value

    if(inputValue) {
        const descriptedText = descriptografar(inputValue);
        outputText.textContent = descriptedText;
    }
});