function submitConfirmation() {
    var name = document.getElementById("name").value;
    var attendance = document.getElementById("attendance").value;

    var message = "Obrigado, " + name + "! Sua presença foi confirmada.";

    if (attendance === "nao") {
        message = " não poderei comparecer, " + name + ". Esperamos vê-lo na próxima!";
    }

    document.getElementById("confirmationMessage").innerHTML = message;
}

function sendWhatsAppMessage() {
    var name = document.getElementById("name").value;
    var attendance = document.getElementById("attendance").value;

    var message = "Obrigado, " + name + "! Sua presença foi confirmada.";

    if (attendance === "nao") {
        message = "Que pena que você não poderá comparecer, " + name + ". Esperamos vê-lo na próxima!";
    }

    // Substitua "SEU_NUMERO_DE_TELEFONE" pelo número de telefone do destinatário
    var phoneNumber = "5511956500823";
    
    // Construa o link do WhatsApp
    var whatsappLink = "https://wa.me/" + phoneNumber + "/?text=" + encodeURIComponent(message);

    // Abra o WhatsApp no navegador
    window.open(whatsappLink, "_blank");
}
