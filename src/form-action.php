<?php
header("Content-Type: text/html; charset=utf-8");

$name = empty($_POST['name']) ? '' : $_POST['name'];
$phone = empty($_POST['tel']) ? '' : $_POST['tel'];
$comment = empty($_POST['question']) ? '' : $_POST['question'];

if (!empty($_POST['question']) && !empty($_POST['name'])) {
	$fileContent = "Телефон для связи = ". $phone . ", имя = " . $name . ", вопрос клиента = " . $comment;
} else if (!empty($_POST['name'])) {
	$fileContent = "Телефон для связи = ". $phone . ", имя = " . $name;
} else {
	$fileContent = "Телефон для связи = ".$phone;
}

mail("vitya898989@gmail.com", "Вопрос с лендинга free diving", $fileContent, "From: kayakingfuerteventura@gmail.com");

?>