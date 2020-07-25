<?php
include "databaseConnection.php";
include "redirectNotPost.php";
session_start();

$requestData = $_POST["data"];
$photoUrl = mysqli_real_escape_string($connection, $requestData["photoUrl"]);
$userId = $_SESSION["loggedUserId"];

$updatePhotoQuery = 'update users set photo_url = "'.$photoUrl.'" where id = '.$userId.';';

$resp = Array("query" => $updatePhotoQuery);

if (mysqli_query($connection, $updatePhotoQuery)){
	echo json_encode($resp);
}

?>