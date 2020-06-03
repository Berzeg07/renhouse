<?php
$to = "amra_sk@mail.ru";
$phone = $_POST['phone'];
$email = $_POST['email'];
$name = $_POST['name'];
$income =$_POST['income'];
$investment = $_POST['investment'];
$when = $_POST['when'];
$when2 = $_POST['when2'];

// Формирование заголовка письма
$subject  = "Новое сообщение";
$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

$msg  = "<html><body>";
	$msg .= "<h2>Новое сообщение</h2>\r\n";
if(!empty($name) && !empty($phone)&& !empty($email) && !empty($income)  && !empty($investment) && !empty($when) && !empty($when2)) {
	$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
	$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
	$msg .= "<p><strong>Планируемая самма дохода с RenthHouse в месяц:</strong> ".$income."</p>\r\n";
	$msg .= "<p><strong>Планируемая сумма ваших инвестиций</strong> ".$investment."</p>\r\n";
	$msg .= "<p><strong>Когда планируете приобрести франшизу и запустить новый бизнес? </strong> ".$when."</p>\r\n";
	$msg .= "<p><strong>Когда планируете приобрести франшизу и запустить новый бизнес? </strong> ".$when2."</p>\r\n";
} elseif (!empty($name) && !empty($phone) && !empty($email)){
	$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
	$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
}

$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>