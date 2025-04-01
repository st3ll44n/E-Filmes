<?php
include("../database/config.php");

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['cadastrar'])) {
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $senha = password_hash($_POST['senha'] ?? '', PASSWORD_DEFAULT);
    $data_nascimento = $_POST['data_nascimento'] ?? '';
    $endereco = $_POST['endereco'] ?? '';
    $telefone = $_POST['telefone'] ?? '';

    if (empty($nome) || empty($email) || empty($_POST['senha'])) {
        $erro = "Campos obrigatórios não preenchidos!";
    } else {
        $sql = "INSERT INTO usuarios (nome, email, senha, data_nascimento, endereco, telefone) VALUES (?, ?, ?, ?, ?, ?)";

        if ($stmt = mysqli_prepare($conect, $sql)) {
            mysqli_stmt_bind_param($stmt, "ssssss", $nome, $email, $senha, $data_nascimento, $endereco, $telefone);

            if (mysqli_stmt_execute($stmt)) {
                $sucesso = "Usuário cadastrado com sucesso!";
            } else {
                $erro = "Erro ao cadastrar usuário: " . mysqli_error($conect);
            }
            mysqli_stmt_close($stmt);
        } else {
            $erro = "Erro na preparação da consulta: " . mysqli_error($conect);
        }
    }
    mysqli_close($conect);
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CARRINHO</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-dark text-light">
            <div class="container">
            <!-- logo -->
            <a class="navbar-brand text-light" href="../index.php">E-FILMES</a>
            <!-- botao mobile -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active text-light" aria-current="page" href="../index.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="catalogo.php">Catalogo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="carrinho.php">Carrinho</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" href="pages/addFilmes.php">Adicionar</a>
                </li>
                </ul>
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Procurar produto" aria-label="Search">
                <button class="btn btn-outline-danger" type="submit">Pesquisar</button>
                </form>
            </div>
            </div>
        </nav>
    </header>

    <main>
        <section id="telaCarrinho" class="container-fluid d-flex flex-column align-items-center">
            <h1 class="my-3">CARRINHO</h1>
            <div id="infoCarrinho" class="container row p-0">
                <!-- LADO A - PRODUTOS ADICIONADOS AO CARRINHO -->
                  <div id="produtosDoCarrinho" class="col-7">
                  </div>

                  <div id="total-price" class="text-end">
                    <!-- O preço total será exibido aqui -->
                </div>
               
                 <!-- LADO B - VALORES, ENDEREÇO E COMPRA DO CARRINHO -->
                <div id="comprarCarrinho" class="col-5">
                    <h2>Cadastro</h2>
                    <form onsubmit="event.preventDefault(); cadastrarUsuario();" method="POST" action="">
                        <label>Nome:</label>
                        <input type="text" id="nome" required><br>

                        <label>Email:</label>
                        <input type="email" id="email" required><br>

                        <label>Senha:</label>
                        <input type="password" id="senha" required><br>

                        <label>Data de Nascimento:</label>
                        <input type="date" id="data_nascimento" required><br>

                        <label>CEP:</label>
                        <input type="text" id="cep" required><br>

                        <label>Endereço:</label>
                        <input type="text" id="endereco" required><br>

                        <label>Telefone:</label>
                        <input type="text" id="telefone" required><br>

                        <button type="submit">Cadastrar</button>
                    </form>

                    <?php if (isset($sucesso)) : ?>
                        <script>alert("<?= $sucesso; ?>");</script>
                    <?php endif; ?>

                    <?php if (isset($erro)) : ?>
                        <script>alert("<?= $erro; ?>");</script>
                    <?php endif; ?>
                </div>
            </div> 
        </section>
    </main>

    <script>
        // Adiciona os filmes à lista de filmes e adiciona os botões de "comprar" (esse código deve ser executado fora do carrinho)
lista_produtos_no_carrinho.forEach(Item => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('card', 'mb-3');
    produtoDiv.style.maxWidth = '540px';
    produtoDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-2">
                <img src="${Item.imagem}" class="img-fluid rounded-start" alt="${Item.titulo}">
            </div>
            <div class="col-md-10">
                <div class="card-body h-100 d-flex align-items-center justify-content-between">
                    <h6 class="card-title">${Item.titulo}</h6>
                    <p class="text-success">${Item.valor}</p>
                </div>
            </div>
        </div>
    `;
    // Exibindo o filme na seção correta (por exemplo, #produtosDoCarrinho ou outra seção adequada)
    document.querySelector('#produtosDoCarrinho').appendChild(produtoDiv);
});
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="../script/pegarCep.js"></script>
</body>
</html>