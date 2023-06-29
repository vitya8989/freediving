<?
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('kayakingfuerteventura@gmail.com');
$mail->addAddress('vitya898989@gmail.com');
$name = !empty($_POST['name']) ? $_POST['name'] : 'Клиент не указал имя';
$question = !empty($_POST['question']) ? $_POST['question'] : 'Клиент не задал вопрос';
$mail->Subject = 'Вопрос с лендинга free diving';
        $body = '<html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
						  		<p>Имя: '.$name.'</p>			
								<p>Телефон: '.$_POST['tel'].'</p>
								<p>Вопрос: '.$question.'</p>
                    </body>
                </html>';
        $mail->Body = $body;
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}
	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
