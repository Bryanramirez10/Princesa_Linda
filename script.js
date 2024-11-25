const penguin = document.getElementById('penguin');
const cat = document.getElementById('cat');
const messageBubble = document.getElementById('message-bubble');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const messages = [
    { speaker: 'pingüino', text: "¡Hola mi amorcito, me recuerdas?" },
    { speaker: 'pingüino', text: "Hoy traigo un amigo para ti..." },
    { speaker: 'pingüino', text: "Con mi amigo te queremos decir algunas cositas!" },
    { speaker: 'gato', text: "¡Hola, soy el gato, un placer conocerte!" },
    { speaker: 'pingüino', text: "Bueno te dejo con el amor, jijiji" },
    { speaker: 'gato', text: "Hola guapa, el pinguino me pidio que te dijera..." },
    { speaker: 'gato', text: "Que estas muy linda mi amorcito" },
    { speaker: 'gato', text: "Amor este es solo un mensaje corto sii" },
    { speaker: 'gato', text: "Si te soy sincero, te extraño mucho mi amorcito" },
    { speaker: 'gato', text: "Te quiero ver mi amor, te extraño enserioo" },
    { speaker: 'gato', text: "Amor ya casi es navidad jijij" },
    { speaker: 'gato', text: "Yo quiero verte amor" },
    { speaker: 'gato', text: "No se como estas mi amorcito, se que pasas ocupada en la semana" },
    { speaker: 'gato', text: "Pero porfis los domingos cuentame tu semana si?" },
    { speaker: 'gato', text: "A mi me encanta mucho mi amor" },
    { speaker: 'gato', text: "Dije que seria breve amor, y pues solo paso a recordarte quee.." },
    { speaker: 'gato', text: "Ti amu mucho si amor?" },
    { speaker: 'gato', text: "Por favor no lo olvides ni lo dudes" },
    { speaker: 'gato', text: "Se que pasas ocupada, pero a pesar que no chateemos tanto" },
    { speaker: 'gato', text: "Por favor no olvides que eres importante para mi y que ti amu sii amor?" },
    { speaker: 'gato', text: "Quiero que me cuentes algunas cosas amor" },
    { speaker: 'gato', text: "Por ejemplo si iras mañana a la U, o no see" },
    { speaker: 'gato', text: "Como fue tu semanaa, y asi amor, cositas" },
    { speaker: 'gato', text: "Por ejemplo si tu llego tu papito a verte" },
    { speaker: 'gato', text: "O en general como te sientess amorr" },
    { speaker: 'gato', text: "Creeme que todo eso me interesa amor y demasiado" },
    { speaker: 'gato', text: "No creas que porque no te pregunto 'Que tal amor?'" },
    { speaker: 'gato', text: "Es porq no quiero saberlo, la verdad amor, esq pues" },
    { speaker: 'gato', text: "Siempre quiero saber de ti, pero se que tu pasas ocupada" },
    { speaker: 'gato', text: "Y me encantaria cada dia poder preguntartelo" },
    { speaker: 'gato', text: "Me encantaria cada dia poder saber que tal estas y como te fue" },
    { speaker: 'gato', text: "Pero se que lo que mas quieres es mimir" },
    { speaker: 'gato', text: "Y yo te entiendo amor" },
    { speaker: 'gato', text: "Y esa es sinceramente la razon por la que no te lo pregunto" },
    { speaker: 'gato', text: "Porque pues con esta serian ya 2 semanas que no me cuentas de tii" },
    { speaker: 'gato', text: "Que no me cuentas como estasss" },
    { speaker: 'gato', text: "Y eso no me guta amor la verdad no me guta" },
    { speaker: 'gato', text: "Porfis cuentame siiiiiiiiiiiiiiiiiiiiiiiii" },
    { speaker: 'gato', text: "Recuerda que siempre quiero saber de tii ehh amor" },
    { speaker: 'gato', text: "Siempre siempre mi amorcito" },
    { speaker: 'gato', text: "No se si vistes el enlace que te mande el domingo pasado" },
    { speaker: 'gato', text: "Miralos cuando tengas tiempo, si amor?" },
    { speaker: 'gato', text: "Te los mando el domingo porque asi los lees con tiempo amorcito" },
    { speaker: 'gato', text: "Y sabes, tengo algunas cosas que contarte amor" },
    { speaker: 'gato', text: "Cuando puedas hablamos sii amorcito?" },
    { speaker: 'gato', text: "No te preocupes mi amor, no es naya malo jijij🤭" },
    { speaker: 'gato', text: "Tambien siempre recuerda que cuando te vea tengo algo pendiente que decirte princesa jijiji🤭" },
    { speaker: 'gato', text: "Y eso es todo mi amor, jamas olvides lo importante que eres para mi amor" },
    { speaker: 'gato', text: "Ni olvides lo mucho que me importas" },
    { speaker: 'gato', text: "Lo mucho que ti amuuu" },
    { speaker: 'gato', text: "Ah y ahora que recuerdo, cuando leas esto, pideme que te envie algoo" },
    { speaker: 'gato', text: "Te enviare algo y lo llenas amor, sii? porfisss" },
    { speaker: 'gato', text: "Ti amu mucho princesa hermosa💖" },
];

let messageIndex = 0;
let penguinVisible = true; // Variable para controlar la visibilidad del pingüino

function showMessage() {
    const currentMessage = messages[messageIndex];

    // Mostrar o ocultar el pingüino según el mensaje
    if (currentMessage.speaker === 'pingüino' && penguinVisible) {
        penguin.style.display = 'block';
        cat.style.display = 'block'; // El gato siempre está visible
    } else if (currentMessage.speaker === 'gato') {
        penguin.style.display = 'none';  // El pingüino no debe aparecer después de que se haya ido
        cat.style.display = 'block';
    }

    // Si el mensaje es "Bueno te dejo con el amor, jijiji", se oculta el pingüino
    if (currentMessage.text === "Hola guapa, el pinguino me pidio que te dijera...") {
        penguin.style.display = 'none';  // Ocultamos el pingüino permanentemente
        penguinVisible = false;  // Cambiamos el control para que no se muestre más
    }

    messageBubble.textContent = currentMessage.text;
    messageBubble.style.display = 'block';
    setTimeout(() => messageBubble.classList.add('expanded'), 100);

    messageIndex++;
    if (messageIndex >= messages.length) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = 0.5;
    }
}

nextBtn.addEventListener('click', () => {
    if (messageIndex < messages.length) {
        showMessage();
    }
});

restartBtn.addEventListener('click', () => {
    messageIndex = 0;
    nextBtn.disabled = false;
    nextBtn.style.opacity = 1;
    messageBubble.style.display = 'none';
    penguin.style.display = 'block'; // Mostrar el pingüino al reiniciar
    penguinVisible = true; // Restaurar el estado del pingüino
    showMessage();
});

showMessage();
window.onload = function() {
    var audio = document.getElementById('background-audio');
    audio.play();
};

