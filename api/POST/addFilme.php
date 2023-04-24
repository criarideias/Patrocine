<?php

include("../conexao.php");
include("../GET/validateSession.php");

# Verifica se o usuário está autenticado
if (!validarSession($con)) return header("Location: ../../dashboard/");

# Array que salvará todos os dados enviados de forma segura
$data = array();
foreach ($_POST as $key => $dado) {
    $data[$key] = mysqli_real_escape_string($con, $dado);
}

$id;

if (isset($_GET["id"])) {
    $id = mysqli_real_escape_string($con, $_GET["id"]);
} else {
    $id = time();
}

# Função que servirá como callback
function callback($msg)
{
    echo "
    <script>
        window.alert('" . $msg . "');
        window.location.href = '../../dashboard/index.php';
    </script>
    ";
}

# SQL que será executado
$sql = "";

# Pasta que os arquivos serão enviados
$pastaAlvo = "../../uploads/";

$nome = $data["nome"];
$sinopse = $data["sinopse"];
$link = $data["link"];
$dataDeInicio = date('Y-m-d H:i:s', strtotime($data["dataDeInicio"]));
$dataDeTermino = date('Y-m-d H:i:s', strtotime($data["dataDeTermino"]));

# Condição para caso o filme que esteja sendo adicionado seja do Tipo 1 (Normal)
if (!isset($_POST["elenco"])) {
    # Forma de salvamento de arquivos utilizado em todo o código
    $trailer = $_FILES["trailer"];
    $tipoDoTrailer = explode(".", $trailer["name"])[1];
    $nomeDoTrailer = md5(time()) . "." . $tipoDoTrailer;
    $arquivoAlvoTrailer = $pastaAlvo . basename($nomeDoTrailer);

    # Caso um erro tenha ocorrido ao tentar enviar o arquivo, mostre um erro na mensagem de callback
    if (!move_uploaded_file($trailer["tmp_name"], $arquivoAlvoTrailer)) {
        return callback("ERRO: Não foi possível enviar o arquivo do Trailer");
    }

    $titulo = $_FILES["titulo"];
    $tipoDoTitulo = explode(".", $titulo["name"])[1];
    $nomeDoTitulo = md5(time()) . "." . $tipoDoTitulo;
    $arquivoAlvoTitulo = $pastaAlvo . basename($nomeDoTitulo);

    if (!move_uploaded_file($titulo["tmp_name"], $arquivoAlvoTitulo)) {
        return callback("ERRO: Não foi possível enviar o arquivo do Título");
    }

    $retrato = $_FILES["retrato"];
    $tipoDoRetrato = explode(".", $retrato["name"])[1];
    $nomeDoRetrato = md5(time()) . "." . $tipoDoRetrato;
    $arquivoAlvoRetrato = $pastaAlvo . basename($nomeDoRetrato);

    if (!move_uploaded_file($retrato["tmp_name"], $arquivoAlvoRetrato)) {
        return callback("ERRO: Não foi possível enviar o arquivo do Retrato");
    }

    $sql = "INSERT INTO `filmes` 
        (id, nome, trailer, titulo, sinopse, retrato, link, dataDeInicio, dataDeTermino, slider) 
        VALUES
        ('$id', '$nome', '$nomeDoTrailer', '$nomeDoTitulo', '$sinopse', '$nomeDoRetrato', '$link', '$dataDeInicio', '$dataDeTermino', true)
        ";
} else {
    # Condição para caso o filme que esteja sendo adicionado seja do Tipo 1 (Exibição do SLider)

    $banner = $_FILES["banner"];
    $tipoDoBanner = explode(".", $banner["name"])[1];
    $nomeDoBanner = md5(time()) . "." . $tipoDoBanner;
    $arquivoAlvoBanner = $pastaAlvo . basename($nomeDoBanner);

    if (!move_uploaded_file($banner["tmp_name"], $arquivoAlvoBanner)) {
        return callback("ERRO: Não foi possível enviar o arquivo do Banner");
    }

    $elenco = $data["elenco"];
    $classificacao = intval($data["classificacao"]);

    $sql = "INSERT INTO `filmes`
        (id, nome, classificacao, banner, sinopse, elenco, link, dataDeInicio, dataDeTermino)
        VALUES
        ('$id', '$nome', $classificacao, '$nomeDoBanner', '$sinopse', '$elenco', '$link', '$dataDeInicio', '$dataDeTermino')
        ";
}

$result = mysqli_query($con, $sql);

if (!$result) {
    return callback("Ocorreu um erro desconhecido ao tentar adicionar este filme.");
}

callback("Filme adicionado com sucesso!");
