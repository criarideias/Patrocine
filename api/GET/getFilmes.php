<?php

header("Access-Control-Allow-Origin: *");

include("../conexao.php");

$slider = null;
if (isset($_GET["slider"])) {
    if ($_GET["slider"] == "1") {
        $slider = "true";
    } else {
        $slider = "false";
    }
}

$terminado = null;
if (isset($_GET["terminado"])) {
    if ($_GET["terminado"] == "1") {
        $terminado = "<";
    } else {
        $terminado = ">";
    }
}

$sql = "SELECT * FROM `filmes`";

if ($terminado != null) {
    $sql = "SELECT * FROM `filmes` WHERE `dataDeTermino` " . $terminado . " NOW()";
}

if ($slider != null) {
    $sql = "SELECT * FROM `filmes` WHERE `slider` = $slider";
}

$result = mysqli_query($con, $sql);
$array = array();

while ($filme = mysqli_fetch_array($result)) {
    $array[] = $filme;
}

echo json_encode($array);
