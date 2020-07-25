<?php 
include "redirectNotPost.php";

$connection = mysqli_connect("localhost", "root","");
$selectedBase = mysqli_select_db($connection, "perfil_base");

if ($connection->connect_errno) {
	echo "Erro na conexão";
}

?>