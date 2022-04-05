
# CRUD
Criação de uma api para estudar back-end - desenvolvido em **Node.js** e Express.

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

