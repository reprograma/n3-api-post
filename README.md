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

```
npm install body-parser --save
```


##### Desafio da 4a. feira!
O post geralmente é feito pra criar um registro único na base de dados. 
Neste momento sabemos acrescentar um ID ao nosso objeto. Então agora você vai precisar:
- [x] Salvar apenas contatos diferentes. Não queremos salvar contatos repetidos na nossa base de dados;
- [ ] Será que dá pra confiar no usuário? :grimacing: Se o usuário não enviar as informações corretas, não permita que o servidor grave esses dados. Exemplo de objeto que deve ser enviado via Postman:
``` 
{
	"nome": "Ada Lovelace",
	"dataNascimento": "10/12/1815",
	"celular": "988888888"
}
```

#### Quinto-sextou
Ok, dado que a gente sabe salvar um contato inédito na agenda e nós temos a data de nascimento, que tal se a gente conseguir informar qual o signo do nosso novo contatinho? :eyes:

- [ ] Depois de incluir o contato, retorne a mensagem "Oi [Pessoa incríve]] feliz que você é do signo de [o signo vai aqui]"
