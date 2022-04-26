
# CRUD
API REST desenvolvida em **Node.js** e Express.

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/><space><space>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/><space><space>


## Rotas


### GET /users

#### Requisição:
Não possui corpo de requisição

#### Resposta: Status 200
```json
  [
	{
		"email": "teste@email.com",
		"name": "teste",
		"id": "7e292109-4158-4693-9b6a-6567c35f7ddd"
	},
	{
		"email": "teste2@email.com",
		"name": "teste 2",
		"id": "a7f58420-17db-4d76-9eb9-68f8f88b3ade"
	}
]
```

### POST /users

#### Requisição:
```json
{
	"email": "teste@email.com",
	"name": "teste"
}
```
#### Resposta: Status 201
```json
{
	"email": "teste@email.com",
	"name": "teste",
	"id": "e2b32c4e-0004-4f1f-be1f-fa66455f0db0"
}
```

### PUT /users/:id

#### Requisição:
```json
{
	"email": "teste3@email.com",
	"name": "teste 3"
}
```
#### Resposta: Status 200
```json
{
	"email": "teste3@email.com",
	"name": "teste 3",
	"id": "7e292109-4158-4693-9b6a-6567c35f7ddd"
}
```

#### DELETE/users/:id

#### Requisição:
Não possui corpo de requisição

#### Resposta
"Usuário excluído"

