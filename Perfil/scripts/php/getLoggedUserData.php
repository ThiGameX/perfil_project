<?php
include "databaseConnection.php";
include "redirectNotPost.php";
session_start();

$userId = $_SESSION["loggedUserId"];
$response = Array("1" => "filled");

$query = mysqli_query($connection, "select * from users where id = '$userId';");
while ($row = mysqli_fetch_assoc($query)) {
		// Create response variable 
	$response["loginSuccess"] = true;
	$response["currentUser"] = $row["user"];
	$response["currentUserDiary"] = $row["diaryContent"];
	$response["currentUserWishes"] = $row["wishes"];
	$response["currentUserPhoto"] = $row["photo_url"];
}

echo json_encode($response);

?>