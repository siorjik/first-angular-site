<?php
	class Main {
		protected $_link;
		const DB_HOST = "localhost";
    const DB_LOGIN = "root";
    const DB_PASS = "";
    const DB_NAME = "heroes";

    public function __construct() {
    	$this->_link = new mysqli(self::DB_HOST, self::DB_LOGIN, self::DB_PASS, self::DB_NAME) or die($this->_link->connect_error);
    }
    public function __destruct() {
    	unset($this->_link);
    }
    public function __clone() {

    }

    public function clear_str($data) {
      $data = trim(strip_tags($data, "<br>"));
      return $this->_link->real_escape_string($data);
    }

    public function clear_int($data) {
      return abs((int)$data);
    }
	}