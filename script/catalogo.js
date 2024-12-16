let lista_categorias = [];
var carrinho = []

class Categoria {
    constructor(titulo, img, desc, marca, valor){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
        this.valor = valor
    }
}

lista_categorias.push(new Categoria("O Exorcista", "../images/oexocista.jpeg", "Uma jovem garota é possuída por um demônio, e sua mãe, desesperada, procura a ajuda de dois padres para realizar um exorcismo.", "Dirigido por William Friedkin","R$ 19,90"))
lista_categorias.push(new Categoria("O Iluminado", "../images/oiluminado.jpeg", "Um escritor aceita o emprego de zelador de um hotel isolado durante o inverno, mas começa a perder a sanidade devido à presença de forças sobrenaturais.", "Dirigido por Stanley Kubrick","R$ 19,90"))
        lista_categorias.push(new Categoria("Psicose", "../images/psicose.jpeg", "Uma mulher em fuga após roubar dinheiro encontra abrigo em um motel isolado, onde se depara com um misterioso proprietário com um segredo mortal.", "Dirigido por Alfred Hitchcock","R$ 19,90"))
        lista_categorias.push(new Categoria("A Noite dos Mortos-Vivos", "../images/A-Noite-dos-Mortos-Vivos-Poster.jpg", "Um grupo de pessoas se refugia em uma casa para sobreviver a um apocalipse zumbi, enquanto lutam pela sobrevivência em meio ao caos.", "Dirigido por George A. Romero","R$ 19,90"))
        lista_categorias.push(new Categoria("Arraste-me para o Inferno (2009)", "../images/Dragmetohell.jpg", "Uma assistente de crédito é amaldiçoada por uma mulher idosa depois de recusar um empréstimo, e precisa lutar contra a maldição que ameaça sua vida.", "Dirigido por Sam Raimi","R$ 19,90"))
        lista_categorias.push(new Categoria("Invocação do Mal (2013)", "../images/filme6.jpeg", "Baseado em eventos reais, o filme segue os investigadores paranormais Ed e Lorraine Warren enquanto tentam ajudar uma família que está sendo atormentada por uma entidade demoníaca.", "Dirigido por James Wan","R$ 19,90"))
        lista_categorias.push(new Categoria("Hereditary (2018)", "../images/hereditario.jpg", "Após a morte da matriarca de uma família, eventos aterrorizantes começam a acontecer, revelando segredos sombrios sobre sua linhagem e uma terrível maldição.", "Dirigido por Ari Aster","R$ 19,90"))
        lista_categorias.push(new Categoria("Silent Hill (2006)", "../images/silenthill.jpg", "Uma mãe busca a filha adotiva em uma cidade misteriosa e desolada, onde forças sobrenaturais e criaturas aterrorizantes a perseguem.", "Dirigido por Christophe Gans","R$ 19,90"))
        lista_categorias.push(new Categoria("Annabelle (2014)", "../images/Annabelle-poster.jpg", "Uma boneca possuída por um espírito maligno começa a causar terror na vida de uma jovem família, quando eles são aterrorizados por eventos paranormais.", "Dirigido por John R. Leonetti","R$ 19,90"))
        lista_categorias.push(new Categoria("A Bruxa (2015)", "../images/bruxa.jpeg", "No século XVII, uma família puritana é aterrorizada por forças sobrenaturais que começam a destruir sua unidade e fé, enquanto enfrentam uma ameaça crescente na floresta.", "Dirigido por Robert Eggers","R$ 19,90"))
        lista_categorias.push(new Categoria("O Babadook (2014)", "../images/babadook.jpeg", "Uma mãe e seu filho lutam contra uma entidade aterrorizante que emerge de um livro infantil misterioso, desencadeando uma série de eventos sobrenaturais e psicologicamente perturbadores.", "Dirigido por Jennifer Kent","R$ 19,90"));
        lista_categorias.push(new Categoria("O Homem nas Trevas (2016)", "../images/homemnastrevas.jpg", "Três jovens tentam roubar a casa de um veterano cego, mas logo descobrem que ele é muito mais perigoso do que imaginavam.", "Dirigido por Fede Álvarez","R$ 19,90"));
        lista_categorias.push(new Categoria("A Substância", "../images/filme4", "Um homem investiga uma série de eventos misteriosos envolvendo uma substância misteriosa que está alterando a realidade e o comportamento das pessoas.","Dirigido por Jonathan Glazer", "R$ 29,90"));
        lista_categorias.push(new Categoria("Parasita", "../images/filme5.jpeg", "Uma família de classe baixa se infiltra na vida de uma família rica, desencadeando uma série de eventos que levam a um grande confronto social.","Dirigido por Bong Joon-ho", "R$ 24,90"));
        lista_categorias.push(new Categoria("O Psicopata Americano", "../images/filme7.jpeg", "Patrick Bateman, um executivo de Wall Street com uma vida aparentemente perfeita, esconde um segredo obscuro de homicídios e loucura.","Dirigido por Mary Harron", "R$ 34,90"));

lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${categoria.img}" class="img-fluid rounded-start" alt="${categoria.titulo}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p>
                    <p class="card-text"><small class="text-body-secondary">${categoria.marca}</small></p>
                    <p class="card-text"><strong>${categoria.valor}</strong></p>
                    <!-- Botão de Comprar -->
                    <button class="btn btn-primary" onclick="comprar('${categoria.titulo}')">Comprar</button>
                </div>
            </div>
        </div>
    </div>
    `;
});

// Função do botão "Comprar"
function comprar(titulo,imagem) {
    carrinho.push(titulo,imagem)
    alert(`Você adicionou "${titulo}" ao seu carrinho!`);
    localStorage.setItem('lista_carrinho',carrinho)

}