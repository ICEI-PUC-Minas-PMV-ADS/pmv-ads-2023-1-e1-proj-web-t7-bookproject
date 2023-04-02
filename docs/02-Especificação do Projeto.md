# Especificações do Projeto

Para definir a problemática e encontrar as devidas soluções a serem apresentadas neste projeto, contamos com a colaboração de usuários fornecendo informações através de entrevistas, realizadas por membros do grupo, que esclareceram gaps cotidianos que buscam ser sanados. Essas informações estão registradas abaixo através das personas e histórias de usuários.   

## Personas

|**Persona**| **Idade e Ocupação** | **Aplicativos** | **Motivações** | **Frustrações** | **Hobbies/História** |
------------|----------------------|------------------|----------------|------------------------|----------------------------|
|Marcos Biriba  | 35 anos. Motorista de aplicativa.| Instagram, Facebook, Pinsterest| Ter uma leitura mais eficiente. Organização. Estudar para passar em medicina.|Não conseguir tempo para ler. Aplicativos lentos. Esquecer parte do livro que parou. | Estudar. Filofia. Livros de auto-ajuda.
|Janete Ticlírou       | 50 anos. Professora Universitária de Engenharia Mecânica. | Instagram. Facebook. | Se atualizar em Engenharia Mecânica. | Incapacidade de organizer suas notas. Falta de um lugar para reunir o indíce de suas leituras.| Leitura de romances. Dançar. |
|Cléber Biruleibe| 69 anos. Aposentado. | Facebook. Whataspp. | Acumular cultura. Contar histórias para os netos. | Dificuldade em retenção do material e encontrar novos títulos. Perda de notas e resumos. |Palavras-cruzadas. Sudoku. Colecionar biografias.

## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Marcos | Fazer leitura casual enquanto espera uma solicitação de viagem.      | Ajudar a passar tempo.
|Marcos | Lazer pessoal.|Ajudar a passar tempo. |
|Marcos | Economizar na adesão de exemplares. | Adiquirir conteúdos virtuais por oferecer custos mais baixos ou até gratuitos.|
|Jnaete | Estimular a leitura dos alunos. | Auxiliar no desenvolvimento acadênico dos alunos.|
Janete | Obter conteúdo para planejamento de aulas. | Poder acessar rapidamente materiais literários.|
|Cléber| Buscar por entretenimento. | Ter uma atividade prazerosa e relaxante. |
Cléber | Poder consumir variedades literárias. | Acesso aos conteúdos que não estão disponíveis em livrarias locais. 
Cléber | Manter o aprendizado pessoal. | Ter informações sobre diversos assuntos. 

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

