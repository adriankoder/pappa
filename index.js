
//endrer forkortelse til ord
function erstattTekst(event) {
    if (event.keyCode === 32) {
        let tekstfelt = document.getElementById("tekstfelt");
        tekst = tekstfelt.value;
        nyTekst = tekst.replace(/pe/gi, "price");
        tekstfelt.value = nyTekst; // Setter verdien til tekstfeltet til den nye teksten
    }
    if (event.keyCode === 32) {
        let tekstfelt = document.getElementById("tekstfelt");
        tekst = tekstfelt.value;
        nyTekst = tekst.replace(/tv/gi, "tyvek");
        tekstfelt.value = nyTekst; // Setter verdien til tekstfeltet til den nye teksten
}
    if (event.keyCode === 32) {
        let tekstfelt = document.getElementById("tekstfelt");
        tekst = tekstfelt.value;
        nyTekst = tekst.replace(/ep/gi, "hvist jeg ikke svarer på telenon gjerne send meg epost");
        tekstfelt.value = nyTekst; // Setter verdien til tekstfeltet til den nye teksten
    }
}