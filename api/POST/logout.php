<?php

include("../conexao.php");
include("../GET/validateSession.php");

# Verifica se o usuário está autenticado
if (!validarSession($con)) return header("Location: ../../dashboard/");

$sid = $_COOKIE["SID"];
$stoken = $_COOKIE["STOKEN"];

setcookie("SID", "");
setcookie("STOKEN", "");

$sql = "DELETE FROM `sessions` WHERE `id` = '$sid' AND `token` = '$stoken'";
mysqli_query($con, $sql);
header("Location: ../../dashboard/");
