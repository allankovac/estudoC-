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
    var flag = 0;
    var erro = 0;

    for(var i = 1; i<=7 ; i++){
        var checkbox = document.getElementById(i);
        if(!checkbox.checked){     
            flag = flag + 1;
        }   
    }
    
    if(nome.value == ""){
        document.getElementById("nome").style.color = "red";
        erro = erro + 1;
    }
    if(celular.value == ""){
      document.getElementById("celular").style.color = "red";
      erro = erro + 1;   
    }
    if(email.value == ""){
        document.getElementById("email").style.color = "red";
        erro = erro + 1;   
    }
    if(interece.value == ""){
        document.getElementById("interece").style.color = "red";
        erro = erro + 1;   
    }
    else{
        document.getElementById("interece").style.color = "black";
    }
    if(flag == 7){
        document.getElementById("conheceu").style.color = "red";
        erro = erro + 1;   
    }
    else{
        document.getElementById("conheceu").style.color = "black";
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
/*Fim das funções de validação */
