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

function changeInfos(title, div) {


    if (title.includes("Atividade")) {
        document.getElementById("tasks").style.display = "none";
        document.getElementById("title-arrow").style.display = "block";
    } else {
        document.getElementById("tasks").style.display = "block";
        document.getElementById("title-arrow").style.display = "none";
    }

    const contents = [
        {
            title: "Lógica de Programação",
            content: "A linguagem de programação C é uma das linguagens mais populares. É amplamente usada em sistemas operacionais, jogos e aplicativos de software. Entender a lógica de programação em C é fundamental para desenvolver habilidades de programação."
        },
        {
            title: "Linguagem de Programação C",
            content: ""
        },
        {
            title: "Bibliotecas básicas em C",
            content: "<div>Programação C é conhecida pela sua portabilidade e eficiência. Um dos motivos para isso é seu avaliado conjunto de bibliotecas complementárias. As funções das bibliotecas em C são vastas e permitem a realização de tarefas variadas, variando desde ações básicas de entrada e saída até manipulação de strings e alocação de memória. Nesta demo, examinaremos algumas das bibliotecas básicas mais utilizadas em C e compreender as funções fundamentais delas.</div><br/><b>1. Biblioteca stdio.h:</b>\nEssa biblioteca fornece funções para entrada e saída de dados.<br/><br/><p>Exemplo:<br/>printf(): Utilizada para imprimir na tela.<br/>scanf(): Usada para receber entrada do usuário.<br/>getchar() e putchar(): Para entrada e saída de caracteres.</p><br/><br/><b>2. Biblioteca stdlib.h: </b>Oferece funções para alocação de memória, conversões numéricas, geração de números pseudoaleatórios, entre outros.<br/><br/> <p>Exemplo:<br/> malloc(), calloc(), realloc(): Alocação de memória dinâmica.<br/> atoi(), atof(), strtol(): Conversão de strings para números.<br/> rand(), srand(): Geração de números aleatórios.</p><br/><b>3. Biblioteca string.h: </b>Fornece funções para manipulação de strings.<br/><p><br/>Exemplo:<br/>strlen(): Retorna o comprimento de uma string.<br/>strcpy(), strncpy(), strcat(), strncat(): Manipulação de strings.<br/>strcmp(), strncmp(): Comparação de strings.</p>"
        },
        {
            title: "Declaração de variáveis",
            content: "Em linguagens tipadas como o C que é uma linguagem de tipagem estática, ou seja, o compilador confere antes de executar o código se as variáveis inseridas coincidem com os tipos de dados definidos, a declaração de variáveis é de suma importância, devido a necessidade de ter uma variável a qual se pode chamar. Para isso usamos a %, aqui vai um exemplo:<br/><b><br/>Tipos de Variáveis</b>"
        },
        {
            title: "Comandos de Entrada e Saída",
            content: ""
        },
        {
            title: "Condicional",
            content: "<div><h3>O que são estruturas condicionais?</h3>As estruturas condicionais são recursos essenciais na lógica de programação, permitindo verificar condições e alterar o fluxo do algoritmo com base nessas verificações. Elas são amplamente usadas em projetos para controlar o conteúdo exibido, criar formulários dinâmicos, desenvolver mídias interativas e tornar páginas responsivas. Dominar essas estruturas é fundamental para se destacar como um profissional completo na área de desenvolvimento.<h3>Como funcionam as estruturas condicionais?</h3>As estruturas condicionais funcionam com base na avaliação de uma condição usando o comando 'if', seguido pela declaração dos blocos de comando para cada cenário possível. Elas podem ser simples, onde apenas uma ação é tomada se a condição for verdadeira, ou compostas, onde ações diferentes são tomadas para cenários verdadeiros e falsos, usando o comando 'else'. Estruturas condicionais encadeadas permitem testar múltiplas condições. Durante a execução, as condições são interpretadas como valores lógicos (verdadeiro ou falso) para determinar o fluxo do programa.<h3>Exemplo da estrutura de condicional:</h3>if (condição) {<br/><p>bloco para condição 'verdadeira';</p>} else {<br/><p>bloco para condição 'falsa';</p>}<h3>Utilizando o else if:</h3>if (condição 1) {<br/><p>bloco para condição 1 'verdadeira';</p>} else if (condição 2) {<br/><p>bloco para condição 2 'verdadeira';</p>} else {<br/><p>bloco para condição 'falsa';</p>}</div>"
        },
        {
            title: "Laços de Repetição",
            content: ""
        },
        {
            title: "Funções",
            content: "<div>Uma função é um bloco de código que executa uma tarefa específica e pode ser chamado de qualquer parte de um programa. Elas são fundamentais na organização e modularização do código, permitindo que tarefas complexas sejam divididas em partes menores e mais gerenciáveis.</br></br>A função é referenciada(chamada) pelo programa principal através de um nome atribuído a ela.<br/>A utilização de funções, muito comum na programação estruturada, visa subdividir um programa em partes(módulos) menores que realizam uma tarefa bem definida.<br/><br/><h3>Esqueleto de uma função</h3>tipo_de_retorno nome_da_função (lista de parâmetros) {<br/> <p> instruções;</p><p>retorno_da_função;</p>}</div >"
        },
        {
            title: "Conhecendo o Arduino",
            content: "O Arduino é uma plataforma eletrônica de código aberto baseada em software e hardware de fácil utilização, sendo ideal para iniciantes e para qualquer pessoa que deseja construir projetos eletrônicos. O Arduino foi desenvolvido em 2005 por Massimo Banzi, David Cuarielles, Tom Igoe, Gianluca Martino e David Mellist, com o objetivo de ser um dispositivo acessível, de baixo custo, funcional e fácil de usar tanto por estudantes e projetistas amadores, quanto por profissionais.<br/><br/>O arduino adota o conceito de hardware livre, onde podemos montar, modificar, personalizar ou melhorar o Arduino, e de código aberto, que quer dizer que seu código-fonte pode ser acessado e modificado, como por exemplo do linux um dos maiores OS que temos, essa popularidade veio por causa do seu código fonte aberto.<br/><br/>Junto do aruino temos as placas Arduino que permitem a conexão de circuitos eletrônicos aos seus terminais, o que possibilita a leitura de entradas – luz em um sensor, o acionamento de um botão ou uma mensagem SMS, e transformar estas informações em uma saída controlando algum dispositivo – por exemplo ligando um LED, ativando um motor ou enviando uma mensagem.<br/><br/>As placas Arduino podem ser conectadas ao computador por meio do barramento serial universal (USB), possibilitando sua utilização como placa de interface e controlar dispositivos por meio do seu computador. A plataforma Arduino oferece uma série de vantagens em relação a outras plataformas, o que o tornou popular entre professores, alunos, amadores e projetistas, tais como:<br/><br/>• Possuir ambiente multiplataforma, ou seja, pode ser executado nos principais sistemas operacionais comercializáveis;<br/>• Contar uma IDE de programação própria;<br/>• Poder ser programado utilizando um cabo USB;<br/>• Possuir hardware e software de fonte aberta;<br/>• Ter sido desenvolvido em um ambiente educacional, sendo ideal para iniciantes.<br/><br/>Esse hardware é controlado pelos seus componentes que são programaveis através de uma linguagem que pode ser C ou C++."
        },
        {
            title: "Componentes básicos do Arduino",
            content: "O principal componente do arduino é o microcontrolador e é responsável pelo processamento de software e controle de portas de entrada e saída. É o cérebro do sistema e opera como um computador em um chip pequeno. Além disso, existem outros componentes básicos, como por exemplo:<br/><br/><div class='flex-img'><img style='width:250px' src='https://th.bing.com/th/id/R.df326cde14afef4545b7a2bc23ad7625?rik=l%2bbJm8UtntbWvg&riu=http%3a%2f%2fcdn-reichelt.de%2fbilder%2fweb%2fxxl_ws%2fA300%2fARDUINO_LEONARDO_02.png&ehk=6cxsEGtB4SZke8MFv%2ff6aU8vZr3xZ3dXBqtA33X%2fHNk%3d&risl=&pid=ImgRaw&r=0'></img><br/><div class='infos-arduino'>Fios e jumpers: Conectam os componentes.<br/>LEDs: Emitem luz quando energizados.<br/>Motores: Permitem o movimento de objetos.<br/>Botões: Enviam sinais quando pressionados.<br/>Sensores: Detectam mudanças no ambiente.<br/>Resistores: Controlam o fluxo de corrente.<br/>Servomotores: Controlam o movimento angular com precisão.<br/>Displays: Exibem informações.<br/>Protoboard: Para prototipar circuitos de forma rápida e fácil.</div></div><br/><h3>Um pouco mais a fundo sobre LEDs, resistores e sensores:</h3>Além disso, os LEDs (Light Emitting Diodes) assumem o papel de artistas da luz, iluminando seus projetos Arduino com cores vibrantes e brilho intenso. Imagine-os como miniaturas de lâmpadas, emitindo luz quando energizados, transformando suas ideias em realidade luminosa.</div>"
        },
        {
            title: "Simuladores de robótica",
            content: ""
        },




        {
            title: "Atividade 1",
            content: "",
        },
        {
            title: "Atividade 2",
            content: "",
        },
        {
            title: "Atividade 3",
            content: "",
        }
    ]

    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style = "2px solid rgba(255, 255, 255, 0.08)";
    }

    if (div != null) {
        div.style = "border: 2px solid #fff";
    }

    document.getElementById("title").innerHTML = title;
    let content = contents.find(content => content.title === title).content;
    document.getElementById("description").innerHTML = content;

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
            body: {
                "name": name
            }
        }).then(function(res){
        }).then(function(result){
            console.log(result);

        })


       
    }
}


function logout() {
    localStorage.removeItem("name");
    location.href = "../home/index.html";
    document.getElementById("logout").style.display = "none";
    document.getElementById("logout").style.display = "none";

}