openButtonLogin();
function openButtonLogin() {

    if (localStorage.getItem("name") == null) {
        document.getElementById("login").style.display = "block";
        document.getElementById("username").style.display = "none";
        document.getElementById("logout").style.display = "none";
    } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("logout").style.display = "block";
        document.getElementById("username").innerHTML = localStorage.getItem("name") + " (" + localStorage.getItem("level") + ")";
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
                "title": "Atividade 1",
                "content": "e) Qual é a função das variáveis na programação?",
                "options": "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>Armazenar valores constantes. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'>Armazenar valores que podem variar durante a execução do programa.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>Executar operações matemáticas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>Controlar a execução do programa.</label>",
                "correctAnswer": "b"
            },
            {
                "title": "Atividade 2",
                "content": "f) Qual dos seguintes não é um tipo de dado em programação?",
                "options": "<br/><input type='radio' name='1' id='atv2a'> <label for='atv2a'>Inteiro. <br/><input type='radio' name='1' id='atv2b'> <label for='atv2b'>Texto.</label><br/><input type='radio' name='1' id='atv2c'> <label for='atv2c'>Lógico.</label><br/><input type='radio' name='1' id='atv2d'> <label for='atv2d'>Imutável.</label>",
                "correctAnswer": "d"
            },
            {
                "title": "Atividade 3",
                "content": "g) Qual dos seguintes tipos de dados é utilizado para armazenar uma coleção de elementos do mesmo tipo?",
                "options": "<br/><input type='radio' name='1' id='atv3a'> <label for='atv3a'>String. <br/><input type='radio' name='1' id='atv3b'> <label for='atv3b'>Booleano.</label><br/><input type='radio' name='1' id='atv3c'> <label for='atv3c'>Array.</label><br/><input type='radio' name='1' id='atv3d'> <label for='atv3d'>Float.</label>",
                "correctAnswer": "c"
            }
        ]
    },
    {
        title: "Linguagem de Programação C",
        content: '<p>Bem-vindos &agrave; nossa aula sobre a linguagem de programa&ccedil;&atilde;o C! Neste curso, vamos explorar os conceitos fundamentais da linguagem C, uma das mais antigas e influentes linguagens de programa&ccedil;&atilde;o. Se voc&ecirc; est&aacute; come&ccedil;ando sua jornada no mundo da programa&ccedil;&atilde;o ou buscando refor&ccedil;ar seus conhecimentos em C, este &eacute; o lugar certo para come&ccedil;ar.</p><ol><li><p><strong>O que &eacute; a Linguagem C?</strong> A linguagem C foi desenvolvida nos anos 1970 por Dennis Ritchie no Bell Labs. &Eacute; uma linguagem de baixo n&iacute;vel, pr&oacute;xima ao hardware, mas ainda assim possui elementos de alto n&iacute;vel. C &eacute; amplamente usada em sistemas operacionais, sistemas embarcados e aplica&ccedil;&otilde;es de alto desempenho devido &agrave; sua efici&ecirc;ncia e controle sobre os recursos de hardware.</p></li><li><p><strong>Principais Conceitos</strong></p></li></ol><p>a) <strong>Sintaxe B&aacute;sica:</strong> A sintaxe de C &eacute; a estrutura e as regras que definem como os programas s&atilde;o escritos e interpretados. Um programa C &eacute; composto por fun&ccedil;&otilde;es, e a fun&ccedil;&atilde;o principal &eacute; a <code>main()</code>, onde a execu&ccedil;&atilde;o come&ccedil;a.</p><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-c"><span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;stdio.h&gt;</span></span><br/><br/> <span class="hljs-type">int</span> <span class="hljs-title function_">main</span><span class="hljs-params">()</span> { <br/><span class="hljs-built_in"><p>printf</span>(<span class="hljs-string">"Ol&aacute;, Mundo!"</span>);</p><p> <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>; <br/></p>} </code></div></div><p>b) <strong>Vari&aacute;veis e Tipos de Dados:</strong> Em C, voc&ecirc; <br/>precisa declarar o tipo de dado que a vari&aacute;vel vai armazenar antes de us&aacute;-la. Os principais tipos de dados incluem <code>int</code> (inteiro), <code>float</code> (ponto flutuante), <code>char</code> (caractere) e <code>double</code> (ponto flutuante de precis&atilde;o dupla).</p><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-c"><span class="hljs-type">int</span> idade = <span class="hljs-number">18</span>; <br/><span class="hljs-type">float</span> altura = <span class="hljs-number">1.75</span>;<br /><span class="hljs-type">char</span> letra = <span class="hljs-string">A</span>; <br/></code></div></div><p>c) <strong>Estruturas de Controle de Fluxo:</strong> C possui estruturas de controle como <code>if</code>, <code>else</code>, <code>switch</code> para tomadas de decis&atilde;o, e <code>for</code>, <code>while</code>, <code>do-while</code> para repeti&ccedil;&atilde;o.</p><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-c"><span class="hljs-keyword">if</span> (idade &gt;= <span class="hljs-number">18</span>) { <br/><p><span class="hljs-built_in">printf</span>(<span class="hljs-string">"Maior de idade."</span>); </p>} <span class="hljs-keyword">else</span> { <br/><p><span class="hljs-built_in">printf</span>(<span class="hljs-string">"Menor de idade.\n"</span>); </p>} <span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) { <br/><p><span class="hljs-built_in">printf</span>(<span class="hljs-string">"%d\n"</span>, i); </p>} </code></div></div><p>d) <strong>Fun&ccedil;&otilde;es:</strong> Fun&ccedil;&otilde;es em C permitem dividir o c&oacute;digo em blocos reutiliz&aacute;veis. Voc&ecirc; <br/>pode definir suas pr&oacute;prias fun&ccedil;&otilde;es al&eacute;m da <code>main()</code>.</p><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-c"><span class="hljs-type">void</span> <span class="hljs-title function_">saudacao</span><span class="hljs-params">()</span> { <br/><p><span class="hljs-built_in">printf</span>(<span class="hljs-string">"Bem-vindo ao curso de C!"</span>); </p>} <span class="hljs-type">int</span> <span class="hljs-title function_">main</span><span class="hljs-params">()</span> { <br/><p>saudacao(); </p><p><span class="hljs-keyword">return</span> <span class="hljs-number">0</span>; </p>} </code></div></div><p>e) <strong>Arrays:</strong> Arrays s&atilde;o cole&ccedil;&otilde;es de elementos do mesmo tipo. Voc&ecirc; <br/>pode declarar e acessar elementos de um array usando &iacute;ndices.</p><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-c"><span class="hljs-type">int</span> numeros[<span class="hljs-number">5</span>] = {<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>}; <br/><span class="hljs-built_in">printf</span>(<span class="hljs-string">"%d\n"</span>, numeros[<span class="hljs-number">0</span>]); </code></div></div><p>f) <strong>Ponteiros:</strong> Ponteiros s&atilde;o vari&aacute;veis que armazenam o endere&ccedil;o de mem&oacute;ria de outra vari&aacute;vel. Eles s&atilde;o poderosos e essenciais para manipula&ccedil;&atilde;o eficiente de mem&oacute;ria.</p><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-c"><span class="hljs-type">int</span> numero = <span class="hljs-number">10</span>; <br/><span class="hljs-type">int</span> *p = &amp;numero; <br/><span class="hljs-built_in">printf</span>(<span class="hljs-string">"Valor: %d\n"</span>, *p); <br/></code></div></div><p>g) <strong>Estruturas:</strong> Estruturas (<code>struct</code>) permitem agrupar diferentes tipos de dados sob um &uacute;nico nome.</p><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-c"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Pessoa</span> {<br/></span><p> <span class="hljs-type">char</span> nome[<span class="hljs-number">50</span>];</p> <p><span class="hljs-type">int</span> idade; </p>} <br/><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">Pessoa</span> <span class="hljs-title">pessoa1</span>;</span> pessoa1.idade = <span class="hljs-number">18</span>; <br/></code></div></div><p><strong>Conclus&atilde;o</strong> Aprender C &eacute; <br/>uma excelente maneira de entender como o software interage com o hardware. A linguagem C oferece um equil&iacute;brio entre controle de baixo n&iacute;vel e abstra&ccedil;&otilde;es de alto n&iacute;vel, tornando-se uma ferramenta poderosa para qualquer programador. Continue praticando, explorando e construindo coisas incr&iacute;veis com o poder da linguagem C!</p>',
        questions: [

            {
                "title": "Atividade 1",
                "content": "a) Qual é a função da diretiva de pré-processador #include <stdio.h> em um programa em C?",
                "options": "<br/><input type='radio' name='1' id='atv4a'> <label for='atv4a'>Permitir o uso da função printf() para exibir mensagens na tela. <br/><input type='radio' name='1' id='atv4b'> <label for='atv4b'>Definir a função principal main().</label><br/><input type='radio' name='1' id='atv4c'> <label for='atv4c'>Indicar que o programa terminou com sucesso.</label><br/><input type='radio' name='1' id='atv4d'> <label for='atv4d'>Declarar variáveis.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 2",
                "content": "b) Qual tipo de dado é usado em C para armazenar números que podem conter casas decimais?",
                "options": "<br/><input type='radio' name='1' id='atv5a'> <label for='atv5a'>Int. <br/><input type='radio' name='1' id='atv5b'> <label for='atv5b'>Bigint.</label><br/><input type='radio' name='1' id='atv5c'> <label for='atv5c'>Float.</label><br/><input type='radio' name='1' id='atv5d'> <label for='atv5d'>Char.</label>",
                "correctAnswer": "c"
            },
            {
                "title": "Atividade 3",
                "content": "c) Qual estrutura de controle em C é usada para repetir um conjunto de instruções várias vezes?",
                "options": "<br/><input type='radio' name='1' id='atv6a'> <label for='atv6a'>Condicional (if/else). <br/><input type='radio' name='1' id='atv6b'> <label for='atv6b'>Função main().</label><br/><input type='radio' name='1' id='atv6c'> <label for='atv6c'>Diretiva de pré-processador (#include).</label><br/><input type='radio' name='1' id='atv6d'> <label for='atv6d'>Loop (for, while, do-while).</label>",
                "correctAnswer": "d"
            }
        ]
    },
    {
        title: "Bibliotecas básicas em C",
        content: "<div>Programação C é conhecida pela sua portabilidade e eficiência. Um dos motivos para isso é seu avaliado conjunto de bibliotecas complementárias. As funções das bibliotecas em C são vastas e permitem a realização de tarefas variadas, variando desde ações básicas de entrada e saída até manipulação de strings e alocação de memória. Nesta demo, examinaremos algumas das bibliotecas básicas mais utilizadas em C e compreender as funções fundamentais delas.</div><br/><b class='subtitle'>1. Biblioteca stdio.h:</b>\nEssa biblioteca fornece funções para entrada e saída de dados.<br/><p><code class='hljs'> printf(): Utilizada para imprimir na tela.<br/>scanf(): Usada para receber entrada do usuário.<br/>getchar() e putchar(): Para entrada e saída de caracteres.</p></code><br/><b class='subtitle'>2. Biblioteca stdlib.h: </b>Oferece funções para alocação de memória, conversões numéricas, geração de números pseudoaleatórios, entre outros.<br/> <p><code class='hljs'> malloc(), calloc(), realloc(): Alocação de memória dinâmica.<br/> atoi(), atof(), strtol(): Conversão de strings para números.<br/> rand(), srand(): Geração de números aleatórios.</p></code><br/><b class='subtitle'>3. Biblioteca string.h: </b>Fornece funções para manipulação de strings.<br/><p><code class='hljs'>strlen(): Retorna o comprimento de uma string.<br/>strcpy(), strncpy(), strcat(), strncat(): Manipulação de strings.<br/>strcmp(), strncmp(): Comparação de strings.</p></code><br/><b class='subtitle'>4. Assista o video antes de fazer as atividades: </b><br/><br/><br/><div class='iframe'><iframe width='100%' height='500' src='https://www.youtube.com/embed/2GRXxen1-p4?si=AfDD9Y-OcVIVFT-L' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></div>",
        questions: [

            {
                "title": "Atividade 1",
                "content": "a) Qual função da biblioteca stdio.h é usada para receber entrada do usuário?",
                "options": "<br/><input type='radio' name='1' id='atv4a'> <label for='atv4a'>printf(). <br/><input type='radio' name='1' id='atv4b'> <label for='atv4b'>scanf().</label><br/><input type='radio' name='1' id='atv4c'> <label for='atv4c'>putchar().</label><br/><input type='radio' name='1' id='atv4d'> <label for='atv4d'>getchar().</label>",
                "correctAnswer": "b"
            },
            {
                "title": "Atividade 2",
                "content": "b) Qual função da biblioteca stdlib.h é usada para alocação de memória dinâmica?",
                "options": "<br/><input type='radio' name='1' id='atv5a'> <label for='atv5a'>atoi(). <br/><input type='radio' name='1' id='atv5b'> <label for='atv5b'>rand().</label><br/><input type='radio' name='1' id='atv5c'> <label for='atv5c'>malloc().</label><br/><input type='radio' name='1' id='atv5d'> <label for='atv5d'>strlen().</label>",
                "correctAnswer": "c"
            },
            {
                "title": "Atividade 3",
                "content": "c) Qual função da biblioteca string.h é usada para comparar duas strings?",
                "options": "<br/><input type='radio' name='1' id='atv6a'> <label for='atv6a'>strlen(). <br/><input type='radio' name='1' id='atv6b'> <label for='atv6b'>strcpy().</label><br/><input type='radio' name='1' id='atv6c'> <label for='atv6c'>strcmp().</label><br/><input type='radio' name='1' id='atv6d'> <label for='atv6d'>strcat().</label>",
                "correctAnswer": "c"
            }
        ]
    },
    {
        title: "Declaração de variáveis",
        content: "Em linguagens tipadas como o C que é uma linguagem de tipagem estática, ou seja, o compilador confere antes de executar o código se as variáveis inseridas coincidem com os tipos de dados definidos, a declaração de variáveis é de suma importância, devido a necessidade de ter uma variável a qual se pode chamar. Para isso usamos a %, aqui vai um exemplo:<br/><b class='subtitle'><br/>1. Tipos de Variáveis</b> <p><div>As variáveis de tipo int, definem números inteiros e podem ser chamadas tanto por %i quanto %d, devido a ambos poderem ser números inteiros, entretanto, a variável double só pode ser chamada por %d, por poder ser também um número não inteiro(com casas decimais), a variável float serve também para apresentar números com casas decimais, a diferença entre elas é que a variável float tem uma precisão de até 6 números após a casa decimal, enquanto double tem a precisão de 10, por isso, quando há possibilidade de apresentar um número com muitas casas decimais, o correto é optar pelo double, já o char é uma variável que é utilizada para guardar caracteres. E quando se trata de guarda uma palavra inteira, deve ser apresentada previamente a quantidade necessária para guardar a palavra.</div></p><table class='tabela-variaveis' dir='ltr' border='1' cellspacing='0' cellpadding='0' data-sheets-root='1'><colgroup><col width='100' /><col width='100' /><col width='100' /><col width='240' /><col width='357' /></colgroup><tbody><tr><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;Tipo de Dado&quot;}'>Tipo de Dado</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;Tamanho (bits)&quot;}'>Tamanho (bits)</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;Valor de Exemplo&quot;}'>Valor de Exemplo</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;Declara&ccedil;&atilde;o&quot;}'>Declara&ccedil;&atilde;o</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;Impress&atilde;o com printf&quot;}'>Impress&atilde;o com printf</td></tr><tr><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;int&quot;}'>int</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:32}'>32</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:-123}'>-123</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;int numero = -123;&quot;}'>int numero = -123;</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;printf(\&quot;%d\&quot;, numero);&quot;}'>printf('%d', numero);</td></tr><tr><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;short&quot;}'>short</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:16}'>16</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:-32768}'>-32768</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;short numero_curto = -32768;&quot;}'>short numero_curto = -32768;</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;printf(\&quot;%d\&quot;, numero_curto);&quot;}'>printf('%d', numero_curto);</td></tr><tr><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;long&quot;}'>long</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:64}'>64</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;-92233720368547&quot;}'>-92233720368547</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;long numero_longo = -92233720368547;&quot;}'>long numero_longo = -92233720368547;</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;printf(\&quot;%ld\&quot;, numero_longo);&quot;}'>printf('%ld', numero_longo);</td></tr><tr><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;float&quot;}'>float</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:32}'>32</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:314159}' data-sheets-numberformat='{&quot;1&quot;:2,&quot;2&quot;:&quot;#,##0&quot;,&quot;3&quot;:1}'>314.159</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;float pi = 3.14159;&quot;}'>float pi = 3.14159;</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;printf(\&quot;%f\&quot;, pi);&quot;}'>printf('%f', pi);</td></tr><tr><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;double&quot;}'>double</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:64}'>64</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:314159265358979}' data-sheets-numberformat='{&quot;1&quot;:2,&quot;2&quot;:&quot;#,##0&quot;,&quot;3&quot;:1}'>314.159.265.358.979</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;double pi_double = 3.14159265358979;&quot;}'>double pi_double = 3.14159265358979;</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;printf(\&quot;%lf\&quot;, pi_double);&quot;}'>printf('%lf', pi_double);</td></tr><tr><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;char&quot;}'>char</td><td data-sheets-value='{&quot;1&quot;:3,&quot;3&quot;:8}'>8</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;a'&quot;,&quot;6&quot;:1}'>a'</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;char letra = 'a';&quot;}'>char letra = 'a';</td><td data-sheets-value='{&quot;1&quot;:2,&quot;2&quot;:&quot;printf(\&quot;%c\&quot;, letra);&quot;}'>printf('%c', letra);</td></tr></tbody></table>"
        ,
        questions: [

            {
                "title": "Atividade 1",
                "content": "Em C, qual especificador de formato é usado para declarar uma variável do tipo inteiro?",
                "options": "<br/><input type='radio' name='1' id='atv4a'> <label for='atv4a'>%d. <br/><input type='radio' name='1' id='atv4b'> <label for='atv4b'>%f.</label><br/><input type='radio' name='1' id='atv4c'> <label for='atv4c'>%c.</label><br/><input type='radio' name='1' id='atv4d'> <label for='atv4d'>%s.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 2",
                "content": "Qual a diferença entre as variáveis do tipo float e double em C?",
                "options": "<br/><input type='radio' name='1' id='atv5a'> <label for='atv5a'>Float tem precisão de até 6 números após a casa decimal, enquanto double tem precisão de até 10 números. <br/><input type='radio' name='1' id='atv5b'> <label for='atv5b'>Float é usado para números inteiros, enquanto double é usado para caracteres.</label><br/><input type='radio' name='1' id='atv5c'> <label for='atv5c'>Float é usado para números inteiros, enquanto double é usado para números com casas decimais.</label><br/><input type='radio' name='1' id='atv5d'> <label for='atv5d'>Float tem precisão de até 10 números após a casa decimal, enquanto double tem precisão de até 6 números.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 3",
                "content": "Qual tipo de variável em C é utilizado para armazenar caracteres individuais?",
                "options": "<br/><input type='radio' name='1' id='atv6a'> <label for='atv6a'>int. <br/><input type='radio' name='1' id='atv6b'> <label for='atv6b'>float.</label><br/><input type='radio' name='1' id='atv6c'> <label for='atv6c'>double.</label><br/><input type='radio' name='1' id='atv6d'> <label for='atv6d'>char.</label>",
                "correctAnswer": "d"
            }
        ]
    },
    {
        title: "Comandos de Entrada e Saída",
        content: "<h3>1. Funções de entrada:</h3><p>Uma função de entrada de dados em C é uma função que permite ao programa receber informações ou dados de alguma fonte externa, como o usuário, um arquivo ou outro programa. Essas funções são essenciais para interação e processamento de dados em programas.</p><br/>Exemplos: <br><code class='hljs'><p>scanf(): Essa função é usada para ler dados do teclado (entrada padrão) ou de outros fluxos de entrada, como arquivos, e atribuí-los a variáveis. Ela permite especificar o formato esperado dos dados a serem lidos.</p></code><code class='hljs'><p>fgets(): Esta função lê uma linha inteira de texto do teclado (entrada padrão) ou de um arquivo e armazena no buffer especificado. Ela é útil para ler strings de entrada de comprimento desconhecido. </p></code><h3>2. Funções de saída:</h3><p>Uma função de saída de dados em C é aquela que permite ao programa enviar informações ou dados para algum destino externo, como o monitor (tela), um arquivo ou outro dispositivo de saída. Essas funções são fundamentais para exibir resultados, relatórios ou mensagens para o usuário ou para armazenar informações em arquivos.</p><br/>Exemplos: <br><code class='hljs'><p>printf(): Essa função é usada para imprimir dados na tela (saída padrão). Ela formata os dados de acordo com a especificação fornecida e os exibe na tela.</p></code><code class='hljs'><p>fputs() em C é utilizada para escrever uma string em um arquivo. Ela aceita dois argumentos: a string que você deseja escrever e o ponteiro para o arquivo onde deseja escrever essa string.</p></code>",
        questions: [

            {
                "title": "Atividade 1",
                "content": "Qual função em C é usada para ler dados do teclado e atribuí-los a variáveis?",
                "options": "<br/><input type='radio' name='1' id='atv4a'> <label for='atv4a'>printf(). <br/><input type='radio' name='1' id='atv4b'> <label for='atv4b'>scanf().</label><br/><input type='radio' name='1' id='atv4c'> <label for='atv4c'>fputs().</label><br/><input type='radio' name='1' id='atv4d'> <label for='atv4d'>fgets().</label>",
                "correctAnswer": "b"
            },
            {
                "title": "Atividade 2",
                "content": "Qual função em C é usada para imprimir dados na tela?",
                "options": "<br/><input type='radio' name='1' id='atv5a'> <label for='atv5a'>scanf(). <br/><input type='radio' name='1' id='atv5b'> <label for='atv5b'>fgets().</label><br/><input type='radio' name='1' id='atv5c'> <label for='atv5c'>fputs().</label><br/><input type='radio' name='1' id='atv5d'> <label for='atv5d'>printf().</label>",
                "correctAnswer": "d"
            },
            {
                "title": "Atividade 3",
                "content": "Qual função em C é usada para ler uma linha inteira de texto de um arquivo e armazená-la em um buffer?",
                "options": "<br/><input type='radio' name='1' id='atv6a'> <label for='atv6a'>scanf(). <br/><input type='radio' name='1' id='atv6b'> <label for='atv6b'>fgets().</label><br/><input type='radio' name='1' id='atv6c'> <label for='atv6c'>fputs().</label><br/><input type='radio' name='1' id='atv6d'> <label for='atv6d'>printf().</label>",
                "correctAnswer": "b"
            }
        ]
    },
    {
        title: "Condicional",
        content: "<div><h3>1. O que são estruturas condicionais?</h3>As estruturas condicionais são recursos essenciais na lógica de programação, permitindo verificar condições e alterar o fluxo do algoritmo com base nessas verificações. Elas são amplamente usadas em projetos para controlar o conteúdo exibido, criar formulários dinâmicos, desenvolver mídias interativas e tornar páginas responsivas. Dominar essas estruturas é fundamental para se destacar como um profissional completo na área de desenvolvimento.<h3>2. Como funcionam as estruturas condicionais?</h3>As estruturas condicionais funcionam com base na avaliação de uma condição usando o comando <code>if</code>, seguido pela declaração dos blocos de comando para cada cenário possível. Elas podem ser simples, onde apenas uma ação é tomada se a condição for verdadeira, ou compostas, onde ações diferentes são tomadas para cenários verdadeiros e falsos, usando o comando <code>else</code>. Estruturas condicionais encadeadas permitem testar múltiplas condições. Durante a execução, as condições são interpretadas como valores lógicos (verdadeiro ou falso) para determinar o fluxo do programa.<br/><br/><h4>Exemplo da estrutura de condicional <code>if</code>:</h4><code class='hljs'>if (condição) {<br/><p>bloco para condição 'verdadeira';</p>} else {<br/><p>bloco para condição 'falsa';</p>}</code><h4>Utilizando o <code>else if</code> e o <code>else</code>:</h4><code class='hljs'>if (condição 1) {<br/><p>bloco para condição 1 'verdadeira';</p>} else if (condição 2) {<br/><p>bloco para condição 2 'verdadeira';</p>} else {<br/><p>bloco para condição 'falsa';</p>}</code></div>",
        questions: [

            {
                "title": "Atividade 1",
                "content": "O que são estruturas condicionais em programação?",
                "options": "<br/><input type='radio' name='1' id='atv4a'> <label for='atv4a'>Estruturas que permitem verificar condições e alterar o fluxo do algoritmo com base nessas verificações. <br/><input type='radio' name='1' id='atv4b'> <label for='atv4b'>Estruturas usadas apenas para repetir blocos de código. </label><br/><input type='radio' name='1' id='atv4c'> <label for='atv4c'>Estruturas que permitem apenas a entrada de dados pelo usuário.</label><br/><input type='radio' name='1' id='atv4d'> <label for='atv4d'>Estruturas que permitem apenas a saída de dados para o usuário.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 2",
                "content": "Como funcionam as estruturas condicionais em C?",
                "options": "<br/><input type='radio' name='1' id='atv5a'> <label for='atv5a'>Avaliam uma condição e executam blocos de comando com base na avaliação de verdadeiro ou falso. <br/><input type='radio' name='1' id='atv5b'> <label for='atv5b'>Permitem a repetição infinita de blocos de código. </label><br/><input type='radio' name='1' id='atv5c'> <label for='atv5c'>Permitem apenas a entrada de dados do usuário.</label><br/><input type='radio' name='1' id='atv5d'> <label for='atv5d'>Permitem a declaração de variáveis dinâmicas.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 3",
                "content": "Qual comando é usado para testar múltiplas condições em uma estrutura condicional em C?",
                "options": "<br/><input type='radio' name='1' id='atv6a'> <label for='atv6a'>if-else. <br/><input type='radio' name='1' id='atv6b'> <label for='atv6b'>else if. </label><br/><input type='radio' name='1' id='atv6c'> <label for='atv6c'>for. </label><br/><input type='radio' name='1' id='atv6d'> <label for='atv6d'>while.</label>",
                "correctAnswer": "b"
            }
        ]
    },
    {
        title: "Laços de Repetição",
        content: "Os laços de repetição, também conhecidos como loops, são estruturas de programação que permitem executar um bloco de código várias vezes de forma eficiente. Eles são fundamentais em programação para automatizar tarefas repetitivas e para processar coleções de dados.</div> <div> Existem geralmente três tipos principais de laços de repetição em muitas linguagens de programação: </div> <ol> <li> For loop (Laço para): O laço for é usado quando se sabe antecipadamente quantas vezes o bloco de código precisa ser repetido. Ele geralmente tem uma estrutura que inclui uma variável de controle, uma condição de parada e uma atualização da variável de controle em cada iteração.<br/><code class='hljs' >for (int i = 0; i &lt; 5; i++) {<br />&nbsp; &nbsp; printf('Itera&ccedil;&atilde;o %d\n', i);<br /> }</code> </li>    <li> While loop (Laço enquanto): O laço while é usado quando o número de iterações não é conhecido antecipadamente, mas o bloco de código precisa ser repetido enquanto uma condição especificada for verdadeira. Ele verifica a condição antes de cada iteração.<br/><code class='hljs'>int i = 0;<br/> while (i &lt; 5) {<br />&nbsp; &nbsp; &nbsp;printf('Itera&ccedil;&atilde;o %d\n', i);<br />&nbsp; &nbsp; &nbsp;i++;<br /> }<br /></code> </li>   <li>  Do-While loop (Laço faça-enquanto): Algumas linguagens, como C/C++, possuem uma estrutura chamada do-while que é semelhante ao while loop, exceto que a condição é verificada após a execução do bloco de código, garantindo que o bloco seja executado pelo menos uma vez.<br/><code class='hljs'>int i = 0;<br /> do {<br />&nbsp; &nbsp; printf('Itera&ccedil;&atilde;o %d\n', i);<br />&nbsp; &nbsp; i++;<br /> } while (i &lt; 5);<br /><br /></code> </li>  </ol><div><p>Em todos os tipos de loops, é importante garantir que a condição de saída seja eventualmente alcançada para evitar loops infinitos, o que pode travar o programa. Além disso, é comum usar variáveis de controle para rastrear o progresso do loop e evitar problemas de lógica, como acessar dados fora dos limites ou repetir a execução de certos blocos de código desnecessariamente.</p></div>",
        questions: [

            {
                "title": "Atividade 1",
                "content": "O que são laços de repetição em programação?",
                "options": "<br/><input type='radio' name='1' id='atv4a'> <label for='atv4a'>Estruturas de programação que permitem executar um bloco de código várias vezes de forma eficiente. <br/><input type='radio' name='1' id='atv4b'> <label for='atv4b'>Estruturas de programação que permitem executar um bloco de código apenas uma vez. </label><br/><input type='radio' name='1' id='atv4c'> <label for='atv4c'>Estruturas de programação que permitem executar um bloco de código baseado em condições. </label><br/><input type='radio' name='1' id='atv4d'> <label for='atv4d'>Estruturas de programação que permitem executar um bloco de código baseado em eventos.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 2",
                "content": "Quando o laço do-while é verificado em comparação com o while loop?",
                "options": "<br/><input type='radio' name='1' id='atv5a'> <label for='atv5a'>A condição é verificada antes da execução do bloco de código no while loop, enquanto no do-while loop a condição é verificada após a execução do bloco de código. <br/><input type='radio' name='1' id='atv5b'> <label for='atv5b'>A condição é verificada após a execução do bloco de código no while loop, enquanto no do-while loop a condição é verificada antes da execução do bloco de código. </label><br/><input type='radio' name='1' id='atv5c'> <label for='atv5c'>Ambos os loops verificam a condição antes da execução do bloco de código. </label><br/><input type='radio' name='1' id='atv5d'> <label for='atv5d'>Ambos os loops verificam a condição após a execução do bloco de código.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 3   ",
                "content": "O que é importante para evitar em todos os tipos de loops?",
                "options": "<br/><input type='radio' name='1' id='atv6a'> <label for='atv6a'>Garantir que a condição de saída seja eventualmente alcançada para evitar loops infinitos. <br/><input type='radio' name='1' id='atv6b'> <label for='atv6b'>Garantir que o bloco de código seja executado pelo menos uma vez. </label><br/><input type='radio' name='1' id='atv6c'> <label for='atv6c'>Garantir que o bloco de código seja executado o máximo possível de vezes. </label><br/><input type='radio' name='1' id='atv6d'> <label for='atv6d'>Garantir que a condição de saída seja sempre evitada para maximizar a eficiência.</label>",
                "correctAnswer": "a"
            }
        ]
    },
    {
        title: "Funções",
        content: "<div>Uma função é um bloco de código que executa uma tarefa específica e pode ser chamado de qualquer parte de um programa. Elas são fundamentais na organização e modularização do código, permitindo que tarefas complexas sejam divididas em partes menores e mais gerenciáveis.</br></br>A função é referenciada(chamada) pelo programa principal através de um nome atribuído a ela.<br/>A utilização de funções, muito comum na programação estruturada, visa subdividir um programa em partes(módulos) menores que realizam uma tarefa bem definida.<br/><br/><h3>1. Esqueleto de uma função</h3><code class='hljs'>tipo_de_retorno nome_da_função (lista de parâmetros) {<br/> <p> instruções;</p><p>retorno_da_função;</p>}</code></div><h3>2. Parâmetros</h3><div>A Lista de Parametros, também é chamada de Lista de Argumentos, é opcional. Funcionam como a interface de comunicação (passagem de valores/dados) entre o programa (chamador) e a função. Os parâmetros de uma função são definidos como se estivesse declarando uma variável, entre os parênteses do cabeçalho da função. Caso precise declarar mais de um parâmetro, basta separá-los por vírgulas. Existem 2 maneiras de passar valor através dos parâmetros: Por valor ou Por referência. Neese momento, será apresentado a passagem de parâmetro por valor.<br/><h3>3. Assista o video sobre funcoes: </h3><br/><div class='iframe'><iframe width='100%' height='500' src='https://www.youtube.com/embed/jd9PABbIvbA?si=Y1fPcaNhL-mGTWsg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe></div>"
        ,
        questions: [

            {
                "title": "Atividade 1",
                "content": "O que é uma função em programação?",
                "options": "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>Um bloco de código que executa uma tarefa específica e pode ser chamado de qualquer parte de um programa. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'>Um bloco de código que executa uma tarefa específica e só pode ser chamado do programa principal. </label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>Um bloco de código que executa múltiplas tarefas ao mesmo tempo. </label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>Um bloco de código que executa uma tarefa geral e não pode ser chamado de outras partes do programa.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 2",
                "content": "Qual é a função dos parâmetros em uma função?",
                "options": "<br/><input type='radio' name='1' id='atv2a'> <label for='atv2a'>Os parâmetros funcionam como a interface de comunicação entre o programa e a função, permitindo passar valores/dados. <br/><input type='radio' name='1' id='atv2b'> <label for='atv2b'>Os parâmetros controlam o fluxo de execução do programa. </label><br/><input type='radio' name='1' id='atv2c'> <label for='atv2c'>Os parâmetros são usados apenas para declarar variáveis internas à função. </label><br/><input type='radio' name='1' id='atv2d'> <label for='atv2d'>Os parâmetros são usados para definir o tipo de retorno da função.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 3",
                "content": "Qual é a função da lista de parâmetros em uma função?",
                "options": "<br/><input type='radio' name='1' id='atv3a'> <label for='atv3a'>Funcionam como a interface de comunicação entre o programa e a função, permitindo passar valores/dados. <br/><input type='radio' name='1' id='atv3b'> <label for='atv3b'>Controlam o fluxo de execução do programa. </label><br/><input type='radio' name='1' id='atv3c'> <label for='atv3c'>São usados apenas para declarar variáveis internas à função. </label><br/><input type='radio' name='1' id='atv3d'> <label for='atv3d'>São usados para definir o tipo de retorno da função.</label>",
                "correctAnswer": "a"
            }
        ]
    },
    {
        title: "Conhecendo o Arduino",
        content: "O Arduino é uma excelente porta de entrada para iniciantes na programação e eletrônica. Ele é uma plataforma de prototipagem eletrônica de código aberto, fácil de usar e amplamente acessível. Com o Arduino, você pode criar uma variedade de projetos interativos, desde simples luzes piscantes até robôs complexos.<br/><h3>Vamos acompanhar a aula de Arduino que ensina tudo!</h3><div class='iframe'><iframe width='100%' height='500' src='https://www.youtube.com/embed/ie0RlrApkdk?si=DDaP8MYSBUIsruvV' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
        ,
        questions: [

            {
                "title": "Atividade 1",
                "content": "Quem desenvolveu o Arduino?",
                "options": "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>Massimo Banzi, David Cuarielles, Tom Igoe, Gianluca Martino e David Mellist. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'>Bill Gates, Steve Jobs e Steve Wozniak. </label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>Mark Zuckerberg e Eduardo Saverin. </label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>Elon Musk e Jeff Bezos.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 2",
                "content": "Qual é uma das vantagens da plataforma Arduino?",
                "options": "<br/><input type='radio' name='1' id='atv2a'> <label for='atv2a'>Possui ambiente multiplataforma. <br/><input type='radio' name='1' id='atv2b'> <label for='atv2b'>Requer uma IDE de programação específica. </label><br/><input type='radio' name='1' id='atv2c'> <label for='atv2c'>Pode ser programado apenas por meio de programação em assembly. </label><br/><input type='radio' name='1' id='atv2d'> <label for='atv2d'>É um hardware fechado, sem código-fonte acessível.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 3",
                "content": "Como as placas Arduino podem ser conectadas ao computador?",
                "options": "<br/><input type='radio' name='1' id='atv3a'> <label for='atv3a'>Por meio do barramento serial universal (USB). <br/><input type='radio' name='1' id='atv3b'> <label for='atv3b'>Por meio de conexão de rede sem fio. </label><br/><input type='radio' name='1' id='atv3c'> <label for='atv3c'>Por meio de uma conexão de modem. </label><br/><input type='radio' name='1' id='atv3d'> <label for='atv3d'>Por meio de um cabo HDMI.</label>",
                "correctAnswer": "a"
            }
        ]
    },
    {
        title: "Componentes básicos do Arduino",
        content: "O principal componente do arduino é o microcontrolador e é responsável pelo processamento de software e controle de portas de entrada e saída. É o cérebro do sistema e opera como um computador em um chip pequeno. Além disso, existem outros componentes básicos, como por exemplo:<br/><br/><div class='flex-img'><img style='width:250px' src='https://th.bing.com/th/id/R.df326cde14afef4545b7a2bc23ad7625?rik=l%2bbJm8UtntbWvg&riu=http%3a%2f%2fcdn-reichelt.de%2fbilder%2fweb%2fxxl_ws%2fA300%2fARDUINO_LEONARDO_02.png&ehk=6cxsEGtB4SZke8MFv%2ff6aU8vZr3xZ3dXBqtA33X%2fHNk%3d&risl=&pid=ImgRaw&r=0'></img><br/><div class='infos-arduino'>Fios e jumpers: Conectam os componentes.<br/>LEDs: Emitem luz quando energizados.<br/>Motores: Permitem o movimento de objetos.<br/>Botões: Enviam sinais quando pressionados.<br/>Sensores: Detectam mudanças no ambiente.<br/>Resistores: Controlam o fluxo de corrente.<br/>Servomotores: Controlam o movimento angular com precisão.<br/>Displays: Exibem informações.<br/>Protoboard: Para prototipar circuitos de forma rápida e fácil.</div></div><br/><h3>Um pouco mais a fundo sobre LEDs, resistores e sensores:</h3>Além disso, os LEDs (Light Emitting Diodes) assumem o papel de artistas da luz, iluminando seus projetos Arduino com cores vibrantes e brilho intenso. Imagine-os como miniaturas de lâmpadas, emitindo luz quando energizados, transformando suas ideias em realidade luminosa.</div> <div>Os resistores são essenciais para o controle de fluxo de corrente em circuitos Arduino. Considere-os como reguladores precisos, que controlam a corrente elétrica na intensidade e no caminho certo sem prejudicar o funcionamento dos demais componentes</div><br><div>Por fim, os sensores são transdutores que monitoram o meio ambiente. Eles transformam dados físicos em sinais elétricos, permitindo que o nosso Arduino os controle. Temperatura, umidade, distância, luminosidade, obstáculos, posicionamento, presença e movimentação são os tipos mais comuns. O Arduino pode usar os atuadores para processar as informações dos sensores.</div>"
        ,
        questions: [
            {
                "title": "Atividade 1",
                "content": "Qual é o principal componente do Arduino?",
                "options": "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>Microcontrolador. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'>Fios e jumpers. </label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>LEDs. </label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>Botões.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 2",
                "content": "Qual componente emite luz quando energizado?",
                "options": "<br/><input type='radio' name='1' id='atv2a'> <label for='atv2a'>LEDs. <br/><input type='radio' name='1' id='atv2b'> <label for='atv2b'>Motores. </label><br/><input type='radio' name='1' id='atv2c'> <label for='atv2c'>Botões. </label><br/><input type='radio' name='1' id='atv2d'> <label for='atv2d'>Sensores.</label>",
                "correctAnswer": "a"
            },
            {
                "title": "Atividade 3",
                "content": "Qual é a função dos resistores em circuitos Arduino?",
                "options": "<br/><input type='radio' name='1' id='atv3a'> <label for='atv3a'>Controlam o fluxo de corrente. <br/><input type='radio' name='1' id='atv3b'> <label for='atv3b'>Detectam mudanças no ambiente. </label><br/><input type='radio' name='1' id='atv3c'> <label for='atv3c'>Permitem o movimento de objetos. </label><br/><input type='radio' name='1' id='atv3d'> <label for='atv3d'>Exibem informações.</label>",
                "correctAnswer": "a"
            }
        ]
    },
    // {
    //     title: "Simuladores de robótica",
    //     content: "<Os simuladores de robôs são ferramentas importantes no campo da robótica, fornecendo um ambiente virtual para projetar, testar e melhorar algoritmos e sistemas robóticos antes de serem implementados em dispositivos reais. Eles são usados ​​em diversas aplicações, desde o treinamento de operadores até o desenvolvimento de algoritmos de controle.</p><p>Um simulador de robô normalmente inclui modelos físicos que representam o comportamento e a interação do robô com o ambiente, bem como uma interface de programação que permite aos usuários desenvolver e testar algoritmos de controle, design, movimento e percepção. Esses simuladores podem ser complexos, desde ambientes 2D simples até simulações 3D muito realistas, e podem ser usados ​​em robôs que vão desde manipuladores industriais até veículos autônomos.        </p><p>As vantagens dos simuladores de robôs incluem custos e tempo de desenvolvimento mais baixos, a capacidade de testar cenários complexos e arriscados em um ambiente seguro e a facilidade de iterar e otimizar algoritmos antes da implantação real.        </p><p>No entanto, os simuladores também apresentam algumas limitações, como a precisão limitada dos modelos físicos e a dificuldade em simular completamente o comportamento real do ambiente e dos sensores. Apesar disso, eles ainda desempenham um papel importante no desenvolvimento e no progresso da robótica em muitos campos."
    //     ,
    //     questions: [

    //         {
    //             "title": "Atividade 1",
    //             "content": "Qual é uma das vantagens dos simuladores de robôs?",
    //             "options": "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>Custos e tempo de desenvolvimento mais baixos. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'>Modelos físicos precisos. </label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>Dificuldade em testar algoritmos de controle. </label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>Limitação na simulação do comportamento real do ambiente.</label>",
    //             "correctAnswer": "a"
    //         },
    //         {
    //             "title": "Atividade 2",
    //             "content": "O que inclui normalmente um simulador de robô?",
    //             "options": "<br/><input type='radio' name='1' id='atv2a'> <label for='atv2a'>Modelos físicos e interface de programação. <br/><input type='radio' name='1' id='atv2b'> <label for='atv2b'>Apenas modelos físicos. </label><br/><input type='radio' name='1' id='atv2c'> <label for='atv2c'>Apenas interface de programação. </label><br/><input type='radio' name='1' id='atv2d'> <label for='atv2d'>Sensores e atuadores.</label>",
    //             "correctAnswer": "a"
    //         },
    //         {
    //             "title": "Atividade 3",
    //             "content": "Qual é uma das limitações dos simuladores de robôs?",
    //             "options": "<br/><input type='radio' name='1' id='atv3a'> <label for='atv3a'>Precisão limitada dos modelos físicos. <br/><input type='radio' name='1' id='atv3b'> <label for='atv3b'>Facilidade em simular completamente o comportamento real do ambiente. </label><br/><input type='radio' name='1' id='atv3c'> <label for='atv3c'>Custos baixos de desenvolvimento. </label><br/><input type='radio' name='1' id='atv3d'> <label for='atv3d'>Ampla disponibilidade de sensores.</label>",
    //             "correctAnswer": "a"
    //         }
    //     ]
    // },
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


function returnActivity() {
    var title = localStorage.getItem("currentQuestion");
    var boxes = document.getElementsByClassName("box");

    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].innerText == title) {
            changeInfos(title, boxes[i]);
        }
    }

}


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