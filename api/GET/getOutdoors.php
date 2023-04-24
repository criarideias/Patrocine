<?php

header("Access-Control-Allow-Origin: *");

include("../conexao.php");

$sql = "SELECT * FROM `outdoors`";
$result = mysqli_query($con, $sql);

if (!$result) {
    echo "Ocorreu um erro desconhecido ao tentar puxar os dados dos Outdoors";
    return 403;
}

$outdoors = array();

while ($ad = mysqli_fetch_array($result)) {
    $outdoors[] = $ad;
}

echo json_encode($outdoors);
