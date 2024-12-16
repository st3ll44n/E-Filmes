document.querySelector('#cep').addEventListener('focusout', pegarCep);

var lista_carrinho = JSON.parse(localStorage.getItem('lista_carrinho')) || [];

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

class Categoria {
    constructor(titulo, imagem, desc, diretor, valor, id) {
        this.titulo = titulo;
        this.imagem = imagem;
        this.desc = desc;
        this.diretor = diretor;
        this.valor = valor;
        this.id = id;
    }
}

let lista_categorias = [
    new Categoria("O Exorcista", "../images/oexocista.jpeg", "Uma jovem garota é possuída por um demônio, e sua mãe, desesperada, procura a ajuda de dois padres para realizar um exorcismo.", "Dirigido por William Friedkin", "R$ 19,90", 1)
];

let cart = lista_carrinho;  // Usa o carrinho do localStorage, caso exista

function updateCart() {
    const cartItemsList = document.getElementById("produtosDoCarrinho");
    const totalPrice = document.getElementById("total-price");
    
    // Limpar a lista de itens do carrinho
    cartItemsList.innerHTML = '';

    // Atualizar itens no carrinho
    let total = 0;
    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card", "mb-3");
        div.style.maxWidth = "540px";
        div.innerHTML = `
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${item.imagem}" class="img-fluid rounded-start" alt="${item.titulo}">
                </div>
                <div class="col-md-10">
                    <div class="card-body h-100 d-flex align-items-center justify-content-between">
                        <h6 class="card-title">${item.titulo}</h6>
                        <p class="text-success">${item.valor}</p>
                        <button class="btn btn-danger" onclick="removeFromCart(${item.id})">Remover</button>
                    </div>
                </div>
            </div>
        `;
        cartItemsList.appendChild(div);
        total += parseFloat(item.valor.replace('R$ ', '').replace(',', '.'));
    });

    // Atualizar o total
    totalPrice.innerText = `R$ ${total.toFixed(2)}`;
}

// Função para adicionar um produto ao carrinho
function addToCart(id, titulo, valor, imagem) {
    const existingItem = cart.find(item => item.id === id);
    
    if (!existingItem) {
        const categoria = new Categoria(titulo, imagem, '', '', valor, id);
        cart.push(categoria);
        localStorage.setItem('lista_carrinho', JSON.stringify(cart));  // Atualiza o carrinho no localStorage
    }
    updateCart();
}

// Função para remover um item do carrinho
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('lista_carrinho', JSON.stringify(cart));  // Atualiza o carrinho no localStorage
    updateCart();
}

// Adiciona os filmes à lista de filmes e adiciona os botões de "comprar" (esse código deve ser executado fora do carrinho)
lista_categorias.forEach(categoria => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('card', 'mb-3');
    produtoDiv.style.maxWidth = '540px';
    produtoDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-2">
                <img src="${categoria.imagem}" class="img-fluid rounded-start" alt="${categoria.titulo}">
            </div>
            <div class="col-md-10">
                <div class="card-body h-100 d-flex align-items-center justify-content-between">
                    <h6 class="card-title">${categoria.titulo}</h6>
                    <p class="text-success">${categoria.valor}</p>
                    <button class="btn btn-primary" onclick="addToCart(${categoria.id}, '${categoria.titulo}', '${categoria.valor}', '${categoria.imagem}')">Comprar</button>
                </div>
            </div>
        </div>
    `;
    // Corrigido: Exibindo o filme na seção correta (por exemplo, #produtosDoCarrinho ou outra seção adequada)
    document.querySelector('#produtosDoCarrinho').appendChild(produtoDiv);
});

// Carrega o carrinho e atualiza na página ao carregar
updateCart();