//seleccionar elementos del DOM
const teclaC = document.querySelector('#tecla-c');
const teclaD = document.querySelector('#tecla-d');
const teclaE = document.querySelector('#tecla-e');
const teclaF = document.querySelector('#tecla-f');
const teclaK = document.querySelector('#tecla-k');

//seleccionar elementos de audio
const sonidoTeclaC = document.querySelector('#sonido-tecla-c');
const sonidoTeclaD = document.querySelector('#sonido-tecla-d');
const sonidoTeclaE = document.querySelector('#sonido-tecla-e');
const sonidoTeclaF = document.querySelector('#sonido-tecla-f');
const sonidoTeclaK = document.querySelector('#sonido-tecla-k');


//seleccionar elementos de etiqueta y pista de teclas
const keyHint = document.querySelector('.key-hint');
const keyLabel = document.querySelector('.key-label');

//funcion sonido
teclaC.addEventListener('click', function() {
    sonidoTeclaC.play();
});

teclaD.addEventListener('click', function() {
    sonidoTeclaD.play();
});

teclaE.addEventListener('click', function() {
    sonidoTeclaE.play();
});

teclaF.addEventListener('click', function() {
    sonidoTeclaF.play();
});

teclaK.addEventListener('click', function() {
    sonidoTeclaK.play();
});

keyHint.addEventListener('click', function() {
    console.log('Clicou na dica de tecla');
});

//Funcion para reproducir sonido al hacer clic en la etiqueta de la tecla
function playsound() {
    sonidoTeclaC.play();
}

//Agregar evento de clic a la etiqueta de la tecla
keyLabel.addEventListener('click', playsound);