<?php
	require "Main.class.php";

	class Registry extends Main {
		public function registry_user($login, $email, $pass) {
			$query = "INSERT INTO users (`login`, `email`, `password`) VALUES(?, ?, ?)";
			if(!$stmt = $this->_link->prepare($query)) {
				echo $this->_link->error; 
				return false;
			}
			else {
				$stmt->bind_param("sss", $login, $email, $pass);
				$stmt->execute();
				$stmt->close();
				return true;
			}
		}
	}