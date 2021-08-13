
var obj = [
  {
    "id": 3,
    "cliente": "Mauro",
    "cpf": "10196759854"
  }
]

const retornaLista = (obj) => {
//código
return {
  code: 200,
  body: obj
}
}

console.log(retornaLista(obj))