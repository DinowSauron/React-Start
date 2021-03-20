# React-Start
Um projeto em branco para saber como começar no react (com o next), com algumas seções prontas


<p align="center">
  <a href="#Como-Instalar-as-Dependencias">Dependencias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Como-Iniciar-Do-Zero">Iniciar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Sass">Sass</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Cookies">Cookies.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Tecnologias Envolvidas:

* React.js
* Next.js
* Typescript
* Sass

## Como Instalar as Dependencias
Certifique-se de estar no diretorio que cotenha o arquivo ``packge.json``

* ``cd ./Pasta/OutraPasta`` > 'Pasta' e 'OutraPasta' é o nome da do diretorio relativo ao atual (``./``)
* ``cd ..`` >  Retorna uma pasta da localização atual
    * ex: ``c:/Code/Program``, Apos executar o código, estará aqui: ``c:/Code``
* ``yarn add package.json`` > Instala as dependencias do arquivo Package.json do diretorio executado.

## Como Iniciar Do Zero

Veremos o passo a passo para iniciar um projeto utilizando react, sem a necessidade de clonar este repositorio:

* ``npm install -g yarn`` Se necessário, para instalar o ``yarn`` gerenciador de pacotes.
* ``yarn create next-app app-name-in-lowercase`` 'app-name-in-lowercase' será o nome do seu aplicativo, esse processo pode demorar um pouco...
* ``cd app-name`` Entra na pasta criada no processo anterior, você deve executar os comandos neste diretorio.
* ``yarn add typescript @types/react @types/react-dom @types/node -D`` Caso decida utilizar o javascript, adicione suas tipagens.
* ``yarn dev`` Inicializa o projeto, abrindo um browser, note que o yarn dev está no modo desenvolvedor, não é o modo de produção!

Feito isso você já terá uma aplicação react em funcionamento, lembre-se de mudar os arquivos .js para .tsx para utilizar o typescript, e quando pronto, poderá ser publicado na vercell.

---

## Licença

Note que este projeto está sob a licensa MIT. Veja o arquivo para mais detalhes: [LICENSE](LICENSE) 

<br>
<br>
<br>
<br>
<br>
<br>

## Compoenentes

Aqui vão poucas referencias de como adicionar mais conteudo a sua aplicação, Mais serão adicionadas conforme for evoluindo.

* [Cookies](#Cookies)
* [SASS](#Sass)

---

### Cookies
Adicione os cookies para salvar dados! 

* ``yarn add js-cookie`` Blibioteca que ajuda na criação de cookies.
* ``yarn add @types/js-cookie -D`` adiciona o typescript apenas na produção, não para o projeto final, já que tudo se transformará em javascript
* ``import Cookies from 'js-cookie';`` importação
* Exemplo de uso:
    ```js
    useEffect(() => {
        Cookies.set('nomeVar', String(vida));
        Cookies.set('nomeVar2', String(nivel));
    }, [vida, nivel]);```

---

### Sass
Dé superpoderes ao seu CSS! utilize sass!
Com as vantagens de uma linguagem de programação, com sass você pode aninhar as css, comentar, criar condições, e criar variaveis, deixando mais dinâmico e simples de se entender!

* ``yarn add sass -D`` Adiciona o Sass para o ambiente de desenvolvimento, já que ele irá transformar tudo em css no final.
* Exemplo de uso:
    ```scss
    //Nome do arquivo > styles.scss:
        html {
            background: #256400;
        }
        .container{
            .floater{
                width: 100%:
                float: left;
                color: blue;

                img{
                    position: relative;

                    .main{
                        border: 1px solid #000;
                        width: 100%;
                        height: 100%;
                    }
                    .exitIcon{
                        position: absolute;
                        font-weight: bold;
                        top: 0;
                        left: 100%;
                    }
                }

                &:hover{
                    color: red;
                }
            }

            .exit{
                position: absolute;
                top: -100px;
                left: 0;
            }
        }
    ```
    No final ele irá renderizar como se fosse assim: <br>
    //Nome do arquivo: styles.css
    ```css
        html {
            background: #256400;
        }
        .container .floater{
            width: 100%:
            float: left;
            color: blue;
        }
        .container .floater img{
            position: relative;
        }
        .container .floater img.main{
            border: 1px solid #000;
            width: 100%;
            height: 100%;
        }
        .container .floater img.exitIcon{
            position: absolute;
            font-weight: bold;
            top: 0;
            left: 100%;
        }
        .container .floater:hover{
            color: red;
        }
        .container .exit{
            position: absolute;
            top: -100px;
            left: 0;
        }
    ```

---
