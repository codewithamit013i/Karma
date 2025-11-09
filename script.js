
/* Fade system */
const pages = document.querySelectorAll('.page');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
    else entry.target.classList.remove('visible');
  });
},{threshold:0.5});
pages.forEach(p=>observer.observe(p));

// header-toggle

const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const toggleDiv = document.getElementById('modal');

openBtn.addEventListener('click', () => {
    modal.classList.add("open");
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove("open");
});