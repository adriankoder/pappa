<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST["email"];
    $subject = "Emne for e-posten";
    $message = $_POST["message"];
    $headers = "From: example@example.com"; // E-postadressen du vil sende fra

    // Send e-posten
    if (mail($to, $subject, $message, $headers)) {
        echo "E-post sendt!";
    } else {
        echo "Noe gikk galt med å sende e-posten.";
    }
}
?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST["email"];
    $subject = "Ny e-post fra nettsiden";
    $message = $_POST["message"];
    $headers = "From: example@example.com"; // Bytt ut med en gyldig avsender-e-postadresse

    // Send e-posten
    if (mail($to, $subject, $message, $headers)) {
        echo "E-post sendt!";
    } else {
        echo "Noe gikk galt med å sende e-posten.";
    }
}
?>
