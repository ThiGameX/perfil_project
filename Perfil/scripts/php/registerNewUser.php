<?php
include "databaseConnection.php";
include "redirectNotPost.php";


$requestData = $_POST["data"];
$user = mysqli_real_escape_string($connection, $requestData["user"]);
$pass = mysqli_real_escape_string($connection, $requestData["pass"]);
$userAlreadyRegistered = false;


// Check if username is already registered
$selectQuery = mysqli_query($connection, "select * from users;");
while ($row = mysqli_fetch_assoc($selectQuery)) {
	if (($row["user"] == $user)){
		$userAlreadyRegistered = true;
	}
}

// If already registered answer "fail register"
if($userAlreadyRegistered){
	$resp["successRegistered"] = false;
	$resp["error"] = "Usuário já registrado!";
}else{
	// Else insert user info into database
	$insertQuery = "insert into users(user, password) values('$user','". md5($pass) ."');";
	if (mysqli_query($connection, $insertQuery)){
		$resp["successRegistered"] = true;
	}else{
		$resp["error"] = "Falha ao registrar!";
	}
}

echo json_encode($resp);

?>