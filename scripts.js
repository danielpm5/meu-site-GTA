let nome = document.querySelector(".nome")
 let personagem =document.querySelector(".personagem")

 console.log(nome)
 console.log(personagem)

 function escolherPersonagem(){
nome.innerHTML = "cj"
personagem.src = "img/cj.png"}

    
function escolherKersonagem(){
  nome.innerHTML = "jason"
  personagem.src = "img/jason.png"} 

function escolherLersonagem(){
 nome.innerHTML = "lucia"
 personagem.src = "img/lucia.png"}



 const botaoFoto = document.getElementById("botaoFoto");
const fotoUsuario = document.getElementById("fotoUsuario");
const previaFoto = document.getElementById("previaFoto");

botaoFoto.addEventListener("click", () => {
    fotoUsuario.click();
});

fotoUsuario.addEventListener("change", () => {
    const arquivo = fotoUsuario.files[0];

    if (!arquivo) return;

    if (!arquivo.type.startsWith("image/")) {
        alert("Escolha um arquivo de imagem válido.");
        return;
    }

    const leitor = new FileReader();

    leitor.onload = (evento) => {
        previaFoto.src = evento.target.result;
        previaFoto.hidden = false;
    };

    leitor.readAsDataURL(arquivo);
});