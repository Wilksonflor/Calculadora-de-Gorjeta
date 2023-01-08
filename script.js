function valorTotal() {
    let porcentagemGorjeta;
    const valorConta = Number(document.getElementById('valorConta').value.replace(",","."));
    const prctGorjeta = Number(document.getElementById('porcentagem').value);
    const qntPessoas = Number(document.getElementById('qntPessoas').value);
    let gorjetaTotal = document.getElementById('gorjetaTotal');
    let somaTotal = document.getElementById('contaTotal');
    let valorPessoa = parseFloat(document.getElementById('valorPessoa'));

    porcentagem = prctGorjeta / 100;

    gorjetaTotal = valorConta * porcentagem;
    console.log(gorjetaTotal);

    somaTotal = valorConta + gorjetaTotal;
    console.log(somaTotal);
    

    valorPessoa = somaTotal / qntPessoas;
    console.log(valorPessoa);
    
}

const btnResultado = document.getElementById('btnCalcular');
btnResultado.addEventListener('click', valorTotal);


