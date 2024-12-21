const authors = [
  "./images/muhammad_ali.jpg",
  "./images/steve_jobs.jpg",
  "./images/nelson_mandela.jpg",
  "./images/albert_einstein.jpg",
  "./images/charles_swindoll.jpg",
  "./images/walt_whitman.jpg",
  "./images/confucius.jpg",
  "./images/theodore_roosevelt.jpg",
  "./images/ralph_emerson.jpg",
  "./images/franklin_roosevelt.jpg",
  "./images/winston_churchill.jpg",
  "./images/charles_darwin.jpg",
  "./images/mahatma_gandhi.jpg",
  "./images/mark_twain.jpg",
  "./images/henry_ford.jpg",
  "./images/dalai_lama.jpg",
  "./images/oprah_winfrey.jpg",
  "./images/aristotle.jpg",
  "./images/plato.jpg",
  "./images/lao_tzu.jpg"
];

document.body.addEventListener("click", (event) => {
  const imageElement = document.createElement('img');
  const sourceIndex = Math.floor(Math.random() * authors.length);
  const selectedSource = authors[sourceIndex];
  imageElement.src = selectedSource;
  imageElement.style.border = `3px solid ${generateRandomColors()}`;
  document.body.append(imageElement);
  
  const x = event.clientX;
  const y = event.clientY;
  
  imageElement.style.left = `${x - 40}px`;
  imageElement.style.top = `${y - 40}px`;
  
  function generateRandomColors() {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
    const color = `rgb(${color1}, ${color2}, ${color3})`;
    return color;
  }
  
  setTimeout(() => {
    imageElement.remove();
  }, 5000)
});