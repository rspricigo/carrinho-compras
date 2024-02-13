let totalGeral;

limpar();

function adicionar(){
// recuperar dados produto, quantidade, valor
let produto = document.getElementById('produto');
let nome = produto.value.split('-')[0];
let valorUnitario = produto.value.split('$')[1];
let quantidade = document.getElementById('quantidade').value;

//calcular subtotal
let preço = quantidade*valorUnitario;

//adicionar no carrinho
let listaCarrinho = document.getElementById('lista-produtos');
listaCarrinho.innerHTML = listaCarrinho.innerHTML + (`<section class="carrinho__produtos__produto">
<span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$ ${preço}</span>
</section>`);

//atualiza valor total

totalGeral = totalGeral + preço;

let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;
document.getElementById('quantidade').value = 0;

}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00';
}

