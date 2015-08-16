<?php

include "conexaoBD_localhost.php";

$nome = "luis";
$cpf = "cpf";
$email = "email";
$instituicao = "IFBA";
$cidade = "Santo";
$escolaridade = "EM";




$_sqlCadastro = "INSERT INTO 'aluno'('id','nome', 'cpf', 'email', 'instituicao', 'cidade', 'escolaridade')
VALUES ('',$nome, $cpf, $email, $instituicao, $cidade, $escolaridade);";

$resp = mysql_query($_sqlCadastro);

echo $resp;

//echo "teste2";



?>