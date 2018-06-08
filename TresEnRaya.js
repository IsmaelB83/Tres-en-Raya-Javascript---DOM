// Declaracion de constantes
const players = [["#0000cc", "X"],["#cc0000", "O"]];
const colours = ["#212529","#00cc00"]
// Declaracion de variables
var playerTurn = 0;
var playerCount = 0;
var btnRestart = document.querySelector("#restart");
var btnCeldas = document.querySelectorAll(".celda");

// Asociar eventos
btnRestart.addEventListener("click", restartGame)
for (var i=0;i<btnCeldas.length;i++) {
	btnCeldas[i].addEventListener("click", cambiarCelda);
	btnCeldas[i].addEventListener("mouseover", overCelda);
	btnCeldas[i].addEventListener("mouseout", outCelda);
}

// Funciones del juego
function overCelda (e) {
	if (e.target.textContent == "" ) {
		e.target.style.backgroundColor = colours[1];
	}
}

function outCelda (e) {
	if (e.target.textContent == "" ) {
		e.target.style.backgroundColor = colours[0];
	}
}

function cambiarCelda () {
	if (this.textContent == "" ) {
		this.style.backgroundColor = players[playerTurn][0];
		this.textContent = players[playerTurn][1];
		playerTurn = playerTurn==0?1:0;
		playerCount++;
		checkWin();
	}
}

function restartGame() {
	playerTurn = 0;
	playerCount = 0;
	for (var i=0;i<btnCeldas.length;i++) {
		btnCeldas[i].style.backgroundColor = colours[0];
		btnCeldas[i].textContent = "";
	}
	var txtWin = document.querySelector("#textWin");
	txtWin.textContent = ""
	txtWin.className="text-hide";
}

function checkWin () {
	var txtWin = document.querySelector("#textWin");
	if (playerCount == 9) {
		txtWin.textContent = "Tablas!!!"
		txtWin.className="";
	}
}