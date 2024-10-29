let clientList = [];

function createClient() {
    const name = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const cep = document.getElementById('cep').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    const client = { name, cpf, cep, address, city, state };
    clientList.push(client);
    displayClients();
}

function displayClients() {
    const list = document.getElementById('clientList');
    list.innerHTML = '';
    clientList.forEach((client, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${client.name} - ${client.cpf} 
                        <button onclick="editClient(${index})">Editar</button> 
                        <button onclick="deleteClient(${index})">Excluir</button>`;
        list.appendChild(li);
    });
}

function editClient(index) {
    const client = clientList[index];
    document.getElementById('name').value = client.name;
    document.getElementById('cpf').value = client.cpf;
    document.getElementById('cep').value = client.cep;
    document.getElementById('address').value = client.address;
    document.getElementById('city').value = client.city;
    document.getElementById('state').value = client.state;

    clientList.splice(index, 1);
    displayClients();
}

function deleteClient(index) {
    clientList.splice(index, 1);
    displayClients();
}

function fetchAddress() {
    const cep = document.getElementById('cep').value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('address').value = data.logradouro;
            document.getElementById('city').value = data.localidade;
            document.getElementById('state').value = data.uf;
        })
        .catch(error => console.error('Erro ao buscar endereço:', error));
}
