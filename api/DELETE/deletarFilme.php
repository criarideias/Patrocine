<?php

include("../conexao.php");
include("../GET/validateSession.php");

# Verifica se o usuário está autenticado
if (!validarSession($con)) return header("Location: ../../dashboard/");

# ID do filme que será deletado
$id = mysqli_real_escape_string($con, $_GET["id"]);;

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

$sqlFilmes = "DELETE FROM `filmes` WHERE `id` = '$id'";
$resultFilmes = mysqli_query($con, $sqlFilmes);

if(!$resultFilmes) {
    return callback("ERRO: Ocorreu um erro desconhecido ao tentar deletar esse filme.");
}

$sqlProgramacao = "DELETE FROM `programacao` WHERE `filme` = '$id'";
$resultProgramacao = mysqli_query($con, $sqlProgramacao);

if(!$resultProgramacao) {
    callback("ERRO: Ocorreu um erro desconhecido ao tentar deletar os horários desse filme.");
}

callback("Filme deletado com sucesso!");