Exercícios
----------

###### Tempo sugerido para realização: 140 minutos

### Antes de começar: versionando seu código

Para versionar seu código, utilize o seu repositório de exercícios. 😉

Caso você ainda não tenha um, crie um repositório com o nome **Trybe** ou algo similar.

Abaixo você vai ver exemplos de como organizar cada exercício em uma `branch`, com arquivos e `commits` específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.

1.  Crie uma `branch` com o nome `exercises/5.4` _(bloco 5, dia 4)_
    
    Copiar
    
        $ git checkout -b exercises/5.4
    
2.  Crie um diretório `exercises` e, dentro dele, um diretório `5_4`. O caminho completo para o diretório a partir da raiz do projeto deverá ser `exercises/5_4`.
    
    Copiar
    
        $ mkdir -p exercises/5_4
        $ cd exercises/5_4
        $ pwd
        <path_to_your_repo>/exercises/5_4
    
3.  Crie um arquivo com um nome descritivo para cada exercício. Os arquivos devem estar dentro da pasta `exercises/5_4`, mas lembre-se de fazer os commits a partir da pasta raiz do seu projeto!
    
    Copiar
    
        $ git status
        On branch exercises/5.4
        Changes not staged for commit:
          (use "git add <file>..." to update what will be committed)
          (use "git checkout -- <file>..." to discard changes in working directory)
        
          modified:   exercise_1.html
    
4.  Faça `commits` organizados durante o processo de resolução de cada um de seus exercícios. As mensagens dos `commits` devem ser breves e explicativas.
    
    Copiar
    
        $ git log
        commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercises/5.4)
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
    
5.  Lembre-se que **na primeira vez** que você for enviar o código para o repositório remoto a branch `exercises/5.4` não vai existir lá.  
    Então você precisa configurar o `remote` utilizando a opção `--set-upstream` (ou `-u`, que é a forma abreviada).
    
    Copiar
    
        $ git push -u origin exercises/5.4
    
6.  Lembre-se de enviar os commits para o repositório do `GitHub` de vez em sempre.
    
    Copiar
    
        $ git push origin exercises/5.4
    
7.  Quando terminar os exercícios, seus códigos devem estar todos commitados na branch `exercises/5.4`, e disponíveis no repositório remoto do `GitHub`.  
    Pra finalizar, crie um [`Pull Request`](https://help.github.com/en/articles/creating-a-pull-request) , adicione uma descrição bem bacana, e envie para a monitoria e/ou colegas revisarem! 🤜🏼🤛🏼
    

* * *

### Instruções para realização dos exercícios

### Agora a prática

Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.

Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize [este link](https://www.lipsum.com/) para gerar o texto para sua página.

Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.

As pessoas devem ter o poder de alterar:

*   Cor de fundo da tela;
*   Cor do texto;
*   Tamanho da fonte;
*   Espaçamento entre as linhas do texto;
*   Tipo da fonte (_Font family_).

Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

#### Bônus

*   As propriedades descritas acima são **obrigatórias**, mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo a melhora da experiência da pessoa que lê em sua página.