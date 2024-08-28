// Mapeo de encriptación
const encryptionKeys = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const decryptionKeys = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

// Función para encriptar texto
function encryptText(text) {
    return text.replace(/[eioua]/g, match => encryptionKeys[match]);
}

// Función para desencriptar texto
function decryptText(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionKeys[match]);
}

// Eventos de los botones
document.getElementById("encryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    const encryptedText = encryptText(inputText);
    document.getElementById("outputText").value = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    const decryptedText = decryptText(inputText);
    document.getElementById("outputText").value = decryptedText;
});

// Botón para copiar al portapapeles
document.getElementById("copyButton").addEventListener("click", function() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
});
