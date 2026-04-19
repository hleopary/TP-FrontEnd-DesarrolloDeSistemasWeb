/* ==========================================================================
   GRUPO CLOUDS — Script principal
   Archivo: js/main.js
   Descripción: Lógica de interacción del sitio.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. THEME TOGGLE (Light / Dark Mode)
   --------------------------------------------------------------------------
   Alterna la clase "dark" en <html> y persiste la preferencia
   en localStorage. Detecta la preferencia del sistema operativo
   como valor inicial si no hay preferencia guardada.
   -------------------------------------------------------------------------- */

(function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;

    // Leer preferencia guardada o detectar la del sistema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.classList.add('dark');
    } else if (savedTheme === 'light') {
        root.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark');
    }

    // Listener del botón toggle
    if (toggle) {
        toggle.addEventListener('click', function () {
            root.classList.toggle('dark');
            const isDark = root.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
})();
