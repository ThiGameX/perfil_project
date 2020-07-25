<?php 
session_start();

$str = "";

if(isset($_SESSION["logged"])){
	if($_SESSION["logged"]){
		$str = $_SESSION["loggedUser"] . ", bem vindo(a).";
	}else{
		$str = "Ta logado nao sai dae!";
	}
}else{
	$str = "Ta logado nao sai dae!";
}


echo "<p>".$str."</p>";

?>