<?php

// As credenciais de autenticação são feitas por variáveis de ambiente
// include("env.php");
// Caso tenha uma outra forma de salvar as variáveis de ambiente, delete a linha acima

$host = "localhost";
$user = "root";
$password = "root";
$database =  "patrocine";

$con = mysqli_connect($host, $user, $password, $database) or die("Não foi possível conectar-se ao Banco de Dados");
