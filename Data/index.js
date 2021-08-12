 var dbClientes = [   
    {
    clientes: [
    {
        clientId: 1,
        cadastro: "25/03/2020",
        nome:"Mauro Roberto da Cruz Cunha",
        cpf: "12345678909",
        idade: 35,
        endereco: [
        {   cep: "71070-900",
            logradouro: "Área Especial 4 Lotes G/H",
            complemento: "Residencial Olympique",
            bairro: "Guará II",
            localidade: "Brasília",
            uf: "DF",
            numero: "1401",
            ddd: "61",
            celular: "95555-5555",
            email: "rocketbot@rocketbot.io"
        }
        ],
        ultimospedidos: [
        {   codigo_pedido: "8498-21",
            descricao: "Cozinha Completa 100% MDF Madesa Smart 300 cm Modulada Com Armário, Balcão e Tampo Frentes Branco Brilho",               
            status_do_pedido: "Enviado",
            codigo_rastreamento: "OJ022510650BR"
        }
        ],
        prestador: "João Ferreira da Silva"
    }
    ]
    }
    ];


    function imprimeArray(lista) {
      var listaNomes = [] 
      for (i = 0; i < lista.length; i++) {
        listaNomes[i] = lista[i].nome
      }
      return listaNomes
    }
    
    imprimeArray(dbClientes);
    console.clear();

function mySandwich(param1, param2, callback) {
  console.log('Started eating my sandwich. It has: ' + param1 + ', ' + param2);
  callback();
}

mySandwich('ham', 'cheese', function() {
  console.log('Finished eating my sandwich.');
});