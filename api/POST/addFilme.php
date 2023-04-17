<?php

include("../conexao.php");
include("../GET/validateSession.php");

if (!validarSession($con)) return header("Location: ../../dashboard/");

$data = array();

foreach ($_POST as $key => $dado) {
    $data[$key] = mysqli_real_escape_string($con, $dado);
}

$sql = "";

$filmeID = random_int(100000, 999999);

$nome = $data["nome"];
$banner = $data["banner"];
$sinopse = $data["sinopse"];
$dataDeInicio = $data["dataDeInicio"];
$dataDeTermino = $data["dataDeTermino"];

if (isset($_POST["titulo"])) {
    $titulo = $data["titulo"];
    $retrato = $data["retrato"];

    $sql = "INSERT INTO `filmes` 
    (id, nome, banner, titulo, sinopse, retrato, dataDeInicio, dataDeTermino) 
    VALUES
    ('$filmeID', '$nome', '$banner', '$titulo', '$sinopse', '$retrato', '$dataDeInicio', '$dataDeTermino')
    ";
} else {
    $elenco = $data["elenco"];
    $sql = "INSERT INTO `filmes`
    (id, nome, banner, sinopse, elenco, dataDeInicio, dataDeTermino, slider)
    VALUES
    ('$filmeID', '$nome', '$banner', '$sinopse', '$elenco', '$dataDeInicio', '$dataDeTermino', true)
    ";
}

$result = mysqli_query($con, $sql);

$mensagem = "Filme adicionado com sucesso!";

if (!$result) {
    $mensagem = "Ocorreu um erro ao tentar adicionar este filme.";
}

echo "
    <script>
        window.alert('" . $mensagem . "');
        window.location.href = '../../dashboard'
    </script>
";
