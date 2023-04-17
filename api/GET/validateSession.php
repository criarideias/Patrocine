<?php

$user = array();

function destruirCookies()
{
    if (isset($_COOKIE["SID"])) {
        setcookie("SID", "");
    }

    if (isset($_COOKIE["STOKEN"])) {
        setcookie("STOKEN", "");
    }
}

function validarSession($con)
{
    if (!isset($_COOKIE["SID"]) || !isset($_COOKIE["STOKEN"])) return false;

    $sID = mysqli_real_escape_string($con, $_COOKIE["SID"]);
    $sTOKEN = mysqli_real_escape_string($con, $_COOKIE["STOKEN"]);

    $sqlSession = "SELECT `user`, `ip` FROM `sessions` WHERE `id` = '$sID' and `token` = '$sTOKEN' and `dataDeExpiracao` < NOW()";
    $resultSession = mysqli_query($con, $sqlSession);
    $rowSession = mysqli_num_rows($resultSession);

    if ($rowSession == 0) return false;

    $session = mysqli_fetch_array($resultSession);
    $ip = $_SERVER["REMOTE_ADDR"];

    if ($session["ip"] != $ip) {
        $sqlUpdateIP = "UPDATE `sessions` SET `ip` = '$ip' WHERE `id` = '$sID'";
        mysqli_query($con, $sqlUpdateIP);
    }

    $userID = $session["user"];

    $sqlUSER = "SELECT `id`, `nome` FROM `usuarios` WHERE `id` = '$userID'";
    $resultUSER = mysqli_query($con, $sqlUSER);

    $_SESSION["user"] = mysqli_fetch_array($resultUSER);

    return true;
}
