/*

sadsadsad
dsadsadsa
dsadasdsa

*/



const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal"); 
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}



botaoTrailer.addEventListener("click", () => {
    console.log('clicou no botao veja o trailer');
    alternarModal();
    video.setAttribute("src", linkDoVideo); 
});


botaoFecharModal.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src", "");

});



