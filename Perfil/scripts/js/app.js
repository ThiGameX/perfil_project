const siteWrapper = document.querySelector("#wrapper")

const optionsToggle = document.getElementsByClassName("options-toggle")[0]
const registerOptions = document.getElementsByClassName("register-option")[0]

const loginDiv = document.getElementById("login-box")
const logUserInput = loginDiv.querySelector("#loginUser")
const logPassInput = loginDiv.querySelector("#loginPass")

const registerDiv = document.getElementById("register-box")
const regUserInput = registerDiv.querySelector("#registerUser")
const regPassInput = registerDiv.querySelector("#registerPass")

const updateUserInput = document.querySelector("#user-update-input")
const updatePassInput = document.querySelector("#pass-update-input")
const updatePassShowBtn = document.querySelector(".show-pass")
const updatePhotoInput = document.querySelector("#photo-update-input")

const usernameTitle = document.querySelector("#username-title")  
const userPhotoBox = document.querySelector("#user-photo")

const successLoginBox = document.querySelector("#success-login-message")
const successLoginHeading = document.querySelector("#login-msg")
const successRegisterBox = document.querySelector("#success-register-message")
const successLogBackground = document.querySelector("#message-bg")

const mainContainer = document.getElementsByTagName("main")[0]
const homeContainer = document.querySelector("#home-container")
const perfilContainer = document.querySelector("#perfil-container")
const configContainer = document.querySelector("#config-container")
const notLoggedContainer = document.querySelector("#not-logged-container")
const userHomeTitle = document.querySelector("#user-title")
var configQueryInput
var configServerResponseBox

const diaryBox = document.querySelector("#diary-textarea")
const wishesBox = document.querySelector("#wishes-box")
const spanusu41d = document.querySelector("#usu4-1d")
const saveDiaryButton = document.querySelector("#save-diary")

const headerNavBox = document.querySelector(".navgation")
const headerNavUL = headerNavBox.querySelector(".text-items")
const headerNavLinks = document.querySelectorAll(".header-nav-link")


window.onload = () => {
	changeNavigationStatus("disable")
	headerNav("notLogged")
}


//Clear form inputs onload
setTimeout(() => {
	logUserInput.value = ""
	logPassInput.value = ""
	regUserInput.value = ""
	regPassInput.value = ""
	// updateUserInput.value = ""
	updatePassInput.value = ""
}, 600)


// Show pass on hold button
updatePassShowBtn.onmousedown = function(){
	updatePassInput.type = "text"
}
updatePassShowBtn.onmouseup = function(){
	updatePassInput.type = "password"
}



// Side menu open/close
var optionMenuIsOpen = false
function toggleOptionsMenu(){
	if(optionMenuIsOpen == true){
		registerOptions.style.right = "-24%"
		changeMenuIconStatus("0deg", "0deg", "30%", "70%")
		optionMenuIsOpen = false
	}else{
		registerOptions.style.right = "5px"
		changeMenuIconStatus("45deg", "-45deg", "50%", "50%")
		optionMenuIsOpen = true
	}
}


// Open/close register and menu boxes
function showLogin(){
	loginDiv.style.left = "50%"
	hideRegister()
}

function showRegister(){
	registerDiv.style.left = "50%"
	hideLogin()
}

function hideLogin(){loginDiv.style.left = "-150%"}
function hideRegister(){registerDiv.style.left = "-150%"}

function changeMenuIconStatus(bfrRotation, afrRotation, bfrTop, afrTop){
	document.documentElement.style.setProperty("--before-rotation", bfrRotation);
	document.documentElement.style.setProperty("--after-rotation", afrRotation);
	document.documentElement.style.setProperty("--before-top", bfrTop);
	document.documentElement.style.setProperty("--after-top", afrTop);
}

//
function changeNavigationStatus(status){
	if(status == "enable"){
		for(let i = 0; i < headerNavLinks.length; i++){
			headerNavLinks[i].style.pointerEvents = "all"
		}
	}else{
		for(let i = 0; i < headerNavLinks.length; i++){
			headerNavLinks[i].style.pointerEvents = "none"
		}
	}
}


//Show success login popup
function showLoginSuccessMessage(box, user){
	successLoginHeading.innerText = `Bem vindo(a), ${user}!`
	box.style.transform = "translate(-50%,-50%) scale(1.2)"
	successLogBackground.style.zIndex = "999"
	successLogBackground.style.opacity = "1"
	setTimeout(() => {
		box.style.transform = "translate(-50%,-50%) scale(1)"
		setTimeout(() => {
			userHomeTitle.innerText = `Bem vindo(a), ${user}`
			box.style.transform = "translate(-50%,-50%) scale(1.2)"
			setTimeout(() => {
				box.style.transform = "translate(-50%,-50%) scale(0)"
				successLogBackground.style.opacity = "0"
				setTimeout(() => {
					successLogBackground.style.zIndex = "-1"
				},400)
			},470)
		}, 1200)
	},370)
}

// Register funtion
function register(){
	let user = regUserInput.value
	let pass = regPassInput.value

	let areFieldsEmpty = ((user == "") || (pass == ""))? true : false
	let haveSQLInjectionCharacter = (user.match("--")) || pass.match("--")? true : false

	if(areFieldsEmpty){
		callGeneralPopup("Preencha com campos válidos!")
	}else if(haveSQLInjectionCharacter){
		callGeneralPopup("Digite caracteres válidos!")
	}else{
		let credentials = {user, pass}
		$.ajax({
			type: "POST",
			dataType: "json",
			data: {data: credentials},
			url: "./scripts/php/registerNewUser.php",
			success: function(response){
				console.log(response)
				if(response.successRegistered){
					showLoginSuccessMessage(successRegisterBox)
					setTimeout(() => {
						hideRegister()
						showLogin()
					},1450)
				}else{
					callGeneralPopup(response.error)
				}
			}
		})	
	}
}


//Login function
function login(){
	let user = logUserInput.value
	let pass = logPassInput.value
	let areFieldsEmpty = ((user == "") || (pass == ""))? true : false

	if(areFieldsEmpty){
		callGeneralPopup("Preencha com campos válidos!")
	}else{
		let credentials = {user, pass}

		$.ajax({
			type: "POST",
			dataType: "json",
			data: {data: credentials},
			url: "./scripts/php/loginCheck.php",
			success: (response) => {
				successLogin(response)
			}
		})	
	}
}

function successLogin(response){
	if(response.loginSuccess == true){
		placeUserInfoIntoDOM(response)
		changeNavigationStatus("enable")
		checkIfIsAdmin(response.currentUserId)

		showLoginSuccessMessage(successLoginBox, response.currentUser)
		loginBoxesAnimation()
	}else{
		callGeneralPopup("Credênciais incorretas!")
	}
}

function checkIfIsAdmin(userId){
	if(userId == 1){
		enableAdminTools()
	}else{
		disableAdminTools()
	}
}

function enableAdminTools(){
	placeConfigButton()
	createConfigSection()
}

function disableAdminTools(){
	removeConfigButton()
	removeConfigSection()
}

function placeConfigButton(){
	let newHeaderList = `
	<li class="header-nav-link" onclick="headerNav('home')">Home</li>
	<li class="header-nav-link" onclick="headerNav('perfil')">Perfil</li>
	<li class="header-nav-link" onclick="headerNav('config')">Config.</li>
	<span class="options-toggle" onclick="toggleOptionsMenu()"></span>
	`
	headerNavUL.innerHTML = newHeaderList
}

	
function createConfigSection(){
	let configSection  = `
		<fieldset>
			<legend>Executar SQL</legend>

			<div>
				<input type="text" placeholder="Comando.." id="config-query-input">
				<button type="submit" onclick="executeAdminQuery()">Executar</button>
			</div>

			<textarea id="config-server-response" placeholder="Resposta do servidor" spellcheck="false"></textarea>
		</fieldset>
	`
	configContainer.innerHTML = configSection
}

function removeConfigButton(){
	let newHeaderList = `
	<li class="header-nav-link" onclick="headerNav('home')">Home</li>
	<li class="header-nav-link" onclick="headerNav('perfil')">Perfil</li>
	<span class="options-toggle" onclick="toggleOptionsMenu()"></span>
	`
	headerNavUL.innerHTML = newHeaderList
}

function removeConfigSection(){
	configContainer.innerHTML = ""
}

function executeAdminQuery(){
	let configQueryInput = document.querySelector("#config-query-input")
	let configServerResponseBox = document.querySelector("#config-server-response")
	let query = configQueryInput.value

	$.ajax({
		type: "POST",
		data: {data: query},
		url: "./scripts/php/executeQuery.php",
		success: (response) => {
			callGeneralPopup("Executado com sucesso!")
			configServerResponseBox.value = response
		}
	})	
}

function loginBoxesAnimation(){
	setTimeout(() => {
		hideLogin()
		hideAllContainers()
		homeContainer.style.left = "50%"
	},2400)
}

function placeUserInfoIntoDOM(userData){
	let currentUser = userData.currentUser
	let currentPhoto = userData.currentUserPhoto
	let currentDiary = userData.currentUserDiary
	let currentWishes = userData.currentUserWishes

	// Home info
	diaryBox.value = currentDiary
	wishesBox.innerHTML = `<li>${currentWishes}</li>`

	// Perfil info
	usernameTitle.innerText = currentUser
	updateUserInput.value = currentUser
	userHomeTitle.innerText = `Bem vindo(a), ${currentUser}`
	userPhotoBox.src = currentPhoto
	updatePhotoInput.value = currentPhoto
}
// Check and update user photo stats
userPhotoBox.onerror = function(){
	userPhotoBox.src = "./imgs/user-photo.png"
	updatePhotoInput.value = "Link inválido armazenado!"
}

function getLoggedUserInfoAndPlaceIntoDOM(){
	let perm = "indeed"
	$.ajax({
		type: "POST",
		dataType: "json",
		data: {data: perm},
		url: "./scripts/php/getLoggedUserData.php",
		success: function(response){
			placeUserInfoIntoDOM(response)
		}
	})	
}

// Save personal user data
function saveDiary(){
	let diaryContent = diaryBox.value
	$.ajax({
		type: "POST",
		dataType: "json",
		data: {data: diaryContent},
		url: "./scripts/php/storeDiaryContent.php",
		success: function(response){
			callGeneralPopup("Salvo com sucesso!")
		}
	})	
}
function savePhoto(){
	let url = updatePhotoInput.value
	let photoUrl = url
	let data = {photoUrl}
	
	userPhotoBox.src = url

	$.ajax({
		type: "POST",
		dataType: "json",
		data: {data},
		url: "./scripts/php/storeUserPhoto.php",
		success: function(response){
			callGeneralPopup("Atualizada com sucesso!")
		}
	})
}

function updatePrivateInfo(ignoreEmpty){
	let user = updateUserInput.value
	let pass = updatePassInput.value
	let info = {user, pass}

	let areFieldsEmpty = ((user == "") || (pass == ""))? true : false
	if(ignoreEmpty){
		areFieldsEmpty = false
	}

	if(!areFieldsEmpty){
		userHomeTitle.innerText = `Bem vindo(a), ${user}`
		usernameTitle.innerText = user
		$.ajax({
			type: "POST",
			dataType: "json",
			data: {data: info},
			url: "./scripts/php/updatePrivateInfo.php",
			success: function(response){
				callGeneralPopup(response.message)
			}
		})
	}else{
		callGeneralPopup("Digite campos válidos!")
	}
}


function logout(){
	$.ajax({
		type: "POST",
		dataType: "json",
		data: {data: "logout"},
		url: "./scripts/php/logout.php",
		success: function(response){
			window.location.reload()
		}
	})
}


// General popup functions
function callGeneralPopup(message){
	let popup = createGeneralPopup(message)
	let popupContentBox = popup.querySelector(".popup-content")
	siteWrapper.appendChild(popup)

	popup.addEventListener("click", function(event){
		let clickedElem = event.target
		closeGeneralPopup(popup, popupContentBox, clickedElem)
	})
	
	timeoutPopup(popup, popupContentBox)
}
function createGeneralPopup(message){
	let popup = document.createElement("div")
	popup.id = "general-popup-wrapper"
	popup.innerHTML = `
	<div class="gen-popup-item popup-content">
		<p class="gen-popup-item">${message}</p>
		<span class="gen-popup-item general-popup-timebar"></span>
	</div>`
	return popup
}
var removePopupTimeout
function timeoutPopup(popup, popupContentBox){
	setTimeout(() => {
		popupContentBox.style.left = "2vh"
		document.documentElement.style.setProperty("--popup-timebar-left", "-105%")
		removePopupTimeout = setTimeout(() => {
			removePopupFromDOM(popup, popupContentBox)
		},4000)
	},100)
}
function removePopupFromDOM(popup, popupContentBox){
	popupContentBox.style.left = "-220px"
	setTimeout(() => {
		document.documentElement.style.setProperty("--popup-transition", "0s")
		popup.remove()
		document.documentElement.style.setProperty("--popup-timebar-left", "0")
		document.documentElement.style.setProperty("--popup-transition", "4s linear")
	},500)
}
// Close popup when click on it
function closeGeneralPopup(popup, popupContentBox, clickedElem){
	let clickedElemClass = clickedElem.classList[0]
	if((clickedElem.id == "general-popup-wrapper")){
		removePopupFromDOM(popup, popupContentBox)
		clearTimeout(removePopupTimeout)
	}else if(clickedElemClass.match("gen-popup-item")){
		removePopupFromDOM(popup, popupContentBox)
		clearTimeout(removePopupTimeout)
	}
}



// Header navigation
function headerNav(link){
	hideAllContainers()
	eval(`${link}Container.style.left = "50%"`)
}

function hideAllContainers(){
	homeContainer.style.left = "-150vw"
	perfilContainer.style.left = "-150vw"
	configContainer.style.left = "-150vw"
	notLoggedContainer.style.left = "-150vw"
}