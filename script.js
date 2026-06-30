// Pequeña interacción: cuando se hace clic en el botón, muestra una frase inspiradora
document.getElementById('btnInspirar').addEventListener('click', function() {
    const frases = [
        "✨ La poesía es el eco de la vida.",
        "🌱 Cada verso es una semilla de luz.",
        "🍃 El viento siempre trae un nuevo mensaje.",
        "🌟 Los sueños se escriben con el alma.",
        "📖 La naturaleza es el mejor poema."
    ];
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById('mensajeInspiracion').textContent = frases[indice];
});