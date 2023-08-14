/*
let key = "chave"
localStorage.setItem(key,'valor novo');

let lerChave = localStorage.getItem(key);
console.log(lerChave)
// apaga item
localStorage.removeItem(key)
// apaga tudo
localStorage.clear()

let array = [1,2,3,4,5]
localStorage.setItem("listaArray",JSON.stringify(array))

//objeto
let dados = {nome:"fiap", telefone:"11111111"}
localStorage.setItem('info',Json.stringify(dados))

//criar lista de usuario
let listaDados = [];

//criando a base (construtor)
function Campos(campo1){
    this.campo1 = campo1
}
//disparar botão com o DOM
const btnEnviar = document.querySelector("#btncampo1");
//evento click
btnEnviar.addEventListener('click', ()=>{
    const inputCampo1 = document.querySelector("#campo1");
    //instanciando construtor
    let info = new Campos(inputCampo1.value);

    listaDados.push(info)
    localStorage.setItem('dados',JSON.stringify(listaDados))
})
*/
let login = [];
function Dados(campo1,campo2,campo3){
    this.usuario = campo1
    this.email = campo2
    this.senha = campo3
}
const btnEnviar = document.querySelector("#btncampo");
btnEnviar.addEventListener('click',()=>{
    const inputNome = document.querySelector("#campo1");
    const inputEmail = document.querySelector("#campo2");
    const inputSenha = document.querySelector("#campo3");
    let info = new Dados(inputNome.value,inputEmail.value,inputSenha.value);
    login.push(info)
    localStorage.setItem('dados',JSON.stringify(login))
})