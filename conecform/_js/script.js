function inputHandler(masks, max, event) {
	var c = event.target;
	var v = c.value.replace(/\D/g, '');
	var m = c.value.length > max ? 1 : 0;
	VMasker(c).unMask();
	VMasker(c).maskPattern(masks[m]);
	c.value = VMasker.toPattern(v, masks[m]);
}

var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
var tel = document.querySelector('#tel');
VMasker(tel).maskPattern(telMask[0]);
tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);

/*Inicio das funções de validação */
var form = document.getElementById("form-contato");

if(form.addEventListener){
	form.addEventListener("submit", formValidation);
}

function formValidation(evt){

	var nome = document.getElementById("input_nome");
	var email = document.getElementById("input_email");
	var interece= document.getElementById("input_interece");
	var celular = document.getElementById("tel");
	var erro = 0;

	if(nome.value == ""){
		document.getElementById("nome").style.color = "red";
		erro = erro + 1;
	}

	if(email.value == ""){
		document.getElementById("email").style.color = "red";
		erro = erro + 1;
	}
	if (erro > 0){
		return false;
	}	
}

function nomeValidador(){
	var nome = document.getElementById("input_nome");
	var validador = /[0-9]/;
	if(nome.value.match(validador)){
		document.getElementById("nome").style.color = "blue";
	}
	else{
		document.getElementById("nome").style.color = "black";
	}
}
function emailValidador(){
	var email = document.getElementById("input_email");
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!email.value.match(mailformat)){
		document.getElementById("email").style.color = "red";
		return false;
	}
	else{
		document.getElementById("email").style.color = "black";
		return true;
	}
}
/*function conheceValidador(inputConhece){
	if(inputConhece.value != "0" && inputConhece.value != "7"){
		document.getElementById("conheceu").style.color = "black";
		document.getElementById("conheceu_outros").style.display = "none";
	}
	else if(inputConhece.value == "7"){
		document.getElementById("conheceu").style.color = "black";
		document.getElementById("conheceu_outros").style.display = "inline";
	}
}*/



/*Fim das funções de validação */
