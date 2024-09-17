const form = document.getElementById('form')
const nomes = [];
const numeros = [];
let linhas = ' ';

form.addEventListener('submit', function(event){
    event.preventDefault();
    adicionaContato();

})

function adicionaContato() {
    const nomeContato = document.getElementById('nome-contato')
    const numeroContato = document.getElementById('numero-contato') 

    if (nomes.includes(nomeContato.value)) {
        alert(`O contato "${nomeContato.value}" Já foi inserido.`)

    }else {
        nomes.push(nomeContato.value);
        numeros.push(numeroContato.value);
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    
        const bodyTable = document.querySelector('tbody')
        bodyTable.innerHTML = linhas
    }
}

