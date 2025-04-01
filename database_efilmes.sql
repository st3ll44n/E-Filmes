-- drop database db_efilmes;

create database db_efilmes;
use db_efilmes;

create table genero(
	id_genero INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(250)
);

create table filmes(
	id_filme INT AUTO_INCREMENT PRIMARY KEY,
    id_genero INT,
	titulo VARCHAR(250) NOT NULL,
	diretor varchar(250),
	descricao TEXT,
	ano_lancamento DATE,
    FOREIGN KEY (id_genero) REFERENCES genero(id_genero)
);

create table usuarios(
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250),
    senha VARCHAR(250),
    data_nascimento DATE,
    endereco VARCHAR(250),
    telefone INT(11)
);

create table compras(
    id_compra INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    data_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2),
    status_compra VARCHAR(50),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

create table compras_itens (
    id_itens INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT,
    id_filme INT,
    quantidade INT,
    preco_unitario DECIMAL(10, 2),
    FOREIGN KEY (id_compra) REFERENCES compras(id_compra),
    FOREIGN KEY (id_filme) REFERENCES filmes(id_filme)
);

create table avalicao_filme (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
	id_filme INT,
    nota INT CHECK (nota >= 1 AND nota <= 5), -- Nota entre 1 e 5
    comentario TEXT,
    data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY (id_filme) REFERENCES filmes(id_filme)
);

create table carrinho (
    id_carrinho INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

create table carrinho_itens (
    id_carrinhoItens INT AUTO_INCREMENT PRIMARY KEY,
    id_carrinho INT,
    id_filme INT,
    quantidade INT,
    FOREIGN KEY (id_carrinho) REFERENCES carrinho(id_carrinho),
    FOREIGN KEY (id_filme) REFERENCES filmes(id_filme)
);

create table pagamentos (
    id_pag INT AUTO_INCREMENT PRIMARY KEY,
    id_compra INT,
    metodo_pagamento VARCHAR(50),
    status_pagamento VARCHAR(50),
    data_pagamento DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_compra) REFERENCES compras(id_compra)
);

create table descontos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    descricao TEXT,
    percentual_desconto DECIMAL(5, 2),
    data_inicio DATETIME,
    data_fim DATETIME
);

insert into genero (id_genero, tipo) values 
("001","Terror"),
("002","Ficção"),
("003","Suspense");

insert into filmes (id_genero, titulo, diretor, descricao, ano_lancamento) values (
002,
"O Exorcista", 
"William Friedkin",
"Uma jovem garota é possuída por um demônio, e sua mãe, desesperada, procura a ajuda de dois padres para realizar um exorcismo.",
"1973-11-11");

INSERT INTO filmes (id_genero, titulo, diretor, descricao, ano_lancamento) VALUES
(2, "O Iluminado", "Stanley Kubrick", "Um escritor aceita o emprego de zelador de um hotel isolado durante o inverno, mas começa a perder a sanidade devido à presença de forças sobrenaturais.", "1980-11-28"),
(2, "Psicose", "Alfred Hitchcock", "Uma mulher em fuga após roubar dinheiro encontra abrigo em um motel isolado, onde se depara com um misterioso proprietário com um segredo mortal.", "1960-09-08"),
(2, "A Noite dos Mortos-Vivos", "George A. Romero", "Um grupo de pessoas se refugia em uma casa para sobreviver a um apocalipse zumbi, enquanto lutam pela sobrevivência em meio ao caos.", "1968-10-01"),
(2, "Arraste-me para o Inferno", "Sam Raimi", "Uma assistente de crédito é amaldiçoada por uma mulher idosa depois de recusar um empréstimo, e precisa lutar contra a maldição que ameaça sua vida.", "2009-05-29"),
(2, "Invocação do Mal", "James Wan", "Baseado em eventos reais, o filme segue os investigadores paranormais Ed e Lorraine Warren enquanto tentam ajudar uma família que está sendo atormentada por uma entidade demoníaca.", "2013-07-19"),
(2, "Hereditary", "Ari Aster", "Após a morte da matriarca de uma família, eventos aterrorizantes começam a acontecer, revelando segredos sombrios sobre sua linhagem e uma terrível maldição.", "2018-06-08"),
(2, "Silent Hill", "Christophe Gans", "Uma mãe busca a filha adotiva em uma cidade misteriosa e desolada, onde forças sobrenaturais e criaturas aterrorizantes a perseguem.", "2006-02-21"),
(2, "Annabelle", "John R. Leonetti", "Uma boneca possuída por um espírito maligno começa a causar terror na vida de uma jovem família, quando eles são aterrorizados por eventos paranormais.", "2014-10-03"),
(2, "A Bruxa", "Robert Eggers", "No século XVII, uma família puritana é aterrorizada por forças sobrenaturais que começam a destruir sua unidade e fé, enquanto enfrentam uma ameaça crescente na floresta.", "2015-02-19"),
(2, "O Babadook", "Jennifer Kent", "Uma mãe e seu filho lutam contra uma entidade aterrorizante que emerge de um livro infantil misterioso, desencadeando uma série de eventos sobrenaturais e psicologicamente perturbadores.", "2014-05-22"),
(2, "O Homem nas Trevas", "Fede Álvarez", "Três jovens tentam roubar a casa de um veterano cego, mas logo descobrem que ele é muito mais perigoso do que imaginavam.", "2016-08-26"),
(3, "A Substância", "Jonathan Glazer", "Um homem investiga uma série de eventos misteriosos envolvendo uma substância misteriosa que está alterando a realidade e o comportamento das pessoas.", "2014-12-15"),
(3, "Parasita", "Bong Joon-ho", "Uma família de classe baixa se infiltra na vida de uma família rica, desencadeando uma série de eventos que levam a um grande confronto social.", "2019-05-30"),
(2, "O Psicopata Americano", "Mary Harron", "Patrick Bateman, um executivo de Wall Street com uma vida aparentemente perfeita, esconde um segredo obscuro de homicídios e loucura.", "2000-04-14");

INSERT INTO filmes (id_genero, titulo, diretor, descricao, ano_lancamento) VALUES
(3, "Kill Bill - Volume 1", "Quentin Tarantino", "Uma ex-assassina acorda de um coma de quatro anos e busca vingança contra seus antigos colegas de profissão, incluindo seu ex-chefe, Bill.", "2003-10-10"),
(3, "Saltburn", "Emerald Fennell", " Felix convida seu amigo Oliver para passar as férias em sua mansão familiar, onde segredos e mistérios começam a se revelar, criando uma atmosfera tensa e cheia de suspense.", "2023-10-28"),
(3, "Pulp Fiction", "Quentin Tarantino", "Histórias interligadas de crime e redenção, com personagens como assassinos e boxeadores, tudo contado de forma não-linear, explorando temas como violência e moralidade.", "1994-10-14"),
(1, "A Substância", "Coralie Fargeat", "Elisabeth Sparkle, renomada por um programa de aeróbica, enfrenta um golpe devastador quando seu chefe a demite. Em meio ao seu desespero, um laboratório lhe oferece uma substância que promete transformá-la em uma versão aprimorada.", "2019-08-15"),
(2, "Parasita", "Bong Joon-ho", "Uma família pobre se infiltra na vida de uma família rica, causando uma série de eventos imprevisíveis que expõem as desigualdades sociais e resultam em um confronto dramático.", "2019-05-30"),
(2, "Invocação do Mal", "James Wan", "Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar a família aterrorizada por uma entidade demoníaca em sua fazenda.", "2013-07-19"),
(3, "Psicopata Americano", "Mary Harron", "Um executivo de Wall Street, aparentemente perfeito, leva uma vida secreta de assassinatos, enquanto lida com sua psique perturbada e a cultura capitalista dos anos 80.", "2000-04-14"),
(2, "Coringa", "Todd Philips", "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.", "2019-10-04");

select * from filmes;

INSERT INTO usuarios (nome, email, senha, data_nascimento, endereco, telefone) VALUES
('João Silva', 'joao.silva@email.com', 'senha123', '1990-05-15', 'Rua A, 123, Bairro X, Cidade Y', 11987654321),
('Maria Oliveira', 'maria.oliveira@email.com', 'senha456', '1985-08-22', 'Avenida B, 456, Bairro Y, Cidade Z', 21912345678),
('Carlos Souza', 'carlos.souza@email.com', 'senha789', '2000-12-01', 'Rua C, 789, Bairro Z, Cidade W', 31934567890),
('Ana Costa', 'ana.costa@email.com', 'senha101', '1995-02-10', 'Rua D, 1011, Bairro W, Cidade X', 41987654321),
('Lucas Pereira', 'lucas.pereira@email.com', 'senha202', '1992-11-30', 'Avenida E, 202, Bairro U, Cidade V', 51965432109),
('Fernanda Lima', 'fernanda.lima@email.com', 'senha303', '1988-03-12', 'Rua F, 303, Bairro T, Cidade U', 61943210987),
('Paulo Santos', 'paulo.santos@email.com', 'senha404', '1997-06-17', 'Avenida G, 404, Bairro S, Cidade T', 71956789012),
('Roberta Martins', 'roberta.martins@email.com', 'senha505', '1993-01-05', 'Rua H, 505, Bairro R, Cidade S', 81923456789),
('Juliana Ribeiro', 'juliana.ribeiro@email.com', 'senha606', '1987-09-25', 'Avenida I, 606, Bairro Q, Cidade R', 91987654321),
('Ricardo Gomes', 'ricardo.gomes@email.com', 'senha707', '1996-04-18', 'Rua J, 707, Bairro P, Cidade Q', 11976543210);

INSERT INTO compras (id_usuario, total, status_compra) VALUES
(1, 99.90, 'Concluída'),
(2, 49.90, 'Em Processamento'),
(3, 159.75, 'Cancelada'),
(4, 79.50, 'Concluída'),
(5, 120.00, 'Em Processamento'),
(6, 200.00, 'Concluída'),
(7, 45.00, 'Em Processamento'),
(8, 99.90, 'Concluída'),
(9, 60.00, 'Concluída'),
(10, 85.00, 'Cancelada');

select * from compras;

INSERT INTO compras_itens (id_compra, id_filme, quantidade, preco_unitario) VALUES
(1, 2, 1, 19.90),  -- Compra 1, Filme 2, 1 unidade, preço R$ 19,90
(1, 5, 2, 24.90),  -- Compra 1, Filme 5, 2 unidades, preço R$ 24,90
(2, 3, 1, 19.90),  -- Compra 2, Filme 3, 1 unidade, preço R$ 19,90
(2, 8, 1, 19.90),  -- Compra 2, Filme 8, 1 unidade, preço R$ 19,90
(3, 7, 1, 34.90),  -- Compra 3, Filme 7, 1 unidade, preço R$ 34,90
(4, 1, 3, 19.90),  -- Compra 4, Filme 1, 3 unidades, preço R$ 19,90
(4, 6, 1, 19.90),  -- Compra 4, Filme 6, 1 unidade, preço R$ 19,90
(5, 9, 2, 24.90),  -- Compra 5, Filme 9, 2 unidades, preço R$ 24,90
(6, 10, 1, 34.90), -- Compra 6, Filme 10, 1 unidade, preço R$ 34,90
(7, 4, 2, 29.90),  -- Compra 7, Filme 4, 2 unidades, preço R$ 29,90
(8, 2, 1, 19.90),  -- Compra 8, Filme 2, 1 unidade, preço R$ 19,90
(9, 5, 1, 24.90),  -- Compra 9, Filme 5, 1 unidade, preço R$ 24,90
(10, 3, 2, 19.90); -- Compra 10, Filme 3, 2 unidades, preço R$ 19,90

select * from compras_itens;

INSERT INTO avalicao_filme (id_usuario, id_filme, nota, comentario) VALUES
(1, 2, 5, 'Excelente filme! A trama é envolvente e os personagens são muito bem desenvolvidos.'),
(2, 3, 4, 'Muito bom, mas o final poderia ser melhor. A atuação é excelente!'),
(3, 5, 2, 'O filme não me agradou. A história foi previsível e os personagens pouco interessantes.'),
(4, 1, 5, 'Uma obra-prima do cinema! Direção impecável e cenas de ação maravilhosas.'),
(5, 7, 3, 'Filme razoável. Tem bons momentos, mas achei o ritmo um pouco lento em alguns pontos.'),
(6, 4, 1, 'Totalmente decepcionante. A história é fraca e não me prendeu em nenhum momento.'),
(7, 6, 5, 'Um dos melhores filmes de terror que já vi. Realmente arrepiante e muito bem feito!'),
(8, 9, 4, 'Muito bom! A crítica social é bem construída, mas alguns personagens poderiam ser mais explorados.'),
(9, 10, 3, 'Bom filme, mas achei que falta algo para torná-lo memorável. Não é ruim, mas também não é incrível.'),
(10, 8, 4, 'Gostei bastante do filme. A trama é interessante e as atuações são boas. Poderia ser um pouco mais curto.');

select * from avalicao_filme;

INSERT INTO carrinho (id_usuario) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

INSERT INTO carrinho_itens (id_carrinho, id_filme, quantidade) VALUES
(1, 2, 1),  -- Carrinho 1, Filme 2, 1 unidade
(1, 5, 2),  -- Carrinho 1, Filme 5, 2 unidades
(2, 3, 1),  -- Carrinho 2, Filme 3, 1 unidade
(2, 8, 1),  -- Carrinho 2, Filme 8, 1 unidade
(3, 7, 1),  -- Carrinho 3, Filme 7, 1 unidade
(4, 1, 3),  -- Carrinho 4, Filme 1, 3 unidades
(4, 6, 1),  -- Carrinho 4, Filme 6, 1 unidade
(5, 9, 2),  -- Carrinho 5, Filme 9, 2 unidades
(6, 10, 1), -- Carrinho 6, Filme 10, 1 unidade
(7, 4, 2),  -- Carrinho 7, Filme 4, 2 unidades
(8, 2, 1),  -- Carrinho 8, Filme 2, 1 unidade
(9, 5, 1),  -- Carrinho 9, Filme 5, 1 unidade
(10, 3, 2); -- Carrinho 10, Filme 3, 2 unidades

select * from carrinho_itens;

INSERT INTO pagamentos (id_compra, metodo_pagamento, status_pagamento) VALUES
(1, 'Cartão de Crédito', 'Pago'),
(2, 'Boleto', 'Pendente'),
(3, 'PayPal', 'Pago'),
(4, 'Cartão de Crédito', 'Pago'),
(5, 'Boleto', 'Cancelado'),
(6, 'Cartão de Crédito', 'Pago'),
(7, 'PayPal', 'Pago'),
(8, 'Cartão de Crédito', 'Pendente'),
(9, 'Boleto', 'Pago'),
(10, 'PayPal', 'Pago');

select * from pagamentos;

INSERT INTO descontos (codigo, descricao, percentual_desconto, data_inicio, data_fim) VALUES
('BLACKFRIDAY2025', 'Desconto de 20% para a Black Friday de 2025', 20.00, '2025-11-01 00:00:00', '2025-11-30 23:59:59'),
('VIP10', 'Desconto de 10% para usuários VIP', 10.00, '2025-01-01 00:00:00', '2025-12-31 23:59:59'),
('CARNAVAL2025', 'Desconto de 15% durante o Carnaval de 2025', 15.00, '2025-02-10 00:00:00', '2025-02-17 23:59:59'),
('MELHORFILME', 'Desconto de 5% para quem comprar 3 ou mais filmes', 5.00, '2025-03-01 00:00:00', '2025-03-31 23:59:59'),
('NOVOCLIENTE', 'Desconto de 25% para novos clientes na primeira compra', 25.00, '2025-01-01 00:00:00', '2025-06-30 23:59:59'),
('DESCONTOFESTA', 'Desconto de 30% para compras acima de R$200,00', 30.00, '2025-04-01 00:00:00', '2025-04-30 23:59:59');

select * from descontos;