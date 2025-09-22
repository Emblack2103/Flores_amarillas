// script.js - integrado con tu onload (quita la clase "container" cuando todo cargue)
// Conserva: aparición del mensaje, toggle night con click y pausa con 'p'.

// Cuando el DOM está listo: micro interacción y control de tecla
document.addEventListener('DOMContentLoaded', () => {
  const night = document.querySelector('.night');
  const message = document.querySelector('.message');

  // pequeño bounce del mensaje después de su aparición CSS
  if (message) {
    message.style.transformOrigin = 'center';
    // asegurar que haya transición para transform (si no existía)
    const prev = message.style.transition || '';
    message.style.transition = prev + (prev ? ', ' : '') + 'transform 300ms ease';
    // el CSS hace fade-in con delay 2s; sincronizamos un pequeño salto
    setTimeout(() => {
      message.style.transform = 'translateY(-6px)';
      setTimeout(() => {
        message.style.transform = 'translateY(0)';
      }, 350);
    }, 2200);
  }

  // toggle visual 'night' al hacer click en cualquier parte
  document.body.addEventListener('click', () => {
    if (night) night.classList.toggle('night--off');
  });

  // pausa/reanuda animaciones con la tecla 'p'
  let paused = false;
  document.addEventListener('keydown', (e) => {
    if (e.key && e.key.toLowerCase() === 'p') {
      paused = !paused;
      document.documentElement.style.animationPlayState = paused ? 'paused' : 'running';
      document.documentElement.style.webkitAnimationPlayState = paused ? 'paused' : 'running';
    }
  });
});

// Tu onload: quitar la clase "container" cuando *toda* la página (recursos) se haya cargado.
// Esto reactivará animaciones si al inicio agregaste <body class="container"> para pausarlas.
window.addEventListener('load', () => {
  try {
    document.body.classList.remove('container');
  } catch (err) {
    // si por alguna razón falla (muy improbable), no hacer nada
    // console.warn('No se pudo remover clase container:', err);
  }
});
