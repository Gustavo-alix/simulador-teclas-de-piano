//seleccionar elementos del DOM
const teclaC = document.querySelector('#tecla-c');
const teclaD = document.querySelector('#tecla-d');
const teclaE = document.querySelector('#tecla-e');
const teclaF = document.querySelector('#tecla-f');
const teclaK = document.querySelector('#tecla-k');
const teclaL = document.querySelector('#tecla-l');
const teclaB = document.querySelector('#tecla-b');
const teclaJ = document.querySelector('#tecla-j');
const teclaH = document.querySelector('#tecla-h');

//seleccionar elementos de audio
const sonidoTeclaC = document.querySelector('#sonido-tecla-c');
const sonidoTeclaD = document.querySelector('#sonido-tecla-d');
const sonidoTeclaE = document.querySelector('#sonido-tecla-e');
const sonidoTeclaF = document.querySelector('#sonido-tecla-f');
const sonidoTeclaK = document.querySelector('#sonido-tecla-k');
const sonidoTeclaL = document.querySelector('#sonido-tecla-l');
const sonidoTeclaB = document.querySelector('#sonido-tecla-b');
const sonidoTeclaJ = document.querySelector('#sonido-tecla-j');
const sonidoTeclaH = document.querySelector('#sonido-tecla-h');


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

teclaL.addEventListener('click', function() {
    sonidoTeclaL.play();
});

teclaB.addEventListener('click', function() {
    sonidoTeclaB.play();
});

teclaJ.addEventListener('click', function() {
    sonidoTeclaJ.play();
});

teclaH.addEventListener('click', function() {
    sonidoTeclaH.play();
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

//funcion para animar tecla al presionar
function animateKey(key) {
    const tecla = document.querySelector(`.key[data-key="${key}"]`); 
    if (!tecla) return; // Si la tecla no existe, salir de la función

    tecla.classList.add('active'); // Agregar clase 'active' para animar la tecla
    setTimeout(() => {
        tecla.classList.remove('active'); // Remover clase 'active' después de 100ms
    }, 100);
}

//evento para detectar presion de tecla y reproducir sonido
document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase(); // Convertir a minúscula para evitar problemas de mayúsculas/minúsculas                        
    switch (key) {
        case 'a':
            sonidoTeclaC.play();        
            animateKey('a');            break;
        case 's':
            sonidoTeclaD.play();                
            animateKey('s');            break;
        case 'd':
            sonidoTeclaE.play();
            animateKey('d');            break;
        case 'f':
            sonidoTeclaF.play();
            animateKey('f');            break;
        case 'k':
            sonidoTeclaK.play();        
            animateKey('k');            break;
        case 'l':
            sonidoTeclaL.play();
            animateKey('l');            break;
        case 'b':
            sonidoTeclaB.play();            
            animateKey('b');            break;
        case 'j':
            sonidoTeclaJ.play();
            animateKey('j');            break;
        case 'h':
            sonidoTeclaH.play();    
            animateKey('h');            break;
        default:
            // No hacer nada si se presiona una tecla no asignada
            break;
    }       
});

//evento para pantallas tactil y movil 
document.addEventListener('touchstart', function(event) {
    const target = event.target;       
    if (target.classList.contains('key')) {
        const note = target.getAttribute('data-note');  
        switch (note) {
            case 'C':
                sonidoTeclaC.play();        
                animateKey('a');            break;
            case 'D':
                sonidoTeclaD.play();
                animateKey('s');            break;
            case 'E':
                sonidoTeclaE.play();
                animateKey('d');            break;
            case 'F':
                sonidoTeclaF.play();
                animateKey('f');            break;
            case 'K':
                sonidoTeclaK.play();        
                animateKey('k');            break;
            case 'L':
                sonidoTeclaL.play();
                animateKey('l');            break;
            case 'B':
                sonidoTeclaB.play();            
                animateKey('b');            break;
            case 'J':
                sonidoTeclaJ.play();
                animateKey('j');            break;
            case 'H':
                sonidoTeclaH.play();    
                animateKey('h');            break;
            default:
                // No hacer nada si se presiona una tecla no asignada
                break;
        }       
    }
}, { passive: true });