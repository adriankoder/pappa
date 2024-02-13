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
}
