# Loja do Seu Manoel - API de Empacotamento de Pedidos

Este projeto consiste em uma API REST para processar pedidos de uma loja de jogos, identificando a caixa ideal para embalar os produtos com base nas suas dimensões.

---

## Processo Seletivo L2Code

Este projeto foi desenvolvido para o processo seletivo da empresa L2Code.  
Estou à disposição para quaisquer esclarecimentos que forem necessários.

---

## O que foi desenvolvido

- Endpoint POST `/pedido` para receber um conjunto de pedidos contendo produtos e suas dimensões.
- Lógica para verificar o encaixe dos produtos nas caixas disponíveis.
- Retorno estruturado no formato especificado com a indicação da caixa usada para cada pedido.
- Validação básica e documentação da API via Swagger.
- Testes unitários para serviço e controller.
- Consultas SQL para o exercício 2 (Horários de Aula) isoladas em um arquivo de Node.js para uso separado.

---

## Como rodar localmente

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js (para rodar localmente sem Docker)
- Banco Postgres configurado (conforme `.env`)

### Passos para rodar

1. Clone o repositorio no seu ambiente local

```text
git clone git@github.com:victorwariss/avaliacaoL2.git
```

2. Configure o arquivo `.env` com os dados do banco (host, usuário, senha, db)

3. Suba o ambiente Docker

```text
docker compose up --build
```

4. API estará disponível em:

```text
http://localhost:3000
```

5. Acesse a documentação Swagger e interface de testes em:

```text
http://localhost:3000/api
```

---

## Como usar o endpoint `/pedido`

Envie um POST com o JSON no formato:

```json
{
  "pedidos": [
    {
      "pedido_id": 1,
      "produtos": [
        {
          "produto_id": "PS5",
          "dimensoes": {
            "altura": 40,
            "largura": 10,
            "comprimento": 25
          }
        },
        {
          "produto_id": "Volante",
          "dimensoes": {
            "altura": 40,
            "largura": 30,
            "comprimento": 30
          }
        }
      ]
    }
  ]
}
```

Resposta no formato:

```json
{
  "pedidos": [
    {
      "pedido_id": 1,
      "caixas": [
        {
          "caixa_id": "Caixa 1",
          "produtos": ["PS5", "Volante"]
        }
      ]
    }
  ]
}
```

---

## Testes

- Para rodar os testes unitários:

```text
npm run test
```

---

## Consultas SQL - Exercício 2

Um arquivo isolado com as consultas SQL para os horários de aula está disponível em

```text
src/sql/consultas-horarios.js
```

que pode ser usado para execução externa sem impactar a API.
