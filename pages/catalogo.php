<?php
    include("database/conect.php");
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalogo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <header>
        <!-- bg- = backgroundcolor-cordesejada -->
        <nav class="navbar navbar-expand-lg bg-dark text-light">
            <!-- container(80% centralizado) -->
            <!-- container-fluid(100%) -->
            <!-- w- (width) (0,25,50,75,100) -->
            <!-- h- (height) -->
            <div class="container">
            <!-- logo -->
            <a class="navbar-brand text-light" href="index.php">E-FILMES</a>
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
        <section id="categorias" class="container-fluid d-flex flex-column align-items-center">
          <h1>FILMES</h1>
          <h3>Terror/Suspense</h3>
          <!-- CATEGORIAS ITEMS PARA O JAVASCRIPT -->
          <div id="categoriaItems" class="container-fluid d-flex my-4 justify-content-center flex-wrap gap-3">
            <!-- ITEMS JS -->
            
          </div>
        </section>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="../script/catalogo.js"></script>
  </body>
</html>