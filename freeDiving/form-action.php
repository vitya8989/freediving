<?php
header("Content-Type: text/html; charset=utf-8");

$name = empty($_POST['name']) ? 'Клиент не представился' : $_POST['name'];
$phone = empty($_POST['tel']) ? '' : $_POST['tel'];
$comment = empty($_POST['question']) ? 'Клиент не задал вопрос' : $_POST['question'];

$fileContent = "Телефон для связи = ". $phone . ", имя = " . $name . ", вопрос клиента = " . $comment;

mail("vitya898989@gmail.com", "Вопрос с лендинга free diving", $fileContent, "From: kayakingfuerteventura@gmail.com");

?>