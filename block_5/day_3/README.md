Exercícios
----------

###### Tempo sugerido para realização: 140 minutos

Se você acha que já praticou bastante sobre eventos, vamos criar páginas que respondem às interações dos usuários com os exercícios a seguir:

### Antes de começar: versionando seu código

Para versionar seu código, utilize o seu repositório de exercícios. 😉

Caso você ainda não tenha um, crie um repositório com o nome **Trybe** ou algo similar.

Abaixo você vai ver exemplos de como organizar cada exercício em uma `branch`, com arquivos e `commits` específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.

1.  Crie uma `branch` com o nome `exercises/5.3` _(bloco 5, dia 3)_
    
    Copiar
    
        $ git checkout -b exercises/5.3
    
2.  Crie um diretório `exercises` e, dentro dele, um diretório `5_3`. O caminho completo para o diretório a partir da raiz do projeto deverá ser `exercises/5_3`.
    
    Copiar
    
        $ mkdir -p exercises/5_3
        $ cd exercises/5_3
        $ pwd
        <path_to_your_repo>/exercises/5_3
    
3.  Crie um arquivo com um nome descritivo para cada exercício. Os arquivos devem estar dentro da pasta `exercises/5_3`, mas lembre-se de fazer os commits a partir da pasta raiz do seu projeto!
    
    Copiar
    
        $ git status
        On branch exercises/5.3
        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git checkout -- <file>..." to discard changes in working directory)
        
          modified:   exercise_1.html
    
4.  Faça `commits` organizados durante o processo de resolução de cada um de seus exercícios. As mensagens dos `commits` devem ser breves e explicativas.
    
    Copiar
    
        $ git log
        commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercises/5.3)
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
    
5.  Lembre-se que **na primeira vez** que você for enviar o código para o repositório remoto a branch `exercises/5.3` não vai existir lá.  
    Então você precisa configurar o `remote` utilizando a opção `--set-upstream` (ou `-u`, que é a forma abreviada).
    
    Copiar
    
        $ git push -u origin exercises/5.3
    
6.  Lembre-se de enviar os commits para o repositório do `GitHub` de vez em sempre.
    
    Copiar
    
        $ git push origin exercises/5.3
    
7.  Quando terminar os exercícios, seus códigos devem estar todos commitados na branch `exercises/5.3`, e disponíveis no repositório remoto do `GitHub`.  
    Pra finalizar, crie um [`Pull Request`](https://help.github.com/en/articles/creating-a-pull-request) , adicione uma descrição bem bacana, e envie para a monitoria e/ou colegas revisarem! 🤜🏼🤛🏼
    

* * *

### Parte I

No link abaixo, você vai encontrar a descrição de dois exercícios. Crie um arquivo `.html` no `VSCode` para cada um e resolva-os separadamente.

_Use a sua criatividade para incrementar ainda mais a solução._ 🤓

[Exercícios 1 e 2: Mão na massa!](https://www.teaching-materials.org/jsweb/exercises/events)

* * *

### Parte II

Para os próximos exercícios, você deve abrir um novo arquivo _HTML_ no `VSCode`, copiar o código abaixo para dentro do arquivo, e então seguir as instruções da página.

Copiar

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exercício - Parte 2</title>
        <!-- Seu código JavaScript pode vir aqui -->
        <!-- Seu código JavaScript pode vir aqui -->
        <!-- Seu código JavaScript pode vir aqui -->
      </head>
      <body>
        <div>
          <h1>Exercício - Parte 2</h1>
          <hr />
          <h2>Tarefa 1</h2>
          <p>
            Adicione um botão HTML na área indicada abaixo. Usando um
            <strong>EventListener</strong> adicione um evento ao botão, onde ao ser
            clicado um alerta contendo a mensagem "Você clicou no botão" deverá ser
            exibido.
          </p>
          <div class="tarefa1">Adicione o botão aqui!</div>
          <hr />
          <h2>Tarefa 2</h2>
          <p>
            Para realizar essa tarefa utilize à tag &lt;script&gt; abaixo. Você deve
            declarar duas variáveis, uma chamada <strong>productPrice</strong> com o
            valor <strong>59,99</strong> e a outra chamada
            <strong>discount</strong> com o valor <strong>0,30</strong>. Na
            sequência adicione um botão um botão HTML abaixo da tag &lt;script&gt; e
            utilizando um <strong>EventListener</strong> adicione um evento a esse
            botão, onde ao ser clicado deve-se multiplicar
            <strong>productPrice</strong> por <strong>discount</strong> e então
            exibir um alerta contendo a mensagem "Desconto de R$(resultado)", sendo
            <strong>discount</strong> o resultado da multiplicação.
          </p>
          <script language="javascript" type="text/javascript">
            //JavaScript para a tarefa 2
            //JavaScript para a tarefa 2
            //JavaScript para a tarefa 2
          </script>
          <hr />
          <h2>Bônus</h2>
          <p>
            Para essa última tarefa você irá precisar de duas imagens do mesmo
            tamanho. Adicione uma imagem a está página usando uma tag HTML &lt;img
            /&gt;. Usando os manipuladores de eventos
            <strong>onMouseOver()</strong> e <strong>onMouseLeave()</strong>, faça com
            que a imagem mude para a segunda imagem quando o ponteiro do mouse
            passar sobre ela e, em seguida, voltar para a primeira imagem quando o
            ponteiro do mouse for movido para fora da imagem.
          </p>
          <p>
            Além disso, sempre que um dos eventos for realizado deve-se logar no
            console qual dos eventos acabou de ocorrer.
          </p>
          <!-- Adicione a tag <img /> aqui -->
        </div>
      </body>
    </html>

> Exercício inspirado no exercício da página JSWeb disponível [aqui](http://nptcstudents.co.uk/andrewg/jsweb/JavaScriptEventHandlersExercise.html).

* * *

### Parte III

Neste exercício, você vai aprender a usar mais funções e eventos para criar um efeito de animação na página. Lembre-se que você utilizar o `VSCode` para realizar os exercícios. 🐈

**_Resolva o exercício até pelo menos o Bonus #2._**

Lembre-se de sempre pesquisar suas dúvidas. Abaixo estão alguns links que podem ser úteis pra você:

*   [Atributo `innerWidth` do objeto `window`](https://www.w3schools.com/jsref/prop_win_innerheight.asp);
    
*   [Função `setInterval` do objeto `window`](https://www.w3schools.com/js/js_timing.asp).
    

Faça o `commit` do seu código após conseguir implementar cada exercício!

[Exercício 5: Vamos nessa!](https://www.teaching-materials.org/jsweb/exercises/animation)

* * *

### Parte IV

Neste exercício, você vai praticar a leitura e a interpretação de código _HTML_, _CSS_ e _JavaScript_. 🙂

No link abaixo, está um trecho de código do _CodePen_, no qual já existe:

*   A estrutura do código em _HTML_;
    
*   A estilização da página com o _CSS_;
    
*   Funções _JavaScript_ para adicionar comportamentos à pagina.
    

Seu trabalho é adicionar o evento correto a cada um dos três elementos `button` da página e um evento ao elemento `input`, de forma que a função mais apropriada definida no _JavaScript_ seja acionada quando quem usa interagir com cada elemento, _clicando_ ou _digitando_, por exemplo.

*   Já existem quatro funções _JavaScript_ definidas:
    
    *   `goDark()`;
    *   `complainMessage()`;
    *   `finishTheStory()`;
    *   `typeAndScream()`.

Dicas:

*   Não é _necessário_ mas se quiser pode alterar o CSS da página;
    
*   Coloque seu fone de ouvido enquanto estiver resolvendo este exercício _(percebeu a tag `audio` no HTML?)_!
    
*   [Evento do `JavaScript` que ocorre ao digitar algo em um `input`](https://www.w3schools.com/jsref/event_oninput.asp)
    

Você pode ficar à vontade para fazer o exercício diretamente no _CodePen_, mas recomendamos que copie o código no seu arquivo correspondente ao exercício. Assim, você vai conseguir enviá-lo ao seu repositório no `GitHub`. 😉

[Exercício 6: Conectando as pontas.](https://codepen.io/prosetech/pen/oRxMmZ)

* * *
