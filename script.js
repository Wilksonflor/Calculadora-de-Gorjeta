function valorTotal() {
    let porcentagemGorjeta;
    const valorConta = Number(document.getElementById('valorConta').value.replace(",", "."));
    const prctGorjeta = Number(document.getElementById('porcentagem').value);
    const qntPessoas = Number(document.getElementById('qntPessoas').value);
    let gorjetaTotal = document.getElementById('gorjetaTotal');
    let somaTotal = document.getElementById('contaTotal');
    let valorPessoa = document.getElementById('valorPessoa');

    porcentagem = prctGorjeta / 100;

    gorjetaTotal = valorConta * porcentagem;
    document.getElementById('gorjetaTotal').value = parseFloat(gorjetaTotal).toFixed(2);

    somaTotal = valorConta + gorjetaTotal;
    document.getElementById('contaTotal').value = parseFloat(somaTotal).toFixed(2);

    valorPessoa = somaTotal / qntPessoas;
    document.getElementById('valorPessoa').value = parseFloat(valorPessoa).toFixed(2);

}

const btnResultado = document.getElementById('btnCalcular');
btnResultado.addEventListener('click', valorTotal);


function limparForm() {
    valorConta.value = '';

}

const btnReset = document.getElementById('reset')
btnReset.addEventListener('click', limparForm)