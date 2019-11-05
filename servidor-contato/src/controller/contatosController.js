const contatos = require("../model/contatos");

const getAll = (request, response) => {
  console.log(request.url);
  response.status(200).send(contatos.model);
};

const getById = (request, response) => {
  const id = request.params.id;
  response.status(200).send(contatos.find(tarefa => tarefa.id == id));
};


module.exports = {
  getAll,
  getById
}

