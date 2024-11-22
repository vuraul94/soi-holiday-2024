document.addEventListener("DOMContentLoaded", () => {
  const fogContainer = document.querySelector(".fog");

  function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Posición inicial aleatoria
    const startX = randomNumber(0,100);
    const size = randomNumber(5,50); 
    const duration = randomNumber(3,10);

    particle.style.left = `${startX}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${duration}s`;

    fogContainer.appendChild(particle);

    // Elimina la partícula después de que termina la animación
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }

  var randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};


  // Genera partículas constantemente con mayor frecuencia
  setInterval(createParticle, 150); // Crea una partícula cada 150ms
});
