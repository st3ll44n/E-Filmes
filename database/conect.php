<?php
    include("config.php");

    // mysqli_connect = conecta o projeto com o banco
    $conect = mysqli_connect(servidor, usuario, senha, banco) or die("Erro na conexão com o serviço!" . mysqli_connect_error());
?>