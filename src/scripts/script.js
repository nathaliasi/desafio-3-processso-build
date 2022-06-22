class script {
    constructor(idForm, idImg, idTitulo, idDescricao, idDiv) {
        this.form = document.getElementById(idForm);
        this.img = document.getElementById(idImg);
        this.titulo = document.getElementById(idTitulo);
        this.descricao = document.getElementById(idDescricao);
        this.divPost = document.getElementById(idDiv);
        this.addSubmit();
    }

    onSubmit(func) {
        this.form.addEventListener("submit", func);
    }

    addSubmit() {
        const handleSubmit = (event) => {
            event.preventDefault();
            const newPost = document.createElement("div");
            newPost.classList.add("div-form");
            newPost.innerHTML = `<div class="div-form">
      <img class="img" src="
      " alt="ops, imagem não encontrada">
      <div class="texto">
        <h2>${this.titulo.value}</h2>
        <p>${this.descricao.value}</p>
      </div>
    </div>`;
            this.divPost.append(newPost);
        };
        this.onSubmit(handleSubmit);
    }
}
const post = new script("form", "selectfile", "titulo", "descricao", "container2");

/*function abrirFoto(src){
    var divOpen = document.getElementsByClassName('abrirImg');
    var openImg = document.createElement('IMG');
    openImg.className = "open";
    openImg.setAttribute('src', src);

}*/

/*class script {
  constructor(idForm, idImg, idTitulo, idDescricao, idDiv) {
    this.form = document.getElementById(idForm);
    this.img = document.getElementById(idImg);
    this.titulo = document.getElementById(idTitulo);
    this.descricao = document.getElementById(idDescricao);
    this.divPost = document.getElementById(idDiv);
    this.addSubmit();
  }


  onSubmit(func) {
    this.form.addEventListener("submit", func);
  }

  addSubmit() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const newPost = document.createElement("div");
      const image = document.getElementByt('selectfile');
      newPost.classList.add("div-form");
      newPost.innerHTML = `<div class="div-form">
      <img class="img" src="${image.src}" alt="Cristo Redentor">
      <div class="texto">
        <h2>${this.titulo.value}</h2>
        <p>${this.descricao.value}</p>
      </div>
    </div>`;
      this.divPost.append(newPost);
    };
    this.onSubmit(handleSubmit);
  }
}
function validarArquivo(){
        var arquivoInput = document.getElementById('arquivo');
        var caminhoArquivo = arquivoInput.value;
        var extensoesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;
        if(!extensoesPermitidas.exec(caminhoArquivo)){
          alert('Por Favor, envie um arquivo que tenha as extensões .jpg|.jpeg|.png|.gif');
          arquivoInput.Value = '';
          return false;
        }
        else{
          if(arquivoInput.files && arquivoInput.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
              document.getElementById('visualizarImagem').innerHTML = '';
            };
            reader.readAsDataURL(arquivoInput.files[0]);
          console.log(arquivoInput.files[0].size / 1024 / 1024);
          console.log(arquivoInput.files[0].size);
          if(arquivoInput.files[0].size > 2097152){
            alert("tamanho do arquivo deve ser 2MB!");
            return false;
          }
          }
        }
      }
*/
/*document.addEventListener('DOMContentLoaded',function(){
  const list = [];

  const form = document.querySelector('.form');
  const itemInput = document.querySelector('.');

  form.addEventListener('submit', addItemToList)

  function addItemToList(event){
    event.preventDefault();

    const itemName = event.target;
    console.log(event.target);
  }
});*/

/*

  var btn_add = document.getElementById('add');
var img = document.getElementById('selectfile');
var titulo = document.getElementById('titulo');
var titulo = document.getElementById('descricao');

btn_add.addEventListener('click', function(){
  createDiv();
});
});*/
