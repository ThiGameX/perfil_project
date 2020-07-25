<?php 
session_start();
define("LOGGED", false);
$LOGGED = false;

if(isset($_SESSION["logged"])){
	if($_SESSION["logged"] == 1){
		$LOGGED = true;
	}
}

?>

<!DOCTYPE html>
	<html>
		
		<head>
			
			<title>Perfil</title>
			
			<meta charset="utf-8">	

			<link rel="stylesheet" href="style.css">
			<link href="https://fonts.googleapis.com/css?family=Anton|Kanit|Suez+One&display=swap" rel="stylesheet">
			<script type="text/javascript" src="scripts/js/jquery-min.js"></script>

		</head>
		
		<body id="body">	
		
			<div class="container" id="wrapper">

				<header>
					<div id="logo"></div>

					<div class="navgation">
						<ul class="text-items">
							<li class="header-nav-link" onclick="headerNav('home')">Home</li>
							<li class="header-nav-link" onclick="headerNav('perfil')">Perfil</li>
							<span class="options-toggle" onclick="toggleOptionsMenu()"></span>
						</ul>
						<div class="register-option">
							<h2 onclick="showLogin()">Login</h2>
							<h2 onclick="showRegister()">Registrar</h2>
							<h2 onclick="logout()">Sair</h2>
						</div>
					</div>
				</header>

				<main>
					
					<div id="home-container" class="main-container">
						
						<h1 id="user-title">Olá, user</h1><span id="usu4-1d"></span>

						<div id="home-box">
							<div id="diary-box">
								<h2 class="home-box-title">Seu diário</h2>
								<textarea id="diary-textarea" spellcheck="false"></textarea>
								<button id="save-diary" onclick="saveDiary()">Salvar</button>
							</div>	
						
							<div id="interesses">
								<h2 class="home-box-title">Seus interesses</h2>

								<ul id="wishes-box"></ul>
							</div>
						</div>
						
					</div>
					

					<div id="perfil-container" class="main-container">
						
						<div id="perfil-box">
							
							<div class="user-light-info">
								
								<img src="imgs/user-photo.png" draggable="false" id="user-photo">

								<h2 id="username-title">User</h2>

								<span></span>
								<span></span>
								<span></span>

							</div>

							<div class="user-private-info">
								
								<div>
									<label>Usuario:&nbsp&nbsp</label>
									<input type="text" 
										   id="user-update-input"
										   autocomplete="off"
										   spellcheck="false">
								</div>
								
								<div>
									<label>Senha:&nbsp&nbsp&nbsp&nbsp</label>
									<input type="password" 
										   id="pass-update-input"
										   autocomplete="off"
										   spellcheck="false">
										   <span class="show-pass">O</span>
								</div>

								<button onclick="updatePrivateInfo(true)">Alterar</button>

							</div>

							<div class="user-personal-info">
								
								<div>
									<h2>Foto</h2>
									<input type="text" 
										   id="photo-update-input" 
										   placeholder="Insira a url da foto">

									<button onclick="savePhoto()">Salvar</button>
								</div>
								
								<div>
									<h2>Interesses</h2>
									<input type="text" id="wishes-update-input">
									<button onclick="">Salvar</button>
								</div>

							</div>

						</div>
						
					</div>


					<div id="not-logged-container" class="main-container">
						<?php 

						if(!$LOGGED){
							echo "<h2>Voce não está logado!</h2>";
						}

						?>
					</div>
					<div id="config-container" class="main-container"></div>
				</main>


					<!-- Login div -->
				<form action="javascript:void(0)" method="POST" autocomplete="off">
					<div id="login-wrapper">
					<div id="login-box">	
						<h1>Login</h1>
						<span onclick="hideLogin()"></span>

						<img src="imgs/icons/user.png" class="img1"></img>
						<input type="text" 
								placeholder="Username" 
								spellcheck="false" 
								autocomplete="off" 
								id="loginUser">

						<img src="imgs/icons/lock.png" class="img2"></img>
						<input type="password" 
								placeholder="Password" 
								spellcheck="false" 
								autocomplete="off" 
								id="loginPass">

						<input id="loginSubmitButton" type="submit" value="Submit" onclick="login(false)">
						<div class="submit-back"></div>
					</div>
					</div>
				</form>
				

					<!-- Register div -->
				<form action="javascript:void(0)">
					<div id="register-wrapper">
					<div id="register-box">	
						<h1>Register</h1>
						<span onclick="hideRegister()"></span>

						<img src="imgs/icons/user.png" class="img1"></img>
						<input type="text" 
								placeholder="Username" 
								spellcheck="false" 
								autocomplete="off" 
								id="registerUser">

						<img src="imgs/icons/lock.png" class="img2"></img>
						<input type="password" 
								placeholder="Password" 
								spellcheck="false" 
								autocomplete="off" 
								id="registerPass">

						<input type="submit" value="Submit" onclick="register()">
						<div class="submit-back"></div>
					</div>
					</div>
				</form>
				

					<!-- Login/register success messages -->
				<div id="message-bg"></div>
					<div id="success-login-message">
						<h1 id="login-msg">Bem vindo(a), user!</h1>
					</div>	
					<div id="success-register-message">
						<h1 id="register-msg">Registrado com sucesso!</h1>
					</div>



					<!-- General PopUp -->
				<!--  
				<div id="general-popup-wrapper">
					<div class="popup-content gen-popup-item">
						<p class="gen-popup-item">Mensagem de erro aqui, ela pode ser até aqui!</p>
						<span class="general-popup-timebar gen-popup-item"></span>
					</div>
				</div>
 				 -->

				

				<!-- <script type="text/javascript" src="scripts/js/localSystem.js"></script> -->
				<script type="text/javascript" src="scripts/js/app.js"></script>
				<?php 
				if(isset($_SESSION["logged"])){
					if($LOGGED == true){
						echo "
						<script>
							$(document).ready(function(){
								setTimeout(()=>{
									headerNav('home')
									changeNavigationStatus('enable')
									getLoggedUserInfoAndPlaceIntoDOM()
								},100)
							})
							
						</script>
						";
					}
				}
				?>

				<?php 

				if($LOGGED){
					if($_SESSION["loggedUserId"] == 1){
						echo "<script>checkIfIsAdmin('1')</script>";
					}
				}

				?>

			</div>

		</body>
		
	</html>
			