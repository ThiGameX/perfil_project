<?php 
include "redirectNotPost.php";
include "databaseConnection.php";
session_start();

$query = $_POST["data"];
$userId = $_SESSION["loggedUserId"];

if($userId == 1){	
	$dump = mysqli_query($connection, $query);
	if($dump){
		$response = "Query \"$query\" executada com sucesso!";
	}
}else{
	$response = "Você nao tem permissão para executar esse comando!";
}

echo $response;