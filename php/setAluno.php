<?php

include "conexaoBD_localhost.php";

$nome = utf8_decode($_POST['nome']);
$cpf = utf8_decode($_POST['cpf']);
$email = utf8_decode($_POST['email']);
$instituicao = utf8_decode($_POST['instituicao']);
$cidade = utf8_decode($_POST['cidade']);
$escolaridade = utf8_decode($_POST['escolaridade']);

$query = "INSERT INTO aluno (id,nome,cpf,email,instituicao,cidade,escolaridade)
VALUES (null,'$nome','$cpf', '$email', '$instituicao', '$cidade', '$escolaridade')";

$resp = mysql_query($query) or die(mysql_error());

echo $resp;

?>