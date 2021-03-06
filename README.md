# TesteFront - LUCAS NOGUEIRA 

Descrição: Página de gestão de usuários e favoritos.

Tecnologias utilizadas | Item/link
------------ | -------------
SPA Framework | [Angular 9](https://angular.io/)
Pré-processador | [Sass](https://sass-lang.com/)
Biblioteca de Componentes | [NgMaterial](https://material.angular.io/)
GeoLocalização e mapas | [OpenLayers](https://openlayers.org/)

Este projeto foi feito em Angular versão 9.1.1.

### [Demo em GitHub Pages](https://nogueira-lucas.github.io/listagem-usuarios/)

## Desenvolvimento

Execute `ng serve` para abrir o ambiente de desenvolvemento Angular. Navegue para `http://localhost:4200/`. Você também pode executar `ng serve -o` para abrir automaticamente uma janela em seu navegador.

![imagem](evidencias/tela-principal.png)

## Testes de Unidade

Execute `npm run test` para visualizar o terminal do KARMA. Nele é possível monitorar os testes de unidade configurados no projeto.

![imagem](evidencias/tela-karma.png)

## Respostas do Questionário

  1- Se eu precisar trabalhar com um ambiente de desenvolvimento, um de testes e um
  de produção, o que eu devo fazer?
   - R.: ***Devemos estabelecer um gitflow, um procedimento de controle de versionamento onde deverá ser possível separar as versões entregues para desenvolvimento, testes e uso em produção. Também é necessário hospedar uma cópia da aplicação separadamente em cada segmento pra que respeitemos espaço para testes e desenvolvimento.*** 

2- Onde devem ser importados estilos de folha? Como por exemplo os do Bootstrap,
  Font Awesome, etc.
   - R.: ***Existe a possibilidade de importar o CSS de três formas: 
        1- utilizando declarações de "import" no cabeçalho de um arquivo sass;
        2- importando atraves do arquivo styles.css definido no componente root da aplicação;
        3- importando um módulo atraves das definições NgModule do componente;***  

3- Devo definir o tipo da minha variável como "any"? Por que?
   - R.: ***é preciso definir uma variável como tipo "any" somente quando não temos modelos 
        definidos claramente e queremos generalizar o tipo pra que possamos invocar atributos ou metodos.***

4- Como faço para configurar minha aplicação para rodar em um contexto diferente do
  servido localmente?
   - R.: ***é possivel executar um deploy por meio de um script definido em package.json***
    
5- É possível utilizar múltiplos módulos de rotas?
   - R.: ***Sim, através da importação dos módulos de rotas em um único módulo.***

6- Você utilizaria Lazy Load para gerenciar as rotas da aplicação? Por que?
   - R.: ***Sim, somente quando a aplicação está respeitando uma arquitetura modular, ou seja, 
    quando foi estabelecida um arquivo de rota pra cada módulo da aplicação.***

7- É possível consumir uma stream de dados utilizando as bibliotecas que
  acompanham por default o Framework?
   - R.: ***Sim, por exemplo temos a biblioteca chamada Rxjs onde encontramos métodos de manipulação de streams se apropriando do conceito de observables e subscribers pra manter a transmissão de dados atualizada em tempo real de requisição e resposta.***

8- Como eu garanto que meu código segue os padrões EcmaScript?
   - R.: ***É possível integrar validadores de código no projeto, chamados de lint, são configurações que controlam a qualidade do código e validam a integridade antes de executar um build. ESLINT, é um exemplo de plugin bastante usado em projetos com framework Angular.***
