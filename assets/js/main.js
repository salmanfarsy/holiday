const loader = document.querySelector('.loader');
window.addEventListener('load', ()=>{
loader.classList.add('off');
})

const nav = document.querySelector('nav');

window.addEventListener('scroll', sticky);

function sticky(){
    if(window.pageYOffset > 100){
        nav.classList.add('scroll');
    } else{
        nav.classList.remove('scroll');
    }
}

const menu = document.querySelector('.icon');
const ul =  document.querySelector('.nav');
menu.addEventListener('click', drop);

function drop(){
  menu.classList.toggle('rotate');
 ul.classList.toggle('drop');
}

