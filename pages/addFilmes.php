<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adicionar</title>
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

<h1>Adicione filmes que você quer ver aqui!</h1>

    <form action="index.php?menu=dbAddCarro" method="post">
        <div class="form-group">
            <label for="modelo">Titulo</label>
            <input type="text" id="titulo" name="titulo"> 
        </div>
        <div class="form-group">
            <label for="marca">Diretor</label>
            <input type="text" id="diretor" name="diretor"> 
        </div>
        <div class="form-group">
            <label for="valor">Ano de lançamento</label>
            <input type="number" id="ano" name="ano"> 
        </div>
        <div class="form-group">
            <label for="cor">Descrição</label>
            <input type="text" id="desc" name="desc"> 
        </div>
        <button type="submit">Cadastrar!</button>
    </form>

</body>
</html>