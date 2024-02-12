function adicionar(){
// recuperar dados produto, quantidade, valor
let produto = document.getElementById('produto');
let nome = produto.value.split('-')[0];
let valorUnitario = produto.value.split('$')[1];
let quantidade = document.getElementById('quantidade');
alert(nome);
alert(valorUnitario);
alert(quantidade.value);
alert(quantidade.value*valorUnitario);

//calcular subtotal
//adicionar no carrinho
//atualiza valor total
}

function limpar(){

}