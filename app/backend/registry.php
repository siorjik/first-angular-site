<?php
	require "classes/Registry.class.php";
	$link = new Registry();
  $err_msg = "";

  $data = json_decode(file_get_contents("php://input"));

  if($_SERVER['REQUEST_METHOD'] == "POST") {
  	//echo $data->login." / ".$data->email." / ".$data->pass;
  	$login = $link->clear_str($data->login);
  	$email = $link->clear_str($data->email);
  	$pass = $link->clear_str($data->pass);

  	if(!$link->registry_user($login, $email, $pass)) $err_msg = "Error registry!";

  	if(!empty($err_msg)) echo $err_msg;
  	else echo $login;
  }