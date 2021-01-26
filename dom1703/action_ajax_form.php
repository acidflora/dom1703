<?php

if ($_POST["phone"]) { 

	// Формируем массив для JSON ответа
    $result = array(    	
    	'phonenumber' => $_POST["phone"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}
?>