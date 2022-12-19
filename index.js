document.addEventListener('mousemove', (e) => {
  const x = e.clientX - window.innerWidth / 2, y = e.clientY - window.innerHeight / 2
  document.body.style.backgroundPosition = `calc(50% + ${x/20}px) calc(50% + ${y/20}px)`
});
