<?php
	require "classes/Guest_book.class.php";
	$link = new Guest_book();
  $err_msg = "";

	$data = json_decode(file_get_contents("php://input"));
	if($_SERVER['REQUEST_METHOD'] == "POST") {
		if(isset($data->loadMess)) $link->show_all_mess();
		else {
			$name = $link->clear_str(str_replace("\n", "<br>", $data->name));
			$message = $link->clear_str(str_replace("\n", "<br>", $data->message));

			if(!$link->insert_message($name, $message)) $err_msg = "Error insert!";
			if(!$link->show_all_mess()) $err_msg = "Error show mess!";
		}
	}

	if(!empty($err_msg)) echo $err_msg;
	//else echo "All good!"; 