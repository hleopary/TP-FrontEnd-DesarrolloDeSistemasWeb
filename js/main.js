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


/* --------------------------------------------------------------------------
   2. MOVIE CAROUSEL
   --------------------------------------------------------------------------
   Carousel de películas con trailers de YouTube.
   Navegación por flechas y dots indicadores.
   -------------------------------------------------------------------------- */

(function initMovieCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const dotsContainer = document.getElementById('carouselDots');

    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    const slides = track.querySelectorAll('.movie-carousel__slide');
    const dots = dotsContainer.querySelectorAll('.movie-carousel__dot');
    let currentIndex = 0;

    // Detiene el video activo cuando se cambia de slide o se cierra
    function stopActiveVideo() {
        const activePlayingSlide = track.querySelector('.movie-carousel__slide--playing');
        if (activePlayingSlide) {
            activePlayingSlide.classList.remove('movie-carousel__slide--playing');
            const iframe = activePlayingSlide.querySelector('.movie-carousel__iframe');
            if (iframe) {
                iframe.src = ''; // Corta la reproducción y limpia el iframe
            }
        }
    }

    function goToSlide(index) {
        // Wrap around
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        // Detener cualquier video que se esté reproduciendo antes de deslizar
        stopActiveVideo();

        currentIndex = index;
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

        // Actualizar dots
        dots.forEach(function (dot, i) {
            dot.classList.toggle('movie-carousel__dot--active', i === currentIndex);
        });
    }

    prevBtn.addEventListener('click', function () {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', function () {
        goToSlide(currentIndex + 1);
    });

    // Click en dots
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            goToSlide(i);
        });
    });

    // Lógica Netflix-style "Reproducir" video
    const playBtns = track.querySelectorAll('.movie-carousel__play-btn');
    const closeBtns = track.querySelectorAll('.movie-carousel__close-btn');

    playBtns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const slide = e.target.closest('.movie-carousel__slide');
            const videoUrl = this.getAttribute('data-video');
            const iframe = slide.querySelector('.movie-carousel__iframe');
            
            // Asigna la url con autoplay configurado y añade clase playing
            iframe.src = videoUrl;
            slide.classList.add('movie-carousel__slide--playing');
        });
    });

    // Lógica para cerrar el video
    closeBtns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            stopActiveVideo();
        });
    });

})();

/* --------------------------------------------------------------------------
   3. MOBILE NAVBAR TOGGLE
   -------------------------------------------------------------------------- */

(function () {
  var menuToggle = document.querySelector('.navbar__menu-toggle');
  var menuIcon = menuToggle ? menuToggle.querySelector('.material-symbols-outlined') : null;
  var slideout = document.querySelector('.navbar__slideout');
  var overlay = document.querySelector('.navbar__overlay');

  if (!menuToggle) {
    console.warn('Mobile nav: menuToggle not found');
    return;
  }
  if (!menuIcon) {
    console.warn('Mobile nav: menuIcon not found');
    return;
  }
  if (!slideout) {
    console.warn('Mobile nav: slideout not found');
    return;
  }
  if (!overlay) {
    console.warn('Mobile nav: overlay not found');
    return;
  }

  function openMenu() {
    slideout.classList.add('navbar__slideout--open');
    overlay.classList.add('navbar__overlay--visible');
    menuToggle.classList.add('navbar__menu-toggle--open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (menuIcon) menuIcon.textContent = 'close';
  }

  function closeMenu() {
    slideout.classList.remove('navbar__slideout--open');
    overlay.classList.remove('navbar__overlay--visible');
    menuToggle.classList.remove('navbar__menu-toggle--open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (menuIcon) menuIcon.textContent = 'menu';
  }

  function toggleMenu() {
    if (slideout.classList.contains('navbar__slideout--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuToggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  slideout.addEventListener('click', function (e) {
    var link = e.target.closest('.navbar__link, .navbar__team-list a');
    if (link) {
      closeMenu();
    }
  });

})();
