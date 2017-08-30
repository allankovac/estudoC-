<?php

$host = "127.0.0.1";
$usuario = "root";
$senha = "";
$banco = "conecform";
$link = mysqli_connect($host,$usuario,$senha,$banco);

if(!$link){
   echo "Erro ao conectar no banco " + mysqli_connect_error();
   die();
}

function adicionando($link,$cadastrar){
    $sqlGravar = "INSERT INTO form_contato (nome , celular, email, pq_interece,como_conheceu_facebook,como_conheceu_youtube,como_conheceu_google,como_conheceu_revista,como_conheceu_evento,como_conheceu_amigo,como_conheceu_outros)
                   VALUES(
                    '{$cadastrar['bdnome']}',
                    '{$cadastrar['bdcelular']}',
                    '{$cadastrar['bdemail']}',
                    '{$cadastrar['bdinterece']}',
                    '{$cadastrar['facebook']}',
                    '{$cadastrar['youtube']}',
                    '{$cadastrar['google']}',
                    '{$cadastrar['revista']}',
                    '{$cadastrar['evento']}',
                    '{$cadastrar['amigos']}',
                    '{$cadastrar['outros']}'
                    )" ;    
    mysqli_query($link,$sqlGravar);
}