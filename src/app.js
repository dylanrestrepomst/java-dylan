let who = ['El perro', 'Mi abuela', 'Mi padre', 'Mi pajaro'];
let action = ['Comer', 'Escondio', 'Meo', 'Romper'];
let what = ['Mis deberes', 'Mi telefono', 'El coche', 'Las llaves'];
let when = ['Antes de clase', 'Cuando dormia', 'Mientras hacia ejercicio', 'Durante la comida', 'while I was praying'];

function excuseGenerator(who, action, what,when){
    let numQuien = Math.floor(Math.random() * who.length);
    let numaction= Math.floor(Math.random() * action.length);
    let numQue = Math.floor(Math.random() * what.length);
    let numCuando = Math.floor(Math.random() * when.length);
    return ( who[numQuien] + " " + action[numaction] + " " + what[numQue] + " " + when[numCuando] );
}
function onLoad(){
    let excusa = document.querySelector('#excuse');
    excusa.innerHTML = excuseGenerator(who,action,what,when);
}
window.onload = onLoad;