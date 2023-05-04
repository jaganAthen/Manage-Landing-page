//Alert message 
function showAlert() {
     alert("Our Site is under construction. please come back soon!");
   }

//Hamburger icon funtion 
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
