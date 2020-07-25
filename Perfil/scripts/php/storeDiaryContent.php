<?php
include "databaseConnection.php";
include "redirectNotPost.php";
session_start();

$requestData = $_POST["data"];
$diaryText = mysqli_real_escape_string($connection, $requestData);
$userId = $_SESSION["loggedUserId"];

$updateDiaryQuery = "update users set diaryContent = '$diaryText' where id = $userId;";

$resp = Array("query" => $updateDiaryQuery);

if (mysqli_query($connection, $updateDiaryQuery)){
	echo json_encode($resp);
}

?>