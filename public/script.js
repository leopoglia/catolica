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

    const contents = [
        {
            title: "Lógica de Programação",
            content: "Bem-vindos &agrave; nossa aula sobre l&oacute;gica de programa&ccedil;&atilde;o! Neste curso, vamos explorar os conceitos fundamentais que s&atilde;o essenciais para quem est&aacute; come&ccedil;ando no mundo da programa&ccedil;&atilde;o. Se voc&ecirc; &eacute; novo nessa jornada ou est&aacute; buscando refor&ccedil;ar seus conhecimentos, este &eacute; o lugar certo para come&ccedil;ar.<br /><div style='width: 100%; display: flex'><div><b class='subtitle'><br/>1. O que &eacute; L&oacute;gica de Programa&ccedil;&atilde;o?</b><br />Antes de mergulharmos nos detalhes, vamos entender o que &eacute; l&oacute;gica de programa&ccedil;&atilde;o. Basicamente, a l&oacute;gica de programa&ccedil;&atilde;o &eacute; a habilidade de pensar de forma estruturada e l&oacute;gica para resolver problemas. &Eacute; a base sobre a qual todas as linguagens de programa&ccedil;&atilde;o s&atilde;o constru&iacute;das. Ao dominar a l&oacute;gica de programa&ccedil;&atilde;o, voc&ecirc; ser&aacute; capaz de desenvolver algoritmos eficientes e escrever c&oacute;digo de forma mais clara e organizada.<br/><br/><b class='subtitle'>2. Principais Conceitos</b><br/><b>a) Algoritmos: </b>Um algoritmo &eacute; uma sequ&ecirc;ncia finita e ordenada de instru&ccedil;&otilde;es que descreve um processo para resolver um problema espec&iacute;fico. Ele &eacute; como uma receita que detalha passo a passo o que fazer para alcan&ccedil;ar um resultado desejado.</div><img style='width: 30%; margin-left: 14px' src='https://logicamentepro.com.br/images/card.png'></div><br /><b>b) Vari&aacute;veis e Tipos de Dados:</b> As vari&aacute;veis s&atilde;o espa&ccedil;os de mem&oacute;ria que armazenam valores. Os tipos de dados determinam que tipo de valor uma vari&aacute;vel pode armazenar, como n&uacute;meros, texto ou valores l&oacute;gicos (verdadeiro/falso).<br /><br /><b>c) Estruturas de Controle de Fluxo:</b> S&atilde;o mecanismos que controlam a execu&ccedil;&atilde;o do programa. Isso inclui estruturas condicionais, que permitem tomar decis&otilde;es com base em condi&ccedil;&otilde;es, e estruturas de repeti&ccedil;&atilde;o, que executam um bloco de c&oacute;digo v&aacute;rias vezes.<br /><br /><b>d) Fun&ccedil;&otilde;es / Métodos:</b> S&atilde;o blocos de c&oacute;digo que realizam uma tarefa espec&iacute;fica e podem ser reutilizados em diferentes partes do programa. Isso ajuda a modularizar o c&oacute;digo e facilita a manuten&ccedil;&atilde;o.<br /><br /><b>e) Arrays / Listas:</b> S&atilde;o estruturas de dados que armazenam cole&ccedil;&otilde;es de elementos do mesmo tipo. Permitem armazenar e manipular m&uacute;ltiplos valores de forma eficiente.<br /><br /><b>f) Recurs&atilde;o:</b> &Eacute; um conceito onde uma fun&ccedil;&atilde;o chama a si mesma para resolver um problema menor. &Eacute; uma t&eacute;cnica poderosa, mas requer cuidado para evitar loops infinitos.<br /><br /><b>g) Modulariza&ccedil;&atilde;o:</b> &Eacute; a pr&aacute;tica de dividir um programa em partes menores para facilitar o desenvolvimento e a manuten&ccedil;&atilde;o. Cada parte deve ter uma responsabilidade bem definida.<br /><br /><b>h) Pseudoc&oacute;digo:</b> &Eacute; uma forma de representar algoritmos usando uma linguagem de descri&ccedil;&atilde;o mais pr&oacute;xima da linguagem humana. &Eacute; &uacute;til para planejar a l&oacute;gica do programa antes de escrever o c&oacute;digo em uma linguagem de programa&ccedil;&atilde;o real.<br /><br /><b class='subtitle'>3. Conclus&atilde;o</b><br />Dominar a l&oacute;gica de programa&ccedil;&atilde;o &eacute; essencial para qualquer aspirante a programador. Com uma compreens&atilde;o s&oacute;lida desses conceitos fundamentais, voc&ecirc; estar&aacute; pronto para aprender qualquer linguagem de programa&ccedil;&atilde;o com muito mais facilidade. Continue praticando, explorando e construindo coisas incr&iacute;veis com o poder da l&oacute;gica de programa&ccedil;&atilde;o!"
        },
        {
            title: "Linguagem de Programação C",
            content: "O principal componente do arduino é o microcontrolador e é responsável pelo processamento de software e controle de portas de entrada e saída. É o cérebro do sistema e opera como um computador em um chip pequeno. Além disso, existem outros componentes básicos, como por exemplo:<br/><br/><div class='flex-img'><img style='width:250px' src='https://th.bing.com/th/id/R.df326cde14afef4545b7a2bc23ad7625?rik=l%2bbJm8UtntbWvg&riu=http%3a%2f%2fcdn-reichelt.de%2fbilder%2fweb%2fxxl_ws%2fA300%2fARDUINO_LEONARDO_02.png&ehk=6cxsEGtB4SZke8MFv%2ff6aU8vZr3xZ3dXBqtA33X%2fHNk%3d&risl=&pid=ImgRaw&r=0'></img><br/><div class='infos-arduino'>Fios e jumpers: Conectam os componentes.<br/>LEDs: Emitem luz quando energizados.<br/>Motores: Permitem o movimento de objetos.<br/>Botões: Enviam sinais quando pressionados.<br/>Sensores: Detectam mudanças no ambiente.<br/>Resistores: Controlam o fluxo de corrente.<br/>Servomotores: Controlam o movimento angular com precisão.<br/>Displays: Exibem informações.<br/>Protoboard: Para prototipar circuitos de forma rápida e fácil.</div></div><br/><h3>Um pouco mais a fundo sobre LEDs, resistores e sensores:</h3>Além disso, os LEDs (Light Emitting Diodes) assumem o papel de artistas da luz, iluminando seus projetos Arduino com cores vibrantes e brilho intenso. Imagine-os como miniaturas de lâmpadas, emitindo luz quando energizados, transformando suas ideias em realidade luminosa.</div>"
        },
        {
            title: "Bibliotecas básicas em C",
            content: "<div>Programação C é conhecida pela sua portabilidade e eficiência. Um dos motivos para isso é seu avaliado conjunto de bibliotecas complementárias. As funções das bibliotecas em C são vastas e permitem a realização de tarefas variadas, variando desde ações básicas de entrada e saída até manipulação de strings e alocação de memória. Nesta demo, examinaremos algumas das bibliotecas básicas mais utilizadas em C e compreender as funções fundamentais delas.</div><br/><b class='subtitle'>1. Biblioteca stdio.h:</b>\nEssa biblioteca fornece funções para entrada e saída de dados.<br/><br/><p>Exemplo:<br/>printf(): Utilizada para imprimir na tela.<br/>scanf(): Usada para receber entrada do usuário.<br/>getchar() e putchar(): Para entrada e saída de caracteres.</p><br/><br/><b class='subtitle'>2. Biblioteca stdlib.h: </b>Oferece funções para alocação de memória, conversões numéricas, geração de números pseudoaleatórios, entre outros.<br/><br/> <p>Exemplo:<br/> malloc(), calloc(), realloc(): Alocação de memória dinâmica.<br/> atoi(), atof(), strtol(): Conversão de strings para números.<br/> rand(), srand(): Geração de números aleatórios.</p><br/><b class='subtitle'>3. Biblioteca string.h: </b>Fornece funções para manipulação de strings.<br/><p><br/>Exemplo:<br/>strlen(): Retorna o comprimento de uma string.<br/>strcpy(), strncpy(), strcat(), strncat(): Manipulação de strings.<br/>strcmp(), strncmp(): Comparação de strings.</p>"
        },
        {
            title: "Declaração de variáveis",
            content: "Em linguagens tipadas como o C que é uma linguagem de tipagem estática, ou seja, o compilador confere antes de executar o código se as variáveis inseridas coincidem com os tipos de dados definidos, a declaração de variáveis é de suma importância, devido a necessidade de ter uma variável a qual se pode chamar. Para isso usamos a %, aqui vai um exemplo:<br/><b class='subtitle'><br/>Tipos de Variáveis</b>"
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
            content: "a) O que é lógica de programação?",
            options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
        },
        {
            title: "Atividade 2",
            content: "a) O que é lógica de programação?",
            options: "<br/><input type='radio' name='1' id='atv1a'> <label for='atv1a'>É a habilidade de pensar de forma estruturada e lógica para resolver problemas. <br/><input type='radio' name='1' id='atv1b'> <label for='atv1b'> É a habilidade de pensar de forma desestruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1c'> <label for='atv1c'>É a habilidade de pensar de forma estruturada e ilógica para resolver problemas.</label><br/><input type='radio' name='1' id='atv1d'> <label for='atv1d'>É a habilidade de pensar de forma desestruturada e lógica para resolver problemas.</label>",
        },
        {
            title: "Atividade 3",
            content: "",
        }
    ]

    if (title.includes("Atividade")) {

        var options = tasksOptions(title, div, contents);

        if (options == false) {
            document.getElementById("tasks").style.display = "block";
            document.getElementById("title-arrow").style.display = "none";
            document.getElementById("send-task").style.display = "none";
            return;
        } else {
            var options = contents.find(content => content.title === title).options;
            document.getElementById("options-tasks").innerHTML = options;
            document.getElementById("send-task").style.display = "block";
        }

    } else {
        document.getElementById("tasks").style.display = "block";
        document.getElementById("title-arrow").style.display = "none";
        document.getElementById("send-task").style.display = "none";


        var boxes = document.getElementsByClassName("box");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style = "2px solid rgba(255, 255, 255, 0.08)";
        }

        if (div != null) {
            div.style = "border: 2px solid #fff";
        }
    }

    document.getElementById("title").innerHTML = title;
    let content = contents.find(content => content.title === title).content;
    document.getElementById("description").innerHTML = content;


}


function sendTask() {

    let url = "https://catolica.vercel.app/api/user/";
    let level = localStorage.getItem("level");
    let userID = localStorage.getItem("userID");

    fetch(url + "level/" + userID, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ level: level })
    }).then(function (res) {
        if (res.status == 200) {
            alert("Atividade concluída com sucesso");
            location.href = "../home/index.html";
        } else {
            alert("Erro ao concluir atividade");
        }
    }).catch(function (err) {
        console.log(err);
    })

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
        localStorage.setItem("level", data.level);
    }).catch(function (err) {
        console.log(err);
    })
}


function tasksOptions(title, div, contents) {
    let level = localStorage.getItem("level");
    let page = div.innerText;

    if (localStorage.getItem("name") == null) {
        location.href = "../login/index.html";
        return;
    }

    if(level == null || level == 0 || level == undefined || level == "undefined"){
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