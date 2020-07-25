<?php
include "databaseConnection.php";
include "redirectNotPost.php";

$requestData = $_POST["data"];
$response = Array("1" => "fill");

$userTry = mysqli_real_escape_string($connection, $requestData["user"]);
$passTry = mysqli_real_escape_string($connection, $requestData["pass"]);

$query = mysqli_query($connection, "select * from users;");
while ($row = mysqli_fetch_assoc($query)) {
	if (($row["user"] == $userTry) && ($row["password"] == md5($passTry))){
			
			// Create response variable 
		$response["loginSuccess"] = true;
		$response["currentUser"] = $row["user"];
		$response["currentUserId"] = $row["id"];
		$response["currentUserDiary"] = $row["diaryContent"];
		$response["currentUserWishes"] = $row["wishes"];
		$response["currentUserPhoto"] = $row["photo_url"];

			// Start a session with current user
		session_start();
		$_SESSION["logged"] = true;
		$_SESSION["loggedUser"] = $row["user"];
		$_SESSION["loggedUserId"] = $row["id"];

	}else{
		if(!isset($response["loginSuccess"])){
			$response["loginSuccess"] = false; 
		}
	}
}

echo json_encode($response);

?>