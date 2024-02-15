const bars = document.querySelector('.bars');
const x = document.querySelector('.x');
const menu = document.querySelector('nav ul');

bars.addEventListener('click', () => {
    menu.style.display = 'flex';
    bars.style.display = 'none';
    x.style.display = 'flex';
    
});

x.addEventListener('click', () => {
    menu.style.display = 'none';
    bars.style.display = 'flex';
    x.style.display = 'none';
    
});

document.addEventListener("DOMContentLoaded", function() {
    const bus = document.querySelector('.bus');
    
    function slideToRight() {
      bus.style.left = '85%';
    }
  
    function slideToLeft() {
      bus.style.left = '-200px';
    }
  
    function resetPosition() {
      bus.style.left = '-200px';
      setTimeout(slideToRight, 1000);
    }
  
    setTimeout(resetPosition, 0);
  });
  