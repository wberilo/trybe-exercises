Exercícios
----------

###### Tempo sugerido para realização: 140 minutos

Agora vamos exercitar a utilização de funções e o básico do DOM. Você verá que alguns assuntos, como lógica condicional e loops, entre outros, vão reaparecer frequentemente nos nossos exercícios.

### Antes de começar: versionando seu código

Para versionar seu código, utilize o seu repositório de exercícios. 😉

Caso você ainda não tenha um, crie um repositório com o nome **Trybe** ou algo similar.

Abaixo você vai ver exemplos de como organizar cada exercício em uma `branch`, com arquivos e `commits` específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.

1.  Crie uma `branch` com o nome `exercises/5.1` _(bloco 5, dia 1)_
    
    Copiar
    
        $ git checkout -b exercises/5.1
    
2.  Crie um diretório `exercises` e, dentro dele, um diretório `5_1`. O caminho completo para o diretório a partir da raiz do projeto deverá ser `exercises/5_1`.
    
    Copiar
    
        $ mkdir -p exercises/5_1
        $ cd exercises/5_1
        $ pwd
        <path_to_your_repo>/exercises/5_1
    
3.  Crie um arquivo com um nome descritivo para cada exercício. Os arquivos devem estar dentro da pasta `exercises/5_1`, mas lembre-se de fazer os commits a partir da pasta raiz do seu projeto!
    
    Copiar
    
        $ git status
        On branch exercises/5.1
        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git checkout -- <file>..." to discard changes in working directory)
        
          modified:   exercise_1.html
    
4.  Faça `commits` organizados durante o processo de resolução de cada um de seus exercícios. As mensagens dos `commits` devem ser breves e explicativas.
    
    Copiar
    
        $ git log
        commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercises/5.1)
        Author: Tryber Bot <tryberbot@betrybe.com>
        Date:   Fry Sep 27 17:48:01 2019 -0300
        
            Exercicio 2 - mudando o evento de click para mouseover, tirei o alert e coloquei pra quando clicar aparecer uma imagem do lado direito da tela
        
        commit c0701d91274c2ac8a29b9a7fbe4302accacf3c78
        Author: Tryber Bot <tryberbot@betrybe.com>
        Date:   Fry Sep 27 16:47:21 2019 -0300
        
            Exercicio 2 - adicionando um alert, usando função e o evento click
        
        commit 6835287c44e9ac9cdd459003a7a6b1b1a7700157
        Author: Tryber Bot <tryberbot@betrybe.com>
        Date:   Fry Sep 27 15:46:32 2019 -0300
        
            Resolvendo o exercício 1 usando eventListener
    
5.  Lembre-se que **na primeira vez** que você for enviar o código para o repositório remoto a branch `exercises/5.1` não vai existir lá.  
    Então você precisa configurar o `remote` utilizando a opção `--set-upstream` (ou `-u`, que é a forma abreviada).
    
    Copiar
    
        $ git push -u origin exercises/5.1
    
6.  Lembre-se de enviar os commits para o repositório do `GitHub` de vez em sempre.
    
    Copiar
    
        $ git push origin exercises/5.1
    
7.  Quando terminar os exercícios, seus códigos devem estar todos commitados na branch `exercises/5.1`, e disponíveis no repositório remoto do `GitHub`.  
    Pra finalizar, crie um [`Pull Request`](https://help.github.com/en/articles/creating-a-pull-request) , adicione uma descrição bem bacana, e envie para a monitoria e/ou colegas revisarem! 🤜🏼🤛🏼
    

* * *

### Funções de manipulação do DOM

É hora de aplicar seus conhecimentos em manipular os elementos do `HTML`!

1.  A seguir, você verá um trecho de código `HTML e CSS`.
2.  Crie um arquivo `HTML` dentro do diretório `exercises/5_1` e copie o código a seguir.
3.  Leia as instruções que estão dentro de um comentário na tag `<script>`.
4.  Não se esqueça de fazer um `commit` a cada exercício!

Copiar

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Exercício 5.1</title>
    
        <style>
          div {
            border-color: black;
            border-style: solid;
          }
          .title {
            text-align: center;
          }
    
          .main-content {
            background-color: yellow;
          }
    
          .main-content .center-content {
            background-color: red;
            width: 50%;
            margin: 0 auto;
          }
    
          .main-content .center-content p {
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
        <div class="main-content">
          <div class="center-content">
            <p>Texto padrão do nosso site</p>
            <p>-----</p>
            <p>Trybe</p>
          </div>
        </div>
        <script>
            /*
            Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
            - document.getElementById()
            - document.getElementsByClassName()
            - document.getElementsByTagName()
            1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
            2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
            3. Crie uma função que mude a cor do quadrado vermelho para branco.
            4. Crie uma função que corrija o texto da tag <h1>.
            5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
            6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
            */
        </script>
      </body>
    </html>