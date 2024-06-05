openButtonLogin();
function openButtonLogin() {

    if (localStorage.getItem("name") == null) {
        document.getElementById("login").style.display = "block";
        document.getElementById("username").style.display = "none";
        document.getElementById("logout").style.display = "none";
    } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        document.getElementById("username").innerHTML = localStorage.getItem("name");
    }
}


function scrollToDirection(direction) {

    if (direction == 'top') {
        for (var i = 0; i < 100; i++) {
            document.getElementById("container-boxes").scrollTop += 1;

        }
    } else {
        for (var i = 0; i < 100; i++) {
            document.getElementById("container-boxes").scrollTop += 1;

        }
    }
}
const contents = [
    {
        title: "Lógica de Programação",
        content: "Bem-vindos &agrave; nossa aula sobre l&oacute;gica de programa&ccedil;&atilde;o! Neste curso, vamos explorar os conceitos fundamentais que s&atilde;o essenciais para quem est&aacute; come&ccedil;ando no mundo da programa&ccedil;&atilde;o. Se voc&ecirc; &eacute; novo nessa jornada ou est&aacute; buscando refor&ccedil;ar seus conhecimentos, este &eacute; o lugar certo para come&ccedil;ar.<br /><div style='width: 100%; display: flex'><div><b class='subtitle'><br/>1. O que &eacute; L&oacute;gica de Programa&ccedil;&atilde;o?</b><br />Antes de mergulharmos nos detalhes, vamos entender o que &eacute; l&oacute;gica de programa&ccedil;&atilde;o. Basicamente, a l&oacute;gica de programa&ccedil;&atilde;o &eacute; a habilidade de pensar de forma estruturada e l&oacute;gica para resolver problemas. &Eacute; a base sobre a qual todas as linguagens de programa&ccedil;&atilde;o s&atilde;o constru&iacute;das. Ao dominar a l&oacute;gica de programa&ccedil;&atilde;o, voc&ecirc; ser&aacute; capaz de desenvolver algoritmos eficientes e escrever c&oacute;digo de forma mais clara e organizada.<br/><br/><b class='subtitle'>2. Principais Conceitos</b><br/><b>a) Algoritmos: </b>Um algoritmo &eacute; uma sequ&ecirc;ncia finita e ordenada de instru&ccedil;&otilde;es que descreve um processo para resolver um problema espec&iacute;fico. Ele &eacute; como uma receita que detalha passo a passo o que fazer para alcan&ccedil;ar um resultado desejado.</div><img style='width: 30%; margin-left: 14px' src='https://logicamentepro.com.br/images/card.png'></div><br /><b>b) Vari&aacute;veis e Tipos de Dados:</b> As vari&aacute;veis s&atilde;o espa&ccedil;os de mem&oacute;ria que armazenam valores. Os tipos de dados determinam que tipo de valor uma vari&aacute;vel pode armazenar, como n&uacute;meros, texto ou valores l&oacute;gicos (verdadeiro/falso).<br /><br /><b>c) Estruturas de Controle de Fluxo:</b> S&atilde;o mecanismos que controlam a execu&ccedil;&atilde;o do programa. Isso inclui estruturas condicionais, que permitem tomar decis&otilde;es com base em condi&ccedil;&otilde;es, e estruturas de repeti&ccedil;&atilde;o, que executam um bloco de c&oacute;digo v&aacute;rias vezes.<br /><br /><b>d) Fun&ccedil;&otilde;es / Métodos:</b> S&atilde;o blocos de c&oacute;digo que realizam uma tarefa espec&iacute;fica e podem ser reutilizados em diferentes partes do programa. Isso ajuda a modularizar o c&oacute;digo e facilita a manuten&ccedil;&atilde;o.<br /><br /><b>e) Arrays / Listas:</b> S&atilde;o estruturas de dados que armazenam cole&ccedil;&otilde;es de elementos do mesmo tipo. Permitem armazenar e manipular m&uacute;ltiplos valores de forma eficiente.<br /><br /><b>f) Recurs&atilde;o:</b> &Eacute; um conceito onde uma fun&ccedil;&atilde;o chama a si mesma para resolver um problema menor. &Eacute; uma t&eacute;cnica poderosa, mas requer cuidado para evitar loops infinitos.<br /><br /><b>g) Modulariza&ccedil;&atilde;o:</b> &Eacute; a pr&aacute;tica de dividir um programa em partes menores para facilitar o desenvolvimento e a manuten&ccedil;&atilde;o. Cada parte deve ter uma responsabilidade bem definida.<br /><br /><b>h) Pseudoc&oacute;digo:</b> &Eacute; uma forma de representar algoritmos usando uma linguagem de descri&ccedil;&atilde;o mais pr&oacute;xima da linguagem humana. &Eacute; &uacute;til para planejar a l&oacute;gica do programa antes de escrever o c&oacute;digo em uma linguagem de programa&ccedil;&atilde;o real.<br /><br /><b class='subtitle'>3. Conclus&atilde;o</b><br />Dominar a l&oacute;gica de programa&ccedil;&atilde;o &eacute; essencial para qualquer aspirante a programador. Com uma compreens&atilde;o s&oacute;lida desses conceitos fundamentais, voc&ecirc; estar&aacute; pronto para aprender qualquer linguagem de programa&ccedil;&atilde;o com muito mais facilidade. Continue praticando, explorando e construindo coisas incr&iacute;veis com o poder da l&oacute;gica de programa&ccedil;&atilde;o!",
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Linguagem de Programação C",
        content: "<div>A linguagem de programação C é uma das linguagens mais antigas e populares. É amplamente usada em sistemas operacionais, jogos e aplicativos de software. Entender a lógica de programação em C é fundamental para desenvolver habilidades de programação.</div><p>1. Estrutura Básica de um Programa em C:</p><p>Um programa em C é composto por funções. A função principal é chamada de main() e é onde o programa começa a ser executado. #include <stdio.h> é uma diretiva de pré-processador que permite usar a função printf() para exibir mensagens na tela. A função main() é onde o programa começa a ser executado. return 0; indica que o programa terminou com sucesso.</p>ou seja:<br>#include <stdio.h> <br>int main() <br>{ <br>	printf(Olá, mundo!\n);<br>     return 0; <br>}<br>Esse programa vai escrever em nossa tela “Olá, mundo!” e irá pular uma linha por conta do “\n” na linha que será printada na tela.<br><p>2. Variáveis em C:</p><p>Em C, as variáveis são usadas para armazenar dados. Antes de usar uma variável, ela precisa ser declarada com um tipo de dado específico. Exemplos:<br>Float - Valor que pode conter números quebrados ou nãoBigint - Valor inteiro que é maior que o int normal, suporta números muito maioresInt - como o próprio nome diz, somente números inteiros</p><p>3. Estruturas de Controle em C:</p><p>Em C, existem estruturas de controle que permitem controlar o fluxo de execução do programa. As principais são:</p><br>Condicional (if/else): Usada para tomar decisões com base em condições.<br>Se uma coisa for “isso” ele irá fazer uma ação, senão ele irá fazer outra coisa.<br>Loop (for, while, do-while): Usado para repetir um conjunto de instruções várias vezes.<br>No caso loop como diz, é um loop ou seja vai ficar em loop refazendo as ações que você determinar, se você determinar para escrever “Legal” como está em repetição iria aparecer assim:<br>LegalLegalLegalLegalLegalLegalLegalLegal…",
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Bibliotecas básicas em C",
        content: "<div>Programação C é conhecida pela sua portabilidade e eficiência. Um dos motivos para isso é seu avaliado conjunto de bibliotecas complementárias. As funções das bibliotecas em C são vastas e permitem a realização de tarefas variadas, variando desde ações básicas de entrada e saída até manipulação de strings e alocação de memória. Nesta demo, examinaremos algumas das bibliotecas básicas mais utilizadas em C e compreender as funções fundamentais delas.</div><br/><b class='subtitle'>1. Biblioteca stdio.h:</b>\nEssa biblioteca fornece funções para entrada e saída de dados.<br/><br/><p>Exemplo:<br/>printf(): Utilizada para imprimir na tela.<br/>scanf(): Usada para receber entrada do usuário.<br/>getchar() e putchar(): Para entrada e saída de caracteres.</p><br/><br/><b class='subtitle'>2. Biblioteca stdlib.h: </b>Oferece funções para alocação de memória, conversões numéricas, geração de números pseudoaleatórios, entre outros.<br/><br/> <p>Exemplo:<br/> malloc(), calloc(), realloc(): Alocação de memória dinâmica.<br/> atoi(), atof(), strtol(): Conversão de strings para números.<br/> rand(), srand(): Geração de números aleatórios.</p><br/><b class='subtitle'>3. Biblioteca string.h: </b>Fornece funções para manipulação de strings.<br/><p><br/>Exemplo:<br/>strlen(): Retorna o comprimento de uma string.<br/>strcpy(), strncpy(), strcat(), strncat(): Manipulação de strings.<br/>strcmp(), strncmp(): Comparação de strings.</p>",
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Declaração de variáveis",
        content: "Em linguagens tipadas como o C que é uma linguagem de tipagem estática, ou seja, o compilador confere antes de executar o código se as variáveis inseridas coincidem com os tipos de dados definidos, a declaração de variáveis é de suma importância, devido a necessidade de ter uma variável a qual se pode chamar. Para isso usamos a %, aqui vai um exemplo:<br/><b class='subtitle'><br/>Tipos de Variáveis</b> <div>As variáveis de tipo int, definem números inteiros e podem ser chamadas tanto por %i quanto %d, devido a ambos poderem ser números inteiros, entretanto, a variável double só pode ser chamada por %d, por poder ser também um número não inteiro(com casas decimais), a variável float serve também para apresentar números com casas decimais, a diferença entre elas é que a variável float tem uma precisão de até 6 números após a casa decimal, enquanto double tem a precisão de 10, por isso, quando há possibilidade de apresentar um número com muitas casas decimais, o correto é optar pelo double, já o char é uma variável que é utilizada para guardar caracteres. E quando se trata de guarda uma palavra inteira, deve ser apresentada previamente a quantidade necessária para guardar a palavra.       </div>"
        ,
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Comandos de Entrada e Saída",
        content: "<h3>Funções de entrada:</h3><p>Uma função de entrada de dados em C é uma função que permite ao programa receber informações ou dados de alguma fonte externa, como o usuário, um arquivo ou outro programa. Essas funções são essenciais para interação e processamento de dados em programas.</p>Exemplo:<br><p>scanf(): Essa função é usada para ler dados do teclado (entrada padrão) ou de outros fluxos de entrada, como arquivos, e atribuí-los a variáveis. Ela permite especificar o formato esperado dos dados a serem lidos.</p><p>fgets(): Esta função lê uma linha inteira de texto do teclado (entrada padrão) ou de um arquivo e armazena no buffer especificado. Ela é útil para ler strings de entrada de comprimento desconhecido. </p><h3>Funções de saída:</h3><p>Uma função de saída de dados em C é aquela que permite ao programa enviar informações ou dados para algum destino externo, como o monitor (tela), um arquivo ou outro dispositivo de saída. Essas funções são fundamentais para exibir resultados, relatórios ou mensagens para o usuário ou para armazenar informações em arquivos.</p>Exemplo:<br><p>printf(): Essa função é usada para imprimir dados na tela (saída padrão). Ela formata os dados de acordo com a especificação fornecida e os exibe na tela.</p><p>fputs() em C é utilizada para escrever uma string em um arquivo. Ela aceita dois argumentos: a string que você deseja escrever e o ponteiro para o arquivo onde deseja escrever essa string.</p>",
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Condicional",
        content: "<div><h3>O que são estruturas condicionais?</h3>As estruturas condicionais são recursos essenciais na lógica de programação, permitindo verificar condições e alterar o fluxo do algoritmo com base nessas verificações. Elas são amplamente usadas em projetos para controlar o conteúdo exibido, criar formulários dinâmicos, desenvolver mídias interativas e tornar páginas responsivas. Dominar essas estruturas é fundamental para se destacar como um profissional completo na área de desenvolvimento.<h3>Como funcionam as estruturas condicionais?</h3>As estruturas condicionais funcionam com base na avaliação de uma condição usando o comando 'if', seguido pela declaração dos blocos de comando para cada cenário possível. Elas podem ser simples, onde apenas uma ação é tomada se a condição for verdadeira, ou compostas, onde ações diferentes são tomadas para cenários verdadeiros e falsos, usando o comando 'else'. Estruturas condicionais encadeadas permitem testar múltiplas condições. Durante a execução, as condições são interpretadas como valores lógicos (verdadeiro ou falso) para determinar o fluxo do programa.<h3>Exemplo da estrutura de condicional:</h3>if (condição) {<br/><p>bloco para condição 'verdadeira';</p>} else {<br/><p>bloco para condição 'falsa';</p>}<h3>Utilizando o else if:</h3>if (condição 1) {<br/><p>bloco para condição 1 'verdadeira';</p>} else if (condição 2) {<br/><p>bloco para condição 2 'verdadeira';</p>} else {<br/><p>bloco para condição 'falsa';</p>}</div>"
        ,
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Laços de Repetição",
        content: "<h2> O que são estruturas condicionais? </h2>  <div>  Os laços de repetição, também conhecidos como loops, são estruturas de programação que permitem executar um bloco de código várias vezes de forma eficiente. Eles são fundamentais em programação para automatizar tarefas repetitivas e para processar coleções de dados.</div> <div> Existem geralmente três tipos principais de laços de repetição em muitas linguagens de programação: </div> <ol> <li> For loop (Laço para): O laço for é usado quando se sabe antecipadamente quantas vezes o bloco de código precisa ser repetido. Ele geralmente tem uma estrutura que inclui uma variável de controle, uma condição de parada e uma atualização da variável de controle em cada iteração. </li>    <li> While loop (Laço enquanto): O laço while é usado quando o número de iterações não é conhecido antecipadamente, mas o bloco de código precisa ser repetido enquanto uma condição especificada for verdadeira. Ele verifica a condição antes de cada iteração. </li>   <li>  Do-While loop (Laço faça-enquanto): Alguns idiomas, como C/C++, possuem uma estrutura chamada do-while que é semelhante ao while loop, exceto que a condição é verificada após a execução do bloco de código, garantindo que o bloco seja executado pelo menos uma vez. </li>  </ol><div>Em todos os tipos de loops, é importante garantir que a condição de saída seja eventualmente alcançada para evitar loops infinitos, o que pode travar o programa. Além disso, é comum usar variáveis de controle para rastrear o progresso do loop e evitar problemas de lógica, como acessar dados fora dos limites ou repetir a execução de certos blocos de código desnecessariamente.</div>",
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Funções",
        content: "<div>Uma função é um bloco de código que executa uma tarefa específica e pode ser chamado de qualquer parte de um programa. Elas são fundamentais na organização e modularização do código, permitindo que tarefas complexas sejam divididas em partes menores e mais gerenciáveis.</br></br>A função é referenciada(chamada) pelo programa principal através de um nome atribuído a ela.<br/>A utilização de funções, muito comum na programação estruturada, visa subdividir um programa em partes(módulos) menores que realizam uma tarefa bem definida.<br/><br/><h3>Esqueleto de uma função</h3>tipo_de_retorno nome_da_função (lista de parâmetros) {<br/> <p> instruções;</p><p>retorno_da_função;</p>}</div ><h2>Parâmetros</h2><div>A Lista de Parametros, também é chamada de Lista de Argumentos, é opcional. Funcionam como a interface de comunicação (passagem de valores/dados) entre o programa (chamador) e a função. Os parâmetros de uma função são definidos como se estivesse declarando uma variável, entre os parênteses do cabeçalho da função. Caso precise declarar mais de um parâmetro, basta separá-los por vírgulas. Existem 2 maneiras de passar valor através dos parâmetros: Por valor ou Por referência. Neese momento, será apresentado a passagem de parâmetro por valor. Quando introduzirmos o conceito de Ponteiro, apresentaremos o outro tipo.No exemplo a seguir temos a função SOMA que possui dois parâmetros, sendo o primeiro um float (a) e o segundo um int (b).</div>"
        ,
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Conhecendo o Arduino",
        content: "O Arduino é uma plataforma eletrônica de código aberto baseada em software e hardware de fácil utilização, sendo ideal para iniciantes e para qualquer pessoa que deseja construir projetos eletrônicos. O Arduino foi desenvolvido em 2005 por Massimo Banzi, David Cuarielles, Tom Igoe, Gianluca Martino e David Mellist, com o objetivo de ser um dispositivo acessível, de baixo custo, funcional e fácil de usar tanto por estudantes e projetistas amadores, quanto por profissionais.<br/><br/>O arduino adota o conceito de hardware livre, onde podemos montar, modificar, personalizar ou melhorar o Arduino, e de código aberto, que quer dizer que seu código-fonte pode ser acessado e modificado, como por exemplo do linux um dos maiores OS que temos, essa popularidade veio por causa do seu código fonte aberto.<br/><br/>Junto do aruino temos as placas Arduino que permitem a conexão de circuitos eletrônicos aos seus terminais, o que possibilita a leitura de entradas – luz em um sensor, o acionamento de um botão ou uma mensagem SMS, e transformar estas informações em uma saída controlando algum dispositivo – por exemplo ligando um LED, ativando um motor ou enviando uma mensagem.<br/><br/>As placas Arduino podem ser conectadas ao computador por meio do barramento serial universal (USB), possibilitando sua utilização como placa de interface e controlar dispositivos por meio do seu computador. A plataforma Arduino oferece uma série de vantagens em relação a outras plataformas, o que o tornou popular entre professores, alunos, amadores e projetistas, tais como:<br/><br/>• Possuir ambiente multiplataforma, ou seja, pode ser executado nos principais sistemas operacionais comercializáveis;<br/>• Contar uma IDE de programação própria;<br/>• Poder ser programado utilizando um cabo USB;<br/>• Possuir hardware e software de fonte aberta;<br/>• Ter sido desenvolvido em um ambiente educacional, sendo ideal para iniciantes.<br/><br/>Esse hardware é controlado pelos seus componentes que são programaveis através de uma linguagem que pode ser C ou C++."
        ,
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Componentes básicos do Arduino",
        content: "O principal componente do arduino é o microcontrolador e é responsável pelo processamento de software e controle de portas de entrada e saída. É o cérebro do sistema e opera como um computador em um chip pequeno. Além disso, existem outros componentes básicos, como por exemplo:<br/><br/><div class='flex-img'><img style='width:250px' src='https://th.bing.com/th/id/R.df326cde14afef4545b7a2bc23ad7625?rik=l%2bbJm8UtntbWvg&riu=http%3a%2f%2fcdn-reichelt.de%2fbilder%2fweb%2fxxl_ws%2fA300%2fARDUINO_LEONARDO_02.png&ehk=6cxsEGtB4SZke8MFv%2ff6aU8vZr3xZ3dXBqtA33X%2fHNk%3d&risl=&pid=ImgRaw&r=0'></img><br/><div class='infos-arduino'>Fios e jumpers: Conectam os componentes.<br/>LEDs: Emitem luz quando energizados.<br/>Motores: Permitem o movimento de objetos.<br/>Botões: Enviam sinais quando pressionados.<br/>Sensores: Detectam mudanças no ambiente.<br/>Resistores: Controlam o fluxo de corrente.<br/>Servomotores: Controlam o movimento angular com precisão.<br/>Displays: Exibem informações.<br/>Protoboard: Para prototipar circuitos de forma rápida e fácil.</div></div><br/><h3>Um pouco mais a fundo sobre LEDs, resistores e sensores:</h3>Além disso, os LEDs (Light Emitting Diodes) assumem o papel de artistas da luz, iluminando seus projetos Arduino com cores vibrantes e brilho intenso. Imagine-os como miniaturas de lâmpadas, emitindo luz quando energizados, transformando suas ideias em realidade luminosa.</div> <div>Os resistores são essenciais para o controle de fluxo de corrente em circuitos Arduino. Considere-os como reguladores precisos, que controlam a corrente elétrica na intensidade e no caminho certo sem prejudicar o funcionamento dos demais componentes</div><br><div>Por fim, os sensores são transdutores que monitoram o meio ambiente. Eles transformam dados físicos em sinais elétricos, permitindo que o nosso Arduino os controle. Temperatura, umidade, distância, luminosidade, obstáculos, posicionamento, presença e movimentação são os tipos mais comuns. O Arduino pode usar os atuadores para processar as informações dos sensores.</div>"
        ,
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
    {
        title: "Simuladores de robótica",
        content: "<p>Os simuladores de robôs são ferramentas importantes no campo da robótica, fornecendo um ambiente virtual para projetar, testar e melhorar algoritmos e sistemas robóticos antes de serem implementados em dispositivos reais. Eles são usados ​​em diversas aplicações, desde o treinamento de operadores até o desenvolvimento de algoritmos de controle.</p><p>Um simulador de robô normalmente inclui modelos físicos que representam o comportamento e a interação do robô com o ambiente, bem como uma interface de programação que permite aos usuários desenvolver e testar algoritmos de controle, design, movimento e percepção. Esses simuladores podem ser complexos, desde ambientes 2D simples até simulações 3D muito realistas, e podem ser usados ​​em robôs que vão desde manipuladores industriais até veículos autônomos.        </p><p>As vantagens dos simuladores de robôs incluem custos e tempo de desenvolvimento mais baixos, a capacidade de testar cenários complexos e arriscados em um ambiente seguro e a facilidade de iterar e otimizar algoritmos antes da implantação real.        </p><p>No entanto, os simuladores também apresentam algumas limitações, como a precisão limitada dos modelos físicos e a dificuldade em simular completamente o comportamento real do ambiente e dos sensores. Apesar disso, eles ainda desempenham um papel importante no desenvolvimento e no progresso da robótica em muitos campos.</p>"
        ,
        questions: [

            {
                title: "Atividade 1",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 2",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            },
            {
                title: "Atividade 3",
                content: "a) O que é lógica de programação?",
                options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
                correctAnswer: "a"
            }
        ]
    },
]
function changeInfos(title, div) {

    if (title.includes("Atividade")) {

        var options = tasksOptions(title, div, contents);

        if (options == false) {
            document.getElementById("tasks").style.display = "block";
            document.getElementById("title-arrow").style.display = "none";
            document.getElementById("send-task").style.display = "none";
            return;
        } else {
            const currentThemeTitle = localStorage.getItem("currentQuestion", title);
            const currentTheme = contents.find(content => content.title === currentThemeTitle);
            console.log(currentTheme.questions)
            console.log(title)
            const { options, correctAnswer, content } = currentTheme.questions.find(question => question.title === title);

            document.getElementById("options-tasks").innerHTML = options;
            document.getElementById("send-task").style.display = "block";
            document.getElementById("correct-answer").innerText = correctAnswer
            document.getElementById("description").innerHTML = content;
        }

    } else {
        document.getElementById("title").innerHTML = title;
        try {
            let content = contents.find(content => content.title === title).content;
            document.getElementById("description").innerHTML = content;
        } catch (e) {
            document.getElementById("description").innerHTML = "";
        }



        localStorage.setItem("currentQuestion", title)
        document.getElementById("tasks").style.display = "block";
        document.getElementById("title-arrow").style.display = "none";
        document.getElementById("send-task").style.display = "none";
        document.getElementById("options-tasks").innerHTML = "";


        var boxes = document.getElementsByClassName("box");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style = "2px solid rgba(255, 255, 255, 0.08)";
        }

        if (div != null) {
            div.style = "border: 2px solid #fff";
        }
    }
}


function sendTask() {

    let url = "https://catolica.vercel.app/api/user/";
    // let url = "http://localhost:8080/api/user/";

    let level = localStorage.getItem("level");
    let userID = localStorage.getItem("userID");
    let answerMarked = '';
    document.getElementsByName("1").forEach(e => {
        if (e.checked) {
            answerMarked = e.id.charAt(e.id.length - 1);
        }
    });
    const correctAnswer = document.getElementById("correct-answer").textContent
    if (answerMarked === correctAnswer) {
        fetch(url + "level/" + userID + "/10", {
            method: 'PUT'
        }).then(function (res) {
            if (res.status == 200) {
                alert("Você acertou! Ganhou mais 10 pontos");
                location.href = "../home/index.html";
            } else {
                alert("Erro ao concluir atividade");
            }
        }).catch(function (err) {
            console.log(err);
        })
    } else {
        fetch(url + "level/" + userID + "/0", {
            method: 'PUT'
        }).then(function (res) {
            if (res.status == 200) {
                alert("Você errou! Estude mais e tente recuperar sua pontuação nas outras atividades!");
                location.href = "../home/index.html";
            } else {
                alert("Erro ao concluir atividade");
            }
        }).catch(function (err) {
            console.log(err);
        })
    }



}

function getUserLevel() {
    let url = "https://catolica.vercel.app/api/user/";
    let userID = localStorage.getItem("userID");

    fetch(url + "level/" + userID, {
        method: 'GET',
    }).then(function (res) {
        console.log(res);
        return res.json();
    }).then(function (data) {
        console.log(data);
        localStorage.setItem("level", data);
    }).catch(function (err) {
        console.log(err);
    })
}


function tasksOptions(title, div, contents) {
    let level = localStorage.getItem("level");
    let page = localStorage.getItem("currentQuestion");

    if (localStorage.getItem("name") == null) {
        location.href = "../login/index.html";
        return;
    }

    if (level == null || level == 0 || level == undefined || level == "undefined") {
        level = 1;
    }

    document.getElementById("tasks").style.display = "none";
    document.getElementById("title-arrow").style.display = "block";
    switch (page) {
        case "Lógica de Programação":

            if (title == "Atividade 1") {
                return alertTask(level, 1);
            } else if (title == "Atividade 2") {
                return alertTask(level, 2);
            } else if (title == "Atividade 3") {
                return alertTask(level, 3);
            }
            break;
        case "Linguagem de Programação C":
            if (title == "Atividade 1") {
                return alertTask(level, 4);
            } else if (title == "Atividade 2") {
                return alertTask(level, 5);
            } else if (title == "Atividade 3") {
                return alertTask(level, 6);
            }
            break;
        case "Bibliotecas básicas em C":
            if (title == "Atividade 1") {
                return alertTask(level, 7);
            } else if (title == "Atividade 2") {
                return alertTask(level, 8);
            } else if (title == "Atividade 3") {
                return alertTask(level, 9);
            }
            break;
        case "Declaração de variáveis":
            if (title == "Atividade 1") {
                return alertTask(level, 10);
            } else if (title == "Atividade 2") {
                return alertTask(level, 11);
            } else if (title == "Atividade 3") {
                return alertTask(level, 12);
            }
            break;
        case "Comandos de Entrada e Saída":
            if (title == "Atividade 1") {
                return alertTask(level, 13);
            } else if (title == "Atividade 2") {
                return alertTask(level, 14);
            } else if (title == "Atividade 3") {
                return alertTask(level, 15);
            }
            break;
        case "Condicional":
            if (title == "Atividade 1") {
                return alertTask(level, 16);
            } else if (title == "Atividade 2") {
                return alertTask(level, 17);
            } else if (title == "Atividade 3") {
                return alertTask(level, 18);
            }
            break;
        case "Laços de Repetição":
            if (title == "Atividade 1") {
                return alertTask(level, 19);
            } else if (title == "Atividade 2") {
                return alertTask(level, 20);
            } else if (title == "Atividade 3") {
                return alertTask(level, 21);
            }
            break;
        case "Funções":
            if (title == "Atividade 1") {
                return alertTask(level, 22);
            } else if (title == "Atividade 2") {
                return alertTask(level, 23);
            } else if (title == "Atividade 3") {
                return alertTask(level, 24);
            }
            break;
        case "Conhecendo o Arduino":
            if (title == "Atividade 1") {
                return alertTask(level, 25);
            } else if (title == "Atividade 2") {
                return alertTask(level, 26);
            } else if (title == "Atividade 3") {
                return alertTask(level, 27);
            }
            break;
        case "Componentes básicos do Arduino":
            if (title == "Atividade 1") {
                return alertTask(level, 28);
            } else if (title == "Atividade 2") {
                return alertTask(level, 29);
            } else if (title == "Atividade 3") {
                return alertTask(level, 30);
            }
            break;
        case "Simuladores de robótica":
            if (title == "Atividade 1") {
                return alertTask(level, 31);
            } else if (title == "Atividade 2") {
                return alertTask(level, 32);
            } else if (title == "Atividade 3") {
                return alertTask(level, 33);
            }
            break;
    }
}

function alertTask(level, step) {
    if (level < step) {
        alert("Você precisa completar as atividades anteriores para acessar essa atividade");
        return false;
    } else if (level > step) {
        alert("Você já completou essa atividade");
        return false;
    }
    return true;
}


changeInfos("Lógica de Programação", document.getElementById("box-first"));



/////////////////////////////////////////////////////////////////////////////////////////////
///                                        API FETCHS                                     ///
/////////////////////////////////////////////////////////////////////////////////////////////


function login() {
    let url = "https://catolica.vercel.app/api/";
    var name = document.getElementById("name").value;

    if (name == "") {
        alert("Digite seu nome");
    } else {

        fetch(url + "user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            console.log(data);
            if (data?.name) {
                localStorage.setItem("name", name);
                localStorage.setItem("userID", data.id);
                localStorage.setItem("level", data.level);
                location.href = "../home/index.html";
            } else {
                alert("Erro ao logar");
            }
        }).catch(function (err) {
            console.log(err);
        })
    }
}


function logout() {
    localStorage.removeItem("name");
    location.href = "../home/index.html";
    document.getElementById("logout").style.display = "none";
    document.getElementById("logout").style.display = "none";

}


function getRanking() {
    console.log("ranking!!!!")

    let url = "https://catolica.vercel.app/api/";


    fetch(url + "user", {
        method: 'GET',
    }).then(function (res) {
        return res.json();
    }
    ).then(function (data) {
        console.log(data);
        let ranking = data.sort((a, b) => b.points - a.points);
        console.log(ranking);
        let table = document.getElementById("ranking-table");
        let html = " <tr><th>Posição</th><th>Nome</th><th>Pontuação</th></tr>";
        ranking.forEach((user, index) => {
            html += "<tr><td>" + (index + 1) + "</td><td>" + user.name + "</td><td>" + user.points + "</td></tr>";
        });
        table.innerHTML = html;
    }).catch(function (err) {
        console.log(err);
    })


}