
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

        document.getElementById("container-boxes").scrollTop += 73.5;
    } else {
        document.getElementById("container-boxes").scrollTop -= 73.5;
    }
}

function changeInfos(title, div) {


    if(title.includes("Atividade")) {
        document.getElementById("tasks").style.display = "none";
    } else{
        document.getElementById("tasks").style.display = "block";
    }

    const contents = [
        {
            title: "Lógica de Programação",
            content: "Vivamus non velit pharetra, tristique elit nec, luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis augue sapien. Pellentesque ultrices et libero ut dignissim. In interdum magna efficitur tortor placerat hendrerit eget nec dui. Nulla ornare nulla eu odio pulvinar efficitur. Curabitur purus eros, volutpat id commodo vestibulum, tincidunt at elit. Fusce accumsan interdum urna eget semper. Pellentesque aliquet tempor orci, at mollis est interdum ac.\nAliquam mollis ac enim et sagittis.Maecenas nisi orci, molestie sed sagittis pellentesque, semper sit amet nunc.Integer id magna nec felis mollis lobortis.Curabitur accumsan fermentum nibh, ac blandit lectus facilisis vitae.Quisque nec varius dolor.Mauris hendrerit et sem ac molestie.Fusce nibh eros, condimentum vel tincidunt lobortis, tempus vitae nisl.\nNulla non pretium turpis.Vivamus pharetra, nunc sit amet viverra volutpat, mauris erat gravida dui, in ultrices nulla eros sit amet eros.Nam luctus mauris et lectus interdum scelerisque.Curabitur sed justo rutrum, tristique nisi in, porta urna.Donec fermentum erat non nisl fringilla mattis.Maecenas a mi sed tellus semper suscipit quis vitae felis.Ut ultricies arcu mi, vel venenatis mi dignissim sit amet.Proin mollis, risus sit amet maximus volutpat, ante ligula tincidunt massa, eu varius tellus purus vitae eros.Suspendisse in elit nec libero ullamcorper aliquam nec vitae est.Donec ac purus est.Integer id tempor justo.Aenean vitae mauris vel felis lobortis facilisis.\nPraesent quis leo ac turpis malesuada dignissim ut et nisi.Vivamus porta vel lacus ut tincidunt.Fusce maximus sollicitudin congue.Fusce vehicula dolor vitae augue luctus, nec rhoncus purus dignissim.Ut elit lectus, egestas vel interdum quis, varius sed felis.Nullam nec magna eros.Ut euismod semper nulla non molestie.Suspendisse diam lectus, congue eget lectus at, dictum egestas ipsum."
        },
        {
            title: "Linguagem de Programação C",
            content: "This is the services page"
        },
        {
            title: "Bibliotecas básicas em C",
            content: "This is the about page"
        },
        {
            title: "Declaração de variáveis",
            content: "This is the contact page"
        },
        {
            title: "Comandos de Entrada e Saída",
            content: "This is the contact page"
        },
        {
            title: "Condicional",
            content: "This is the contact page"
        },
        {
            title: "Laços de Repetição",
            content: "This is the contact page"
        },
        {
            title: "Funções",
            content: "This is the contact page"
        },
        {
            title: "Conhecendo o Arduino",
            content: "This is the contact page"
        },
        {
            title: "Componentes básicos do Arduino",
            content: "This is the contact page"
        },
        {
            title: "Simuladores de robótica",
            content: "This is the contact page"
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


function login() {
    var name = document.getElementById("name").value;

    if (name == "") {
        alert("Digite seu nome");
    } else {
        localStorage.setItem("name", name);
        location.href = "../home/index.html";
    }
}


function logout() {
    localStorage.removeItem("name");
    location.href = "../home/index.html";
    document.getElementById("logout").style.display = "none";
    document.getElementById("logout").style.display = "none";

}