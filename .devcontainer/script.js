let who = ['El perro', 'Mi abuela', 'Mi padre', 'Mi pajaro'];
let action = ['Comer', 'Escondio', 'Meo', 'Romper'];
let what = ['Mis deberes', 'Mi telefono', 'El coche', 'Las llaves'];
let when = ['Antes de clase', 'Cuando dormia', 'Mientras hacia ejercicio', 'Durante la comida', 'while I was praying'];

function excuseGenerator(who, action, what,when){
    numQuien = Math.floor(Math.random() * who.length);
    numaction= Math.floor(Math.random() * action.length);
    numQue = Math.floor(Math.random() * what.length);
    numCuando = Math.floor(Math.random() * when.length);
    
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who ,action, what, when);
}
window.onload = onLoad;