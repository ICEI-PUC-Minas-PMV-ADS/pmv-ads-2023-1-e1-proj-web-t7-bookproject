# Especificações do Projeto

Para definir a problemática e encontrar as devidas soluções a serem apresentadas neste projeto, contamos com a colaboração de usuários fornecendo informações através de entrevistas, realizadas por membros do grupo, que esclareceram gaps cotidianos que buscam ser sanados. Essas informações estão registradas abaixo através das personas e histórias de usuários.   

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

Os requisitos são constituídos por um conjunto de instruções e especificações que descrevem o que o programa deve fazer e como fazê-lo, com base nas necessidades e demandas do usuário. 

### Requisitos Funcionais
A tabela a seguir apresenta os requisitos do projeto, indicando a prioridade em que os mesmos devem ser entregues. 

|ID      | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve permitir ao usuário criar uma conta e fazer login para acessar recursos.  | ALTA | 
|RF-002| O site deve permitir ao usuário cadastrar informações sobre um livro, incluindo título, autor, editora, data de publicação, gênero, sinopse e imagem de capa.    | ALTA |
|RF-003|O site deve permitir ao usuário pesquisar livros pelo título, autor, gênero, editora e outras informações relevantes. (API do Google Books?) | ALTA |
|RF-004|O site deve permitir ao usuário criar listas com os livros cadastrados no sistema, com a possibilidade de ordenar por título, gênero, autor, gênero, editora e outras informações relevantes. | ALTA |
|RF-005|O site deve permitir ao usuário visualizar as informações completas de um livro, incluindo a sinopse, imagem de capa, autor, editora, data de publicação e outras informações relevantes. | ALTA |
|RF-006| O site deve permitir ao usuário avaliar um livro com uma nota e possuir uma área para comentário. | MÉDIA |
|RF-007| O site deve permitir ao usuário atribuir ao livro o status de leitura: Não lido, Em progresso, Finalizado, Abandonado. | ALTA |
|RF-008| O site deve permitir ao usuário criar uma lista desejos, para que possa acompanhar os livros que deseja comprar. | BAIXA |
|RF-009| O site deve permitir ao administrador do site gerenciar as obras cadastradas. | ALTA |
|RF-010| O site deve permitir visualizar as informações de contato do mantenedor do site. | MÉDIA |

### Requisitos não Funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender. 

|ID     | Descrição do Requisito  |Prioridade |
|---------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deve ser rápido e responsivo. | ALTA | 
|RNF-003| O site deve possuir uma interface do usuário intuitiva, fácil de usar e acessível, permitindo que usuários de diferentes níveis de habilidade encontrem e utilizem as funcionalidades desejadas | ALTA |  
|RNF-004| O site deve ser compatível com diferentes navegadores, dispositivos e sistemas operacionais, para que os usuários possam acessá-lo de qualquer plataforma. | ALTA | 
|RNF-005| O site deve possuir o código do sistema bem estruturado e documentado, facilitando a manutenção, correção e atualização do sistema ao longo do tempo. | ALTA | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir. 

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01 | O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 12/06/2023.|
|RE-02 |O aplicativo deve se restringir às tecnologias básicas da Web no Frontend|
|RE-03 |A equipe não pode subcontratar o desenvolvimento do trabalho. 

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
