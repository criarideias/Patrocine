<?php

include("../conexao.php");
include("../GET/validateSession.php");

if (!validarSession($con)) return header("Location: ../../dashboard/");

function callback($msg)
{
    echo "
    <script>
        window.alert('$msg');
        window.location.href = '../../dashboard/';
    </script>
    ";
}

$id = mysqli_real_escape_string($con, $_GET["id"]);

$pastaAlvo = "../../uploads/";

$banner = $_FILES["banner"];
$tipoDoBanner = explode(".", $banner["name"])[1];
$nomeDoBanner = md5(time()) . "." . $tipoDoBanner;
$arquivoAlvoBanner = $pastaAlvo . basename($nomeDoBanner);

if (!move_uploaded_file($banner["tmp_name"], $arquivoAlvoBanner)) {
    return callback("ERRO: Não foi possível enviar o arquivo do Banner");
}

$sql = "UPDATE `outdoors` SET `arquivo` = '$nomeDoBanner' WHERE `id` = $id";
$result = mysqli_query($con, $sql);

if (!$result) {
    return callback("ERRO: Ocorreu um erro desconhecido ao tentar atualizar o Banco de Dados");
}

callback("Outdoor atualizado com sucesso!");
