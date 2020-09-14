Exercícios
----------

###### Tempo sugerido para realização: 140 minutos

### Antes de começar: versionando seu código

Para versionar seu código, utilize o seu repositório de exercícios. 😉

Caso você ainda não tenha um, crie um repositório com o nome **Trybe** ou algo similar.

Abaixo você vai ver exemplos de como organizar cada exercício em uma `branch`, com arquivos e `commits` específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.

1.  Crie uma `branch` com o nome `exercises/5.2` _(bloco 5, dia 2)_
    
    Copiar
    
        $ git checkout -b exercises/5.2
    
2.  Crie um diretório `exercises` e, dentro dele, um diretório `5_2`. O caminho completo para o diretório a partir da raiz do projeto deverá ser `exercises/5_2`.
    
    Copiar
    
        $ mkdir -p exercises/5_2
        $ cd exercises/5_2
        $ pwd
        <path_to_your_repo>/exercises/5_2
    
3.  Crie um arquivo com um nome descritivo para cada exercício. Os arquivos devem estar dentro da pasta `exercises/5_2`, mas lembre-se de fazer os commits a partir da pasta raiz do seu projeto!
    
    Copiar
    
        $ git status
        On branch exercises/5.2
        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git checkout -- <file>..." to discard changes in working directory)
        
          modified:   exercise_1.html
    
4.  Faça `commits` organizados durante o processo de resolução de cada um de seus exercícios. As mensagens dos `commits` devem ser breves e explicativas.
    
    Copiar
    
        $ git log
        commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercises/5.2)
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
    
5.  Lembre-se que **na primeira vez** que você for enviar o código para o repositório remoto a branch `exercises/5.2` não vai existir lá.  
    Então você precisa configurar o `remote` utilizando a opção `--set-upstream` (ou `-u`, que é a forma abreviada).
    
    Copiar
    
        $ git push -u origin exercises/5.2
    
6.  Lembre-se de enviar os commits para o repositório do `GitHub` de vez em sempre.
    
    Copiar
    
        $ git push origin exercises/5.2
    
7.  Quando terminar os exercícios, seus códigos devem estar todos commitados na branch `exercises/5.2`, e disponíveis no repositório remoto do `GitHub`.  
    Pra finalizar, crie um [`Pull Request`](https://help.github.com/en/articles/creating-a-pull-request) , adicione uma descrição bem bacana, e envie para a monitoria e/ou colegas revisarem! 🤜🏼🤛🏼
    

* * *

### Agora a prática

Antes de fazer os exercícios, crie um arquivo _HTML_ na pasta `exercises/5_2` e copie o código abaixo:

Copiar

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Exercício 5.2</title>
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
            margin-left: auto;
            margin-right: auto;
          }
    
          .main-content .center-content p {
            font-style: italic;
          }
    
          .main-content .left-content {
            background-color: green;
            width: 60%;
            margin-left: 0;
            margin-right: auto;
          }
    
          .main-content .left-content .small-image {
            display: block;
            margin-left: auto;
            margin-right: auto;
            border-radius: 100%;
          }
    
          .main-content .right-content {
            background-color: blue;
            width: 60%;
            margin-left: auto;
            margin-right: 0;
          }
    
          .main-content .description {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <script>
          // COLOQUE SEU CÓDIGO AQUI
        </script>
      </body>
    </html>

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código _JavaScript_, o qual deve ser inserido entre as tags `<script>` e `</script>`.

Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

1.  Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`;
2.  Adicione a tag `div` com a classe `main-content` como filho da tag `body`;
3.  Adicione a tag `div` com a classe `center-content` como filho da tag `div` criada no passo 2;
4.  Adicione a tag `p` como filho do `div` criado no passo 3 e coloque algum texto;
5.  Adicione a tag `div` com a classe `left-content` como filho da tag `div` criada no passo 2;
6.  Adicione a tag `div` com a classe `right-content` como filho da tag `div` criada no passo 2;
7.  Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `div` criado no passo 5;
8.  Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do `div` criado no passo 6;
9.  Adicione 3 tags `h3`, todas sendo filhas do `div` criado no passo 2.

* * *

Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

1.  Adicione a classe `title` na tag `h1` criada;
2.  Adicione a classe `description` nas 3 tags `h3` criadas;
3.  Remova o `div` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
4.  Centralize o `div` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` do `div`;
5.  Troque a cor de fundo do elemento pai da `div` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
6.  Remova os dois últimos elementos (`nove` e `dez`) da lista criada no passo 8.