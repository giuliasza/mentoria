let qrcode = null;

function gerarQR() {
    const input = document.getElementById("texto").value;
    const container = document.getElementById("qrcode");
    if (input.trim() === "") {
        alert("Digite algo primeiro!");
        return;
    } 

    if (qrcode === null) {
        qrcode = new QRCode(container, {
            text: input,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H 
        });
    } else {
        qrcode.makeCode(input);
    }
}