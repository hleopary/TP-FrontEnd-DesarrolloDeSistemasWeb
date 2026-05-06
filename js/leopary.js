// Script interactivo para Leandro Paryszewski
// Efecto: Lluvia de esferas coloridas con física de colisiones

document.addEventListener('DOMContentLoaded', function() {
    // =========================================================================
    // 1. CREAR BOTÓN ESFÉRICO DINÁMICAMENTE
    // =========================================================================
    const nameSpan = document.querySelector('.profile-hero__name .text-gradient');
    if (!nameSpan) return;

    const sphereButton = document.createElement('button');
    sphereButton.className = 'sphere-button';
    sphereButton.setAttribute('aria-label', 'Activar lluvia de esferas');
    sphereButton.innerHTML = '●';
    nameSpan.parentNode.insertBefore(sphereButton, nameSpan.nextSibling);

    // Estilos del botón
    const style = document.createElement('style');
    style.textContent = `
        .sphere-button {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            margin-left: 0.5rem;
            margin-top: 0.5rem;
            border-radius: 50%;
            border: 2px solid var(--primary);
            background: linear-gradient(135deg, var(--primary-container), var(--primary));
            color: var(--on-primary-container);
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(63, 81, 181, 0.3);
            vertical-align: middle;
        }

        .sphere-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(63, 81, 181, 0.5);
        }

        .sphere-button:active {
            transform: scale(0.95);
        }

        #sphereCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 5;
        }
    `;
    document.head.appendChild(style);

    // =========================================================================
    // 2. CREAR CANVAS FULLSCREEN
    // =========================================================================
    const canvas = document.createElement('canvas');
    canvas.id = 'sphereCanvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Actualizar tamaño del canvas al redimensionar
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // =========================================================================
    // 3. SISTEMA DE FÍSICA Y ESFERAS
    // =========================================================================
    const spheres = [];
    const gravity = 0.4;
    const damping = 0.98;
    const friction = 0.95;
    const restitution = 0.7;
    const minSphereSize = 8;
    const maxSphereSize = 20;

    class Sphere {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = Math.random() * (maxSphereSize - minSphereSize) + minSphereSize;
            this.vx = (Math.random() - 0.5) * 4;
            this.vy = -Math.random() * 3 - 2;
            this.color = this.randomColor();
            this.resting = false;
        }

        randomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        update() {
            // Aplicar gravedad
            this.vy += gravity;
            
            // Aplicar velocidad
            this.x += this.vx;
            this.y += this.vy;

            // Aplicar amortiguamiento
            this.vx *= damping;
            this.vy *= damping;

            // Colisión con bordes
            if (this.x - this.radius < 0) {
                this.x = this.radius;
                this.vx *= -restitution;
            }
            if (this.x + this.radius > canvas.width) {
                this.x = canvas.width - this.radius;
                this.vx *= -restitution;
            }

            // Colisión con piso
            if (this.y + this.radius > canvas.height) {
                this.y = canvas.height - this.radius;
                this.vy *= -restitution;
                if (Math.abs(this.vy) < 0.5) {
                    this.resting = true;
                    this.vy = 0;
                }
            }

            // Fricción cuando reposa
            if (this.resting && Math.abs(this.vx) < 0.1) {
                this.vx = 0;
            } else if (!this.resting) {
                this.vx *= friction;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }

    // =========================================================================
    // 4. DETECCIÓN DE COLISIONES ENTRE ESFERAS
    // =========================================================================
    function checkCollisions() {
        for (let i = 0; i < spheres.length; i++) {
            for (let j = i + 1; j < spheres.length; j++) {
                const s1 = spheres[i];
                const s2 = spheres[j];

                const dx = s2.x - s1.x;
                const dy = s2.y - s1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDist = s1.radius + s2.radius;

                if (distance < minDist) {
                    // Separar esferas
                    const angle = Math.atan2(dy, dx);
                    const sin = Math.sin(angle);
                    const cos = Math.cos(angle);

                    const vx1 = s1.vx * cos + s1.vy * sin;
                    const vy1 = s1.vy * cos - s1.vx * sin;
                    const vx2 = s2.vx * cos + s2.vy * sin;
                    const vy2 = s2.vy * cos - s2.vx * sin;

                    s1.vx = vx2 * cos - vy1 * sin;
                    s1.vy = vy1 * cos + vx2 * sin;
                    s2.vx = vx1 * cos - vy2 * sin;
                    s2.vy = vy2 * cos + vx1 * sin;

                    const overlap = (minDist - distance) / 2;
                    s1.x -= overlap * cos;
                    s1.y -= overlap * sin;
                    s2.x += overlap * cos;
                    s2.y += overlap * sin;
                }
            }
        }
    }

    // =========================================================================
    // 5. LOOP DE ANIMACIÓN
    // =========================================================================
    function animate() {
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Actualizar y dibujar esferas
        for (let i = spheres.length - 1; i >= 0; i--) {
            const sphere = spheres[i];
            sphere.update();
            sphere.draw();

            // Remover esferas que se salieron de pantalla (después de un tiempo)
            if (sphere.y > canvas.height + 100) {
                spheres.splice(i, 1);
            }
        }

        // Detectar colisiones
        checkCollisions();

        requestAnimationFrame(animate);
    }

    animate();

    // =========================================================================
    // 6. EVENT LISTENER - CREAR ESFERAS AL CLICKEAR BOTÓN
    // =========================================================================
    sphereButton.addEventListener('click', function(e) {
        const buttonRect = sphereButton.getBoundingClientRect();
        const spawnX = buttonRect.left + buttonRect.width / 2;
        const spawnY = buttonRect.top + buttonRect.height / 2;

        // Crear múltiples esferas por click
        for (let i = 0; i < 8; i++) {
            const sphere = new Sphere(spawnX + (Math.random() - 0.5) * 20, spawnY);
            spheres.push(sphere);
        }

        // Agregar más esferas continuamente mientras presiona
        let clickInterval = setInterval(() => {
            const sphere = new Sphere(spawnX + (Math.random() - 0.5) * 20, spawnY);
            spheres.push(sphere);
        }, 100);

        // Detener cuando suelta el mouse
        document.addEventListener('mouseup', function stop() {
            clearInterval(clickInterval);
            document.removeEventListener('mouseup', stop);
        }, { once: true });
    });
});
