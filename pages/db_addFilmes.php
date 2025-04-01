<h1>Você adicionou um novo filme! Parabéns!</h1>

<?php
    $titulo = mysqli_real_escape_string($conect, $_POST['modelo']);
    $diretor = mysqli_real_escape_string($conect, $_POST['marca']);
    $ano = mysqli_real_escape_string($conect, $_POST['ano']);
    $desc_filme = mysqli_real_escape_string($conect, $_POST['cor']);

    $sql = "INSERT INTO carros(
        titulo, 
        diretor,  
        ano, 
        desc_filme
    )VALUES(
        '{$titulo}',
        '{$diretor}',
        '{$ano}',
        '{$desc_filme}'
    )";

    mysqli_query($conect,$sql) or die("Erro ao adicionar o carro".mysqli_error(($conect)));

    echo "O carro $modelo foi adicionado com sucesso!";
    ?>