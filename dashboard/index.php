<?php

include("../api/conexao.php");
include("./actions/getUserData.php");

?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
  <script src="https://kit.fontawesome.com/3f3417947e.js" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <link rel="stylesheet" href="dashboard.css" />
  <title>Patrocine - Admin</title>
</head>

<body>
  <section class="header">
    <main class="header-flex">
      <img src="../src/assets/logo.png" alt="logo patrocine" />
    </main>
  </section>
  <?php
  if (validarSession($con)) {
    include("./components/dashboard.php");
  } else {
    destruirCookies();
    include("./components/login.php");
  }
  ?>
</body>

</html>