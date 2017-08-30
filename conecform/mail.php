<?php
include "banco.php";

$cadastrar = array();
$conheceu = array();
    
if(isset($_POST['nome']) && $_POST['nome'] != ""){  
    $cadastrar['bdnome'] =  $_POST['nome'];
    if(isset($_POST['celular']) && $_POST['celular'] != ""){
       $cadastrar['bdcelular'] =  $_POST['celular'];
    }
    if(isset($_POST['email']) && $_POST['email'] != ""){
       $cadastrar['bdemail'] =  $_POST['email'];
    }
    if(isset($_POST['interece']) && $_POST['interece'] != ""){
       $cadastrar['bdinterece'] =  $_POST['interece'];
    }
    
    $conheceu = $_POST['conhece'];
    
    for($i=0;$i<count($conheceu);$i++){
        switch ($conheceu[$i]){
            case '1':
                $cadastrar['facebook'] = 1;
                break;
            case '2':
                $cadastrar['youtube'] = 1;
                break;
            case '3':
                $cadastrar['google'] = 1;
                break;
            case '4':
                $cadastrar['revista'] = 1; 
                break;
            case '5':
                $cadastrar['evento'] = 1;
                break;
            case '6':
                $cadastrar['amigos'] = 1;
                break;
            case '7':
                $cadastrar['outros'] = 1;
                break;
        }
    }
   
    adicionando($link,$cadastrar);
}

/*$formcontent="E-mail: {$cadastrar['bdemail']}";
$recipient = "allan@conecturma.com.br";
$subject = "[Conecturma] Registro Website";
$mailheader = "De: {$cadastrar['bdemail'] } \r\n";
if(mail($recipient, $subject, $formcontent, $mailheader)){
    echo "Enviado!";
}
else{
    echo "Erro!";
}*/
include "index.html";
?>