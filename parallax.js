document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 768) {
      const foregroundStars = document.querySelectorAll(".star"); // Estrellas principales
      const backgroundStars = document.querySelectorAll(".bg-star"); // Estrellas de fondo
  
      let mouseX = 0, mouseY = 0; // Coordenadas del mouse
      let targetX = 0, targetY = 0; // Coordenadas suavizadas
  
      document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
      });
  
      function animateParallax() {
        // Interpolación suave para las coordenadas
        targetX += (mouseX - targetX) * 0.1; // Ajusta el factor de suavidad (0.1 es suave, 0.2 es más rápido)
        targetY += (mouseY - targetY) * 0.1;
  
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
  
        // Parallax para las estrellas principales
        foregroundStars.forEach((star, index) => {
          const speed = (index + 1) * 0.5;
          const offsetX = ((targetX - centerX) * speed) / 100;
          const offsetY = ((targetY - centerY) * speed) / 100;
  
          star.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1)`;
        });
  
        // Parallax para las estrellas de fondo
        backgroundStars.forEach((bgStar, index) => {
          const speed = (index + 1) * 0.1;
          const offsetX = ((targetX - centerX) * speed) / 100;
          const offsetY = ((targetY - centerY) * speed) / 100;
  
          bgStar.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.8)`;
        });
  
        requestAnimationFrame(animateParallax); // Continúa la animación
      }
  
      animateParallax(); // Inicia la animación
    }
  });
  