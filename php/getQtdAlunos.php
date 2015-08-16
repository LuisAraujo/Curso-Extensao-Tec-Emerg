<?php

include "conexaoBD_localhost.php";

$_sqlBusca = "select count(*) from aluno";

mysql_query('SET CHARACTER SET utf8');

$result = mysql_query($_sqlBusca);

$row = mysql_fetch_assoc($result);

echo json_encode($row);

?>