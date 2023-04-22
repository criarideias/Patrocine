<?php

header("Access-Control-Allow-Origin: *");

include("../conexao.php");

if (!isset($_GET["ids"])) {
    echo "ERRO: Nenhum ID foi especificado";
    return 400;
}

$ids = explode(",", $_GET["ids"]);

if (sizeof($ids) > 16) {
    echo "Limite de 16 IDs por query";
    return 400;
}

$sql = "SELECT * FROM `programacao` ";
$default = true;

foreach ($ids as $id) {
    if ($default) {
        $sql = $sql . "WHERE `filme` = '$id' ";
        $default = false;
    } else {
        $sql = $sql . "OR `filme` = '$id' ";
    }
}

$result = mysqli_query($con, $sql);

if (!$result || $result == null) {
    echo "Nenhum filme com esses ids foi encontrado";
    return 404;
}

$arrayResult = array();

while ($horario = mysqli_fetch_array($result)) {
    $arrayResult[] = $horario;
}

echo json_encode($arrayResult);
