function log(msg){
	console.log(msg)
}

const optionsToggle = document.getElementsByClassName("options-toggle")[0]
const registerOptions = document.getElementsByClassName("register-option")[0]

const loginDiv = document.getElementById("login-box")
const logUserInput = loginDiv.querySelector("#loginUser")
const logPassInput = loginDiv.querySelector("#loginPass")

const registerDiv = document.getElementById("register-box")
const regUserInput = registerDiv.querySelector("#registerUser")
const regPassInput = registerDiv.querySelector("#registerPass")




var optionMenuIsOpen = false
function toggleOptionsMenu(){
	if(optionMenuIsOpen == true){
		registerOptions.style.right = "-24%"
		openIcon()
		optionMenuIsOpen = false
	}else{
		registerOptions.style.right = "5px"
		closeIcon()
		optionMenuIsOpen = true
	}
}


//Functions
function showLogin(){
	loginDiv.style.left = "50%"
	hideRegister()
}
function hideLogin(){loginDiv.style.left = "-150%"}

function showRegister(){
	registerDiv.style.left = "50%"
	hideLogin()
}
function hideRegister(){registerDiv.style.left = "-150%"}

function openIcon(){
	document.documentElement.style.setProperty("--before-rotation", "0deg");
	document.documentElement.style.setProperty("--after-rotation", "0deg");
	document.documentElement.style.setProperty("--before-top", "30%");
	document.documentElement.style.setProperty("--after-top", "70%");
}
function closeIcon(){
	document.documentElement.style.setProperty("--before-rotation", "45deg");
	document.documentElement.style.setProperty("--after-rotation", "-45deg");
	document.documentElement.style.setProperty("--before-top", "50%");
	document.documentElement.style.setProperty("--after-top", "50%");
}

var regUser, regPass, validCred
function register(){
	regUser = regUserInput.value
	regPass = regPassInput.value

	validCred = ((regUser == "") || (regPass == "") ? false : true)

	if(validCred){
		saveRegInfo(regUser, regPass)
	}else{
		alert("Credênciais inválidas")
	}
}

function saveRegInfo(user,pass){

	var atualLength = (localStorage.length).toString()

	localStorage.setItem("(PERFILSITE)userId"+atualLength, user)
	localStorage.setItem("(PERFILSITE)passId"+atualLength, pass)

	hideRegister()
	alert("Cadastro feito com sucesso!")
}

var logUser, logPass, validInput
function login(){
	logUser = logUserInput.value
	logPass = logPassInput.value

	validInput = ((logUser == "") || (logPass == "") ? false : true)

	if(validInput){

		loginSuccess = false

		for(let i=0; i <= localStorage.length ;i++){
			if((logUser == localStorage.getItem("(PERFILSITE)userId"+i)) && (logPass == localStorage.getItem("(PERFILSITE)passId"+i))){
				loginSuccess = true
			}
		}

		if(loginSuccess){
			alert("Logado com sucesso!")
		}else{
			alert("Login incorreto!")

		}
	}else{
		alert("Credênciais inválidas!")
	}

}