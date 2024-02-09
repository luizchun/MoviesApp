# MoviesApp Ionic

MoviesApp projeto simples para visualização de filmes, desenvolvido com o framework Ionic e utilizando a API do [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api).

## Funcionalidades

O aplicativo MoviesApp Ionic oferece as seguintes funcionalidades:

1. **Pesquisa de Filmes:** Os usuários podem pesquisar filmes por título.
2. **Filmes Populares:** Exibe uma lista dos filmes mais populares na página inicial.
3. **Detalhes do Filme:** Ao clicar em um filme, os usuários podem visualizar os detalhes desse filme.

## Implementação da API

O MoviesApp Ionic utiliza os seguintes endpoints da API do TMDb:

1. Pesquisar Filmes:
   - Endpoint: `https://api.themoviedb.org/3/search/movie?query={query}`
   - Descrição: Utilizado para pesquisar filmes por título.

2. Filmes Populares:
   - Endpoint: `https://api.themoviedb.org/3/movie/popular`
   - Descrição: Retorna uma lista dos filmes mais populares.

3. Detalhes do Filme:
   - Endpoint: `https://api.themoviedb.org/3/movie/{movie_id}`
   - Descrição: Retorna os detalhes de um filme específico.

## Como Iniciar o Projeto

Para iniciar o projeto MoviesApp Ionic, siga estas instruções:

1. Faça o download ou clone este repositório.
2. Certifique-se de ter o Ionic instalado globalmente em sua máquina. Caso contrário, você pode instalá-lo executando `npm install -g @ionic/cli`.
3. Navegue até o diretório do projeto no terminal.
4. Instale as dependências do projeto executando `npm install`.
5. Substitua `<SUA_CHAVE_API>` pela sua chave de API do TMDb em: \MoviesApp\movies-app\src\environments\environment.ts (apiKey)
6. Execute o comando `ionic serve` para iniciar o servidor de desenvolvimento.
7. Acesse o aplicativo em seu navegador em [http://localhost:8100](http://localhost:8100).

## Tecnologias Utilizadas

O MoviesApp Ionic foi desenvolvido utilizando as seguintes tecnologias:

- Ionic Framework
- Angular
- TypeScript
