<?php
include "redirectNotPost.php";
session_start();

$requestData = $_POST["data"];

$response = Array("loggedOut" => true);
echo json_encode($response);

if($requestData){
	session_unset();
	session_destroy();
}
