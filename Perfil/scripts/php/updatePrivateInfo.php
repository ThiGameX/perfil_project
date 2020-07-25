<?php
include "databaseConnection.php";
include "redirectNotPost.php";
session_start();

$requestData = $_POST["data"];
$newUser = mysqli_real_escape_string($connection, $requestData["user"]);
$newPass = md5(mysqli_real_escape_string($connection, $requestData["pass"]));
$userId = $_SESSION["loggedUserId"];


if($newPass == md5("")){
	$updatePrivate = "update users set `user`='".$newUser."' where id = '".$userId."';";
	$resp["message"] = "Nome de usuário atualizado com sucesso!";
}else{
	$updatePrivate = "update users set `user`='".$newUser."', `password`='".$newPass."' where id = '".$userId."';";
	$resp["message"] = "Dados atualizados com sucesso!";
}

if (mysqli_query($connection, $updatePrivate)){
	echo json_encode($resp);
}

?>