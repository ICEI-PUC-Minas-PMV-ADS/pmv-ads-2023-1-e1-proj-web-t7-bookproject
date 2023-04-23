
# Projeto de Interface

Foi estabelecido que a platorma deve ser intuitiva, acessível, e de simples usabilidade. Desta forma, o projeto limita a quantidade de elementos apenas ao útil e necessário para desempenhar sua função, mantendo a interface limpa e com uma identidade visual que gera uma sensação de continuidade.

## User Flow
O diagrama apresentado na Figura 2 mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue. Para visualizar o wireframe interativo, acesse o [ambiente MarvelApp do projeto](https://marvelapp.com/prototype/9g9667i/screen/91388805).

![Figura 2 - Fluxo de telas do usuário](https://user-images.githubusercontent.com/128759659/233855933-9c832088-0df2-4e0a-ab6a-82af0f655c76.png)
Figura 2 - Fluxo de telas do usuário

## Wireframes

Conforme fluxo de telas do projeto, apresentado no item anterior, as telas do sistema são apresentadas em detalhes nos itens que se seguem.  As telas do sistema apresentam uma estrutura em comum, com exceção à home-page, que é apresentada na Figura 2. Nesta estrutura existem 2 grandes blocos:
* **Cabeçalho:** Local onde estão dispostos elementos fixos de identidade (logo) e navegação principal do site (menu da aplicação);
* **Conteúdo:** apresenta o conteúdo da tela em questão.
*  ** Rodapé: ** apresenta opção que redireciona o usuário à informações sobre a interface e para contato.

![estrutura](https://user-images.githubusercontent.com/128759659/233857509-0f90236a-cdf1-4e71-a033-b311942029ae.png)

**Tela - Home-page**

A tela de home-page mostra o nome do projeto com uma breve descrição indicativa de sua função à direita, na lateral esquerda é possível ver a área de login que dá acesso às funcionalidades da plataforma.
* O bloco de rodapé traz o elemento clicável about que leva o usuário para a tela About.

![home](https://user-images.githubusercontent.com/128759659/233858115-a75b7527-4894-4621-b932-939d9ebea0e3.png)

**Tela - Bibilioteca**

A tela biblioteca apresenta no bloco de conteúdo livros de destaque a partir da API utilizada pelo sistema. Com base na estrutura padrão, Imagem, Nome do Livro e Autor são exibidas as obras.
* O botão adicionar inclui o livro à lista do usuário.
* O componente Pesquisar permite substituir o conteúdo da página com o resultado da busca solicitada pelo usuário;
* O componente Mihas Listas leva o usuário para a tela Minhas Lista.
* O componente Perfil leva o usuário à tela Perfil.
* O componente Sair retorna à tela de login.
* Interagir com o título da obra abre a Tela - Tela - Pop Up Detalhes Livro.

![Biblioteca](https://user-images.githubusercontent.com/128759659/233859579-e42e8e5b-5958-45a3-b61d-4580143b1642.png)

**Tela - Pesquisa**

A tela pesquisa é apresentada assim que o usuário informa um tópico e pressiona enter em seu teclado, resultando em obras relacionadas ao tópico informado. Também é possivel refinar os resultados utlizando o filtro apresentado, e ordenar por diferente opções. Posui as mesmas funções da tela Biblioteca.

![pesquisa](https://user-images.githubusercontent.com/128759659/233863010-8887f050-ecfe-43ee-8e03-e6df0693d4ff.png)

**Tela - Pop Up Detalhes Livro**

A tela que permite exibir mais informações sobre uma obra quando o usuário clica sobre o título ou imagem da capa. Ela surge sobre outras janelas e pode ser fechada clicando no X superior ou em qualquer área fora da tela em questão, retornando ao ambiente anteior. 

![popup](https://user-images.githubusercontent.com/128759659/233863438-2bc90ac1-9667-440b-b051-8ee809ba5b30.png)

**Tela - Meus Livros**

A tela exibe todos os livros salvos pelo usuário. Nesta tela é possivel editar detalhes como criar e agregar à uma lista, definir gênero e status através de listas suspensas; indicar o número de páginas lidas, avaliar e favoritar a obra. É possivel também na lateral direita a inserção de anotações. 

![meus livros](https://user-images.githubusercontent.com/128759659/233864095-0b7af599-a733-422e-b075-9963bc1ef04c.png)

**Tela - Perfil**

A tela exibe algumas informações básica sobre o usuário como nome, email, idade e foto de perfil. Apresenta também a quantidade de livros já lidos pelo usuário, livros favoritados e também em progresso. É possivel trocar a senha de acesso nesta página. 

![perfil](https://user-images.githubusercontent.com/128759659/233865192-ffee4bd2-e288-4384-ab66-92df3607ca4c.png)

**Tela - About**

A tela about aprensenta uma descrição sobre a plataforma, motivos para a criação e objetivos. Abaixo se encontram informações para contato. É possivel acessar todas as páginas presentes no cabeçalho. Também acessável pela home-page.

![about](https://user-images.githubusercontent.com/128759659/233865621-77ae182f-5add-423e-8319-1442e24f5e76.png)
