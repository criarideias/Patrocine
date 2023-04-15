<?php

$sID = $_GET["id"];
$sTOKEN = $_GET["token"];
$expiracao = intval($_GET["expiracao"]);

$cookieOptions = array(
    'expires' => $expiracao,
    'path' => '/',
    'httponly' => true
);

setcookie("SID", $sID, $cookieOptions);
setcookie("STOKEN", $sTOKEN, $cookieOptions);

header("Location: ../../dashboard/index.php");
