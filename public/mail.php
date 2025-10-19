<?php
if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])){
    echo 'false';
    return;
}

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$subject = strip_tags($_POST['subject']);
$message = strip_tags($_POST['message']);

$hasFile = isset($_FILES['audio']) && $_FILES['audio']['error'] === UPLOAD_ERR_OK;

if ($hasFile) {
  $tmpPath = $_FILES['audio']['tmp_name'];
  $filename = basename($_FILES['audio']['name']);
  $fileData = chunk_split(base64_encode(file_get_contents($tmpPath)));
  $boundary = md5(time());
}

$headers  = "MIME-Version: 1.0\r\n";
if ($hasFile) {
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
} else {
  $headers .= "Content-type: text/plain; charset=utf-8\r\n";
}
$headers .= "From: Portfolio <internal@ctrempe.fr>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$subject_encoded = mb_encode_mimeheader("Message via Portfolio : " . $subject, "UTF-8", "B");

if ($hasFile) {
  $body  = "--$boundary\r\n";
  $body .= "Content-Type: text/plain; charset=\"utf-8\"\r\n\r\n";
  $body .= "Nom : $name\nEmail : $email\nObjet : $subject\n\n$message\r\n";
  $body .= "--$boundary\r\n";
  $body .= "Content-Type: " . $_FILES['audio']['type'] . "; name=\"$filename\"\r\n";
  $body .= "Content-Transfer-Encoding: base64\r\n";
  $body .= "Content-Disposition: attachment; filename=\"$filename\"\r\n\r\n";
  $body .= $fileData . "\r\n";
  $body .= "--$boundary--";
} else {
  $body = "Nom : $name\nEmail : $email\nObjet : $subject\n\n$message";
}

mail("clement@ctrempe.fr", $subject_encoded, $body, $headers);

echo 'true';
?>
