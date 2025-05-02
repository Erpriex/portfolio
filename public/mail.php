<?php
if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])){
    echo 'false';
    return;
}

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$subject = strip_tags($_POST['subject']);
$message = strip_tags($_POST['message']);

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "From: Portfolio <internal@ctrempe.fr>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$subject_encoded = mb_encode_mimeheader("Message via Portfolio : " . $subject, "UTF-8", "B");

mail("clement@ctrempe.fr", $subject_encoded, "Nom : " . $name . "\r\nEmail : " . $email . "\r\nObjet : " . $subject . "\r\n\r\n" . $message, $headers);

echo 'true';
?>