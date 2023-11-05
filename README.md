# empresas

Parte do beckend de um aplicativo onde se pode cadastrar, listar e filtrar, modificar e apagar uma empresa

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- Banco de dados (MySQL) configurado e acessível.
- Criar um banco de dados com o nome de "empresas"

## Instalação

1. Clone este repositório: `git clone https://github.com/BrenoMeneses/empresas-backend`.
2. Acesse o diretório do projeto: `cd empresas-beckend`.
3. Instale as dependências: `npm install` ou `yarn install`.

## Configuração

1. entre pasta "src" depois abra o arquivo "data-source.ts"

2. Configure as variáveis de ambiente, corretamente de acordo com seu banco de dados.

## Uso

1. Compile o codigo com o comando `npx tsc`
1. Inicie o servidor: `npm run start` ou `yarn start`.
2. O aplicativo estará disponível em `http://localhost:8080` (ou outra porta especificada).
3. Acesse a API em `http://localhost:8080/api` (ou outra rota que você tenha definido).

## Estrutura do Projeto

A pasta "dist" está o javascript que foi compilado
Na pasta "src" está os scripts principais do projeto
Dentro de "src" tem a pasta "entities" que estão as entidades do typeorm
Em "rotas" tem o arquivo que define as rotas da API e a lógica e busca no banco de dados de cada rota
O arquivo "data-source.ts" é o arquivo de configuração do banco da dados
O "index.ts" é o arquivo que inicializa o servidor web e o banco de dados e faz a configuração necessaria para o funcionamento da web 

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch com sua nova funcionalidade: `git checkout -b minha-funcionalidade`.
3. Faça commit das suas mudanças: `git commit -m 'Adicionando nova funcionalidade'`.
4. Envie para a sua branch: `git push origin minha-funcionalidade`.
5. Abra um pull request explicando as mudanças propostas.
