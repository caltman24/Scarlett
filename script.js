const hexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()}`;
  };
  
  function applyGradient() {
    const color = hexColor();
    const color2 = hexColor();
    const gradient = `linear-gradient(45deg, ${color} 0%,   ${color2} 100%)`;
    document.body.style.backgroundImage = gradient;
  }
  
  document.addEventListener("keydown", () => {
    applyGradient();
  });
  
  document.addEventListener("click", () => {
    applyGradient();
  });
  
  applyGradient();
  