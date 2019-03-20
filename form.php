<?php

$to = "adamiv1996@gmail.com";
$sitename = "Voyage";
$formname = trim($_POST["title"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = '
<html>
	<head>
		<title>'.$sitename.'</title>
	</head>
	<body>
		<table border="1" cellpadding="0" cellspacing="0" style="margin:0; padding:0" bgcolor="#f8f8f8" border-collapse: collapse; width: 100%;>
			<tr bgcolor="#ffffff" style="padding: 10px;">
				<th colspan="2" style="padding: 10px;">'.$formname.'</th>
			</th>
			<tr style="padding: 10px;">
				<td border="0" style="padding: 10px;">Имя</td>
				<td border="0" style="padding: 10px;">'.$name.'</td>
			</tr>
			<tr bgcolor="#ffffff" style="padding: 10px;">
				<td border="0" style="padding: 10px;">Телефон</td>
				<td border="0" style="padding: 10px;">'.$phone.'</td>
			</tr>
		</table>
	</body>
</html>';
$from = "Voyage <Shumlianskiia@gmail.com>\r\n";
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= 'From: ' .$from.'';
$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($to, $pagetitle, $message, $headers);