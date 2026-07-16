/* ==========================================================================
   CONTROLADOR DEL MODO OSCURO (tema.js)
   ========================================================================== */

var modoOscuro = false; 

// Al cargar la página, revisamos la memoria del navegador
if (localStorage.getItem("tema") === "oscuro") {
    modoOscuro = true;
    aplicarTema(); 
}

// Función principal que se activa al hacer clic en el botón
function cambiarTema() {
    if (modoOscuro == false) {
        modoOscuro = true;
        localStorage.setItem("tema", "oscuro"); 
    } else {
        modoOscuro = false;
        localStorage.setItem("tema", "claro"); 
    }
    
    aplicarTema();
}

// Función encargada de prender o apagar la clase en el HTML
function aplicarTema() {
    if (modoOscuro == true) {
        document.body.classList.add('modo-oscuro');
    } else {
        document.body.classList.remove('modo-oscuro');
    }
}

// Actualizar dinámicamente el mensaje de WhatsApp
function actualizarLink() {
    // 1. Tomamos el valor que el usuario seleccionó
    const materiaSeleccionada = document.getElementById('selector-materia').value;
    
    // 2. Armamos el mensaje
    const mensaje = `Hola Matías, quisiera consultar información por clases de ${materiaSeleccionada}.`;
    
    // 3. Convertimos los espacios y caracteres especiales para que la URL no se rompa (encodeURIComponent)
    const enlaceArmado = `https://wa.me/5492983610419?text=${encodeURIComponent(mensaje)}`;
    
    // 4. Se lo inyectamos al botón
    document.getElementById('btn-dinamico-wa').href = enlaceArmado;
}