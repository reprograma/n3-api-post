# Semana 8 | Backend | API - Método POST 👩🏽‍💻


Agora que você está criando rotas que são capazes de retornar dados do servidor, vamos aprender uma maneira profissional de cadastrar dados a partir da nossa API. Essa semana você aprenderá como colocar informações dentro de seus objetos sem editar manualmente o `json`.

### O protocolo HTTP e como chegamos até aqui 🌐

- [O que é o HTTP? Como funcionam requests e responses?](http://gabsferreira.com/o-que-e-o-http-como-funciona-request-respose/)
- [HTTP Overview](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)

### POST 📮


O método HTTP POST envia dados ao servidor. O tipo do corpo da solicitação é indicado pelo cabeçalho Content-Type.


##### Ok. Mas quando usamos o POST?

Nós vamos utilizá-lo sempre que desejarmos cadastrar um dado novo no nosso backend. 
Para fazer nossos testes, vamos utilizar o maravilhoso [Postman](https://www.getpostman.com/):rocket:


#### O amigo body-parser

O `body-parser` é um módulo capaz de converter o body da requisição para vários formatos. Um desses formatos é json, exatamente o que queremos.

Então vamos instalá-lo.

```npm instal body-parser --save```


##### Lembrete!
O post geralmente é feito pra criar um registro único na base de dados. 
Hoje seu desafio será implementar essa tarefa de não salvar coisas repetidas.
