function erstattTekst(event) {
    let tekstfelt = document.getElementById("tekstfelt");
    tekst = tekstfelt.value;

    // Endrer forkortelser til ord når mellomromstasten trykkes
    if (event.key === " ") { 
        nyTekst = tekst.replace(/pe/gi, "pris");
        nyTekst = nyTekst.replace(/tv/gi, "tyvek");
        nyTekst = nyTekst.replace(/ep/gi, "hvist jeg ikke sleter på telefon gjerne send meg epost");
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

// Teksten som inneholder beskrivelsen og tallet
{let tekst = "Armbåndene koster 0,9 kr per stykk og han skal ha 10.";
// Finn indeksen til teksten som inneholder "tyvekb"
let tyvekbIndex = tekst.indexOf("tyvekb");
// Finn indeksen til det første mellomrommet før "tyvekb", dette antas å være starten på tallet
let talletIndex = tekst.lastIndexOf(" ", tyvekbIndex) + 1;
// Hent ut tallet som en streng
let talletStr = tekst.substring(talletIndex, tekst.indexOf(" ", tyvekbIndex));
// Konverter tallet til et flyttall, og erstatt komma med punktum for desimalskilletegn (for å sikre riktig format i JavaScript)
let tallet = parseFloat(talletStr.replace(",", "."));
// Utfør beregningen
let pris = tallet * 10;
// Oppdater innholdet i <div> med det beregnede resultatet
document.getElementById("demo").innerHTML = pris.toFixed(2) + " kr"; // Vis pris med to desimaler

}

function sendEmail() {
    let email = "adrian.koder@gmail.com"; // E-postadressen du vil sende til
    let message = "Din melding her"; // Meldingen du vil sende

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Behandle sletet fra PHP-skriptet
            console.log(xhr.responseText);
        }
    };
    xhr.send("email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message));
}
