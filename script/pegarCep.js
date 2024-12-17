var lista_carrinho;

// Função para tentar recuperar e validar os dados do carrinho no localStorage
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('lista_carrinho');
    // Verifica se o valor recuperado não está vazio e é um JSON válido
    if (carrinhoSalvo) {
        console.log(carrinhoSalvo)
        lista_carrinho = carrinhoSalvo.split(',')

        lista_carrinho.forEach(element => {
            var index = lista_carrinho.indexOf(element)

            if(element === ""){
                lista_carrinho.splice(index,1)
            }
        });
        console.log(lista_carrinho)
    } else {
        console.error('Erro ao carregar carrinho do localStorage:');
        lista_carrinho = [];
        }
}
carregarCarrinho(); // Chama a função para carregar o carrinho

class Categoria {
    constructor(titulo, imagem, desc, diretor, valor, id) {
        this.titulo = titulo;
        this.imagem = imagem;
        this.desc = desc;
        this.diretor = diretor;
        this.valor = valor;
        this.id = id;  // Adicionado id no construtor
    }
}

let lista_produtos_no_carrinho = [
        new Categoria("O Exorcista", "../images/oexocista.jpeg", "Uma jovem garota é possuída por um demônio, e sua mãe, desesperada, procura a ajuda de dois padres para realizar um exorcismo.", "Dirigido por William Friedkin", "R$ 19,90", 1),
        new Categoria("O Iluminado", "../images/oiluminado.jpeg", "Um escritor aceita o emprego de zelador de um hotel isolado durante o inverno, mas começa a perder a sanidade devido à presença de forças sobrenaturais.", "Dirigido por Stanley Kubrick","R$ 19,90",1274),
        new Categoria("Psicose", "../images/psicose.jpeg", "Uma mulher em fuga após roubar dinheiro encontra abrigo em um motel isolado, onde se depara com um misterioso proprietário com um segredo mortal.", "Dirigido por Alfred Hitchcock","R$ 19,90",17),
        new Categoria("A Noite dos Mortos-Vivos", "../images/A-Noite-dos-Mortos-Vivos-Poster.jpg", "Um grupo de pessoas se refugia em uma casa para sobreviver a um apocalipse zumbi, enquanto lutam pela sobrevivência em meio ao caos.", "Dirigido por George A. Romero","R$ 19,90",1245),
        new Categoria("Arraste-me para o Inferno (2009)", "../images/Dragmetohell.jpg", "Uma assistente de crédito é amaldiçoada por uma mulher idosa depois de recusar um empréstimo, e precisa lutar contra a maldição que ameaça sua vida.", "Dirigido por Sam Raimi","R$ 19,90",145245),
        new Categoria("Invocação do Mal (2013)", "../images/filme6.jpeg", "Baseado em eventos reais, o filme segue os investigadores paranormais Ed e Lorraine Warren enquanto tentam ajudar uma família que está sendo atormentada por uma entidade demoníaca.", "Dirigido por James Wan","R$ 19,90",14251105401),
        new Categoria("Hereditary (2018)", "../images/hereditario.jpg", "Após a morte da matriarca de uma família, eventos aterrorizantes começam a acontecer, revelando segredos sombrios sobre sua linhagem e uma terrível maldição.", "Dirigido por Ari Aster","R$ 19,90",17452174102),
        new Categoria("Silent Hill (2006)", "../images/silenthill.jpg", "Uma mãe busca a filha adotiva em uma cidade misteriosa e desolada, onde forças sobrenaturais e criaturas aterrorizantes a perseguem.", "Dirigido por Christophe Gans","R$ 19,90",12450745275),
        new Categoria("Annabelle (2014)", "../images/Annabelle-poster.jpg", "Uma boneca possuída por um espírito maligno começa a causar terror na vida de uma jovem família, quando eles são aterrorizados por eventos paranormais.", "Dirigido por John R. Leonetti","R$ 19,90",127451754207),
        new Categoria("A Bruxa (2015)", "../images/bruxa.jpeg", "No século XVII, uma família puritana é aterrorizada por forças sobrenaturais que começam a destruir sua unidade e fé, enquanto enfrentam uma ameaça crescente na floresta.", "Dirigido por Robert Eggers","R$ 19,90",157210781082),
        new Categoria("O Babadook (2014)", "../images/babadook.jpeg", "Uma mãe e seu filho lutam contra uma entidade aterrorizante que emerge de um livro infantil misterioso, desencadeando uma série de eventos sobrenaturais e psicologicamente perturbadores.", "Dirigido por Jennifer Kent","R$ 19,90",10752572),
        new Categoria("O Homem nas Trevas (2016)", "../images/homemnastrevas.jpg", "Três jovens tentam roubar a casa de um veterano cego, mas logo descobrem que ele é muito mais perigoso do que imaginavam.", "Dirigido por Fede Álvarez","R$ 19,90",170820),
        new Categoria("A Substância", "../images/filme4", "Um homem investiga uma série de eventos misteriosos envolvendo uma substância misteriosa que está alterando a realidade e o comportamento das pessoas.","Dirigido por Jonathan Glazer", "R$ 29,90",1702),
        new Categoria("Parasita", "../images/filme5.jpeg", "Uma família de classe baixa se infiltra na vida de uma família rica, desencadeando uma série de eventos que levam a um grande confronto social.","Dirigido por Bong Joon-ho", "R$ 24,90",1078527),
        new Categoria("O Psicopata Americano", "../images/filme7.jpeg", "Patrick Bateman, um executivo de Wall Street com uma vida aparentemente perfeita, esconde um segredo obscuro de homicídios e loucura.","Dirigido por Mary Harron", "R$ 34,90",1245210)
];

let cart = lista_produtos_no_carrinho;  // Usa o carrinho do localStorage, caso exista

console.log(lista_produtos_no_carrinho)

function updateCart() {
    const cartItemsList = document.getElementById("produtosDoCarrinho");
    const totalPrice = document.getElementById("total-price");
    
    // Limpar a lista de itens do carrinho
    cartItemsList.innerHTML = '';

    // Atualizar itens no carrinho
    let total = 0;
    cart.forEach(Item => {
        const div = document.createElement("div");
        div.classList.add("card", "mb-3");
        div.style.maxWidth = "540px";
        div.innerHTML = `
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${Item.imagem}" class="img-fluid rounded-start" alt="${Item.titulo}">
                </div>
                <div class="col-md-10">
                    <div class="card-body h-100 d-flex align-items-center justify-content-between">
                        <h6 class="card-title">${Item.titulo}</h6>
                        <p class="text-success">${Item.valor}</p>
                        <button class="btn btn-danger" onclick="removeFromCart(${Item.id})">Remover</button>
                    </div>
                </div>
            </div>
        `;
        cartItemsList.appendChild(div);
        total += parseFloat(Item.valor.replace('R$ ', '').replace(',', '.'));  // Corrigido o cálculo do total
    });

    // Atualizar o total
    totalPrice.innerText = `R$ ${total.toFixed(2)}`;
}

// Função para adicionar um produto ao carrinho
function addToCart(id, titulo, valor, imagem) {
    const existingItem = cart.find(Item => Item.titulo === titulo);
    
    if (!existingItem) {
        const categoria = new Categoria(titulo, imagem, "", "", valor, id);  // Passando id na criação
        cart.push(categoria);
        localStorage.setItem('lista_carrinho', JSON.stringify(cart));  // Atualiza o carrinho no localStorage
    }
    updateCart();
}

// Função para remover um item do carrinho
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('lista_carrinho', JSON.stringify(cart));  // Atualiza o carrinho no localStorage
    updateCart();  // Atualiza a visualização do carrinho
}

// Carrega o carrinho e atualiza na página ao carregar
updateCart();

//------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector('#cep').addEventListener('focusout', pegarCep);

function pegarCep() {
    const cep = document.querySelector('#cep').value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((info) => info.json())
        .then((dados) => {
            console.log(dados);
            document.getElementById('estado').value = dados.estado;
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
        });
}