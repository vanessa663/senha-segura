const senha = document.getElementById("senha");
const gerar = document.getElementById("gerar");
const copiar = document.getElementById("copiar");
const tamanho = document.getElementById("tamanho");
const valor = document.getElementById("valor");
const forca = document.getElementById("forca");

valor.textContent = tamanho.value;

tamanho.addEventListener("input", () => {
    valor.textContent = tamanho.value;
});

gerar.addEventListener("click", gerarSenha);

copiar.addEventListener("click", () => {

    navigator.clipboard.writeText(senha.value);

    copiar.textContent = "Copiado!";

    setTimeout(() => {
        copiar.textContent = "Copiar";
    },2000);

});

function gerarSenha(){

    let caracteres="";

    if(document.getElementById("maiusculas").checked)
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(document.getElementById("minusculas").checked)
        caracteres += "abcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numeros").checked)
        caracteres += "0123456789";

    if(document.getElementById("simbolos").checked)
        caracteres += "!@#$%&*()_-+=<>?/{}[]";

    if(caracteres===""){
        alert("Selecione pelo menos uma opção.");
        return;
    }

    let resultado="";

    for(let i=0;i<tamanho.value;i++){

        let indice=Math.floor(Math.random()*caracteres.length);

        resultado+=caracteres[indice];

    }

    senha.value=resultado;

    verificarForca(resultado);

}

function verificarForca(s){

    let pontos=0;

    if(s.length>=8) pontos++;
    if(s.length>=12) pontos++;
    if(/[A-Z]/.test(s)) pontos++;
    if(/[a-z]/.test(s)) pontos++;
    if(/[0-9]/.test(s)) pontos++;
    if(/[!@#$%&*()_\-+=<>?/{}\[\]]/.test(s)) pontos++;

    if(pontos<=2){

        forca.innerHTML="🔴 Força: Fraca";
        forca.style.color="#ef4444";

    }else if(pontos<=4){

        forca.innerHTML="🟡 Força: Média";
        forca.style.color="#facc15";

    }else{

        forca.innerHTML="🟢 Força: Forte";
        forca.style.color="#22c55e";

    }

}

gerarSenha();
