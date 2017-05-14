<?php
	require "Main.class.php";

	class Guest_book extends Main {
		public function insert_message($name, $message) {
			$query = "INSERT INTO guest_book(`name`, `message`) VALUES(?, ?)";
			if(!$stmt = $this->_link->prepare($query)) {
				echo $this->_link->error; 
				return false;
			}
			else {
				$stmt->bind_param("ss", $name, $message);
				$stmt->execute();
				$stmt->close();
				return true;
			}
		}

		public function show_all_mess() {
			$res = array();
			$query = "SELECT `id`, `name`, `message`, `date_mess` FROM guest_book ORDER BY `id` DESC";
			if(!$stmt = $this->_link->prepare($query)) {
				echo $this->_link->error; 
				return false;
			}
			else {
				$stmt->execute();
	    	$stmt->bind_result($id, $name, $message, $date);
	    	while ($stmt->fetch()){
					$res[]= array('id'=>$id, 'name'=>$name, 'message'=>$message, 'date'=>$date);
				}
				$stmt->close();
				echo json_encode($res);
				return true;
			}
		}
	}