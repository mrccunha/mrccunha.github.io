
var obj = [
  "nextId": 501,
  "dados": [
    {
      "id": 1,
      "cliente": "Isabela Assis Cardoso",
      "cpf": "97143975613",
      "valor": 26,
      "entregue": true,
      "timestamp": "2021-05-02T19:48:09.765Z"
    },
    {
      "id": 2,
      "cliente": "Ana Luiza Monteiro",
      "cpf": "36965955600",
      "valor": 28,
      "entregue": true,
      "timestamp": "2021-05-02T19:48:09.765Z"
    },
    {
      "id": 3,
      "cliente": "Aline Lombardi Fernandes",
      "cpf": "10196759854",
      "valor": 26,
      "entregue": true,
      "timestamp": "2021-05-02T19:48:09.765Z"
    }
  ]
]
  
  function cliente(params) {
    return {
      code: 200,
      body: JSON.obj
    }
}

module.exports.cliente = (obj) => {
  return {
    code: 3000,
    body: "mauro"
  }
};