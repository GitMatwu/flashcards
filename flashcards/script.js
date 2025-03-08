let currentCardIndex = 0;
const cards = [
    { word: "Hello", translation: "Hola" },
    { word: "Goodbye", translation: "Adiós" },
    { word: "Please", translation: "Por favor" },
    { word: "Thank you", translation: "Gracias" },
    { word: "Tree", translation: "Arbol" },
    { word: "Song", translation: "Cancion" },
    { word: "Jump", translation: "Salto" },
    { word: "Run", translation: "Correr" },
    { word: "Walk", translation: "Caminar" },
    { word: "Path", translation: "Camino" },
    { word: "Car", translation: "Automovil" },
    { word: "Swin", translation: "Nadar" },
    { word: "Drink", translation: "Beber" },
    { word: "Plants", translation: "Plantas" },
    { word: "Desk", translation: "Escritorio" },
    { word: "Achievements", translation: "Logros" },
    { word: "Work", translation: "Trabajar" },
    { word: "Medicine", translation: "Medicina" },
    { word: "Companies", translation: "Empresas" },
    { word: "Achievements", translation: "Logros" },
    { word: "Students", translation: "Estudiantes" },
    { word: "Teachers", translation: "Profesores" },
    { word: "Family", translation: "Familia" },
    { word: "Achievements", translation: "Logros" },
    { word: "Money", translation: "Dinero" },
    { word: "Achievements", translation: "Logros" },
    { word: "Shopping", translation: "Compras" },
    { word: "Sales", translation: "Ventas" },
    { word: "Witches", translation: "Brujas" },
    { word: "Shopping", translation: "Compras" },
    { word: "Darkness", translation: "Oscuridad" },
    { word: "Sun", translation: "Sol" },
    { word: "Happiness", translation: "Felicidad" },
];

function updateCardContent() {
    document.querySelector(".front").textContent = cards[currentCardIndex].word;
    document.querySelector(".back").textContent = cards[currentCardIndex].translation;
}

function flipCard() {
    document.querySelector(".flashcard").classList.toggle("flip");
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCardContent();
    document.querySelector(".flashcard").classList.remove("flip"); 
}

document.addEventListener("DOMContentLoaded", updateCardContent);
