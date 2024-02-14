function erstattTekst(event) {
    let tekstfelt = document.getElementById("tekstfelt");
    tekst = tekstfelt.value;

    // Endrer forkortelser til ord når mellomromstasten trykkes
    if (event.key === " ") { 
        nyTekst = tekst.replace(/pe/gi, "pris");
        nyTekst = nyTekst.replace(/tv/gi, "tyvek");
        nyTekst = nyTekst.replace(/ep/gi, "hvist jeg ikke svarer på telefon gjerne send meg epost");
        nyTekst = nyTekst.replace(/tyvekb/gi, "tyvek bånd 0,9 kr pr. stk");

        tekstfelt.value = nyTekst; // Setter verdien til tekstfeltet til den nye teksten

        // Sjekker om teksten inneholder ordene "tyvek" eller "pris" etter erstatning
        if (nyTekst.toLowerCase().includes("tyvek") || nyTekst.toLowerCase().includes("pris")) {
            // Vis melding om prisen for tyvek armbånd
            visPrisMelding();
        }
    }
}

// Legg til event-lytter for mellomromstasten
document.addEventListener("keypress", function(event) {
    if (event.key === " ") {
        erstattTekst(event); // Kall erstattTekst-funksjonen når mellomromstasten trykkes
        sendEmail(); // Send e-post når mellomromstasten trykkes
    }
});

function visPrisMelding() {
    // Viser melding om prisen for tyvek armbånd
    let prisElement = document.getElementById("prisElement");
    prisElement.innerText = "Tyvek armbåndene koster 0,9 kr pr. stk"; // Viser prisen for tyvek armbånd
}

function sendEmail() {
    var email = "adrian.koder@gmail.com"; // E-postadressen du vil sende til
    var message = "Din melding her"; // Meldingen du vil sende

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Behandle svaret fra PHP-skriptet
            console.log(xhr.responseText);
        }
    };
    xhr.send("email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message));
}
