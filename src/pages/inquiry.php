<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');

$data = json_decode(file_get_contents("php://input", true));

$name = $data["name"];
$email = $data["email"];
$subject = $data["subject"];
$message = $data["message"];

echo json_encode(["success" => true, "name" => $name, "email" => $email, "subject" => $subject, "message" => $message]);
