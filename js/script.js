// Barra de busca
document.getElementById('search').addEventListener('input', function() {
  const keyword = this.value.toLowerCase();
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
      if (section.innerText.toLowerCase().includes(keyword)) {
          section.style.display = 'block';
      } else {
          section.style.display = 'none';
      }
  });
});
