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
    }

    // Sjekker om teksten inneholder ordene "tyvek" eller "pris"
    if (tekst.toLowerCase().includes("tyvek") || tekst.toLowerCase().includes("pris")) {
        // Vis melding om prisen for tyvek armbånd
        visPrisMelding();
    }
}

function visPrisMelding() {
    // Viser melding om prisen for tyvek armbånd
    let prisElement = document.getElementById("prisElement");
    prisElement.innerText = "Tyvek armbåndene koster 0,9 kr pr. stk"; // Viser prisen for tyvek armbånd
}
function sendEmail() {
    var email = "example@example.com"; // E-postadressen du vil sende til
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
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer standard form handling

    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Send dataene til serveren
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText); // Viser svaret fra serveren
        }
    };
    xhr.send("email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message));
});
