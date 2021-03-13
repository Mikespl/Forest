const burger = document.querySelector(".burger");
const nav = document.querySelector('.nav')
const links = document.querySelectorAll('.link')
const footerYear = document.querySelector('.year')
burger.addEventListener('click', () => {
    nav.classList.toggle('active')
    burger.classList.toggle('active')
})
links.forEach(link => link.addEventListener('click', () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
}))
const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};
handleCurrentYear();