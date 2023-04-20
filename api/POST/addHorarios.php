<?php

include("../conexao.php");
include("../GET/validateSession.php");

# Verifica se o usuário está autenticado
if (!validarSession($con)) return header("Location: ../../dashboard/");

$json = file_get_contents("php://input");
$data = json_decode($json);

$id = mysqli_real_escape_string($con, $_GET["id"]);
$sala = mysqli_real_escape_string($con, $_GET["sala"]);

$sqlFinal = "";

$datas = array_values($data->horarios);

foreach ($datas as $data) {
    foreach ($data as $horario) {
        $sqlFinal = $sqlFinal . "INSERT INTO `programacao` (sala, filme, horario) VALUES ('$sala', '$id', '$horario'); ";
    }
}

mysqli_multi_query($con, $sqlFinal);