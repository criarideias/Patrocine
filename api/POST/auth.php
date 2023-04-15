<?php

include("../conexao.php");

function callback($mensagem)
{
    echo "
    <script>
        window.alert('" . $mensagem . "');
        window.location.href = '../../dashboard/index.php';
    </script>
    ";
}

if (!isset($_POST["user"]) || !$_POST["user"]) {
    callback("ERRO: O campo USER não pode estar vazio.");
}

if (!isset($_POST["senha"]) || !$_POST["senha"]) {
    return callback("ERRO: O campo SENHA não pode estar vazio.");
}

$user = mysqli_real_escape_string($con, $_POST["user"]);
$senha = mysqli_real_escape_string($con, $_POST["senha"]);

$sqlUser = "SELECT `id`, `nome`, `senha` FROM `usuarios` WHERE `username` = '$user'";
$resultUser = mysqli_query($con, $sqlUser);
$rowsUser = mysqli_num_rows($resultUser);

if ($rowsUser == 0) {
    return callback("ERRO: Credenciais inválidas.");
}

$usuario = mysqli_fetch_array($resultUser);

if (!password_verify($senha, $usuario["senha"])) {
    return callback("ERRO: Credenciais inválidas.");
}

function generateRandomString($length = 10)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[random_int(0, $charactersLength - 1)];
    }
    return $randomString;
}

$userId = $usuario["id"];
$sessionID = random_int(100000, 999999);
$sessionTOKEN = generateRandomString(64);
$ip = $_SERVER["REMOTE_ADDR"];

$dataDeHoje = date('Y-m-d H:i:s', time());
$dataHojeFormatada = new DateTime($dataDeHoje);
$dataDeExpiracao = $dataHojeFormatada->modify("+1 day");
$expiracaoEmTimestamp = $dataDeExpiracao->getTimestamp();

$sqlNewSession = "INSERT INTO `sessions` (id, user, token, ip, dataDeExpiracao) VALUES ('$sessionID', '$userId', '$sessionTOKEN', '$ip', $expiracaoEmTimestamp)";
$resultNewSession = mysqli_query($con, $sqlNewSession);

echo "
    <script>
        window.location.href = '../../api/POST/setCookies.php?id=" . $sessionID . "&token=" . $sessionTOKEN . "&expiracao=" . $expiracaoEmTimestamp . "';
    </script>
";
