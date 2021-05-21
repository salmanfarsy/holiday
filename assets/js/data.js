const data =[
    {img: 'assets/images/IMG_8029.JPG',
    name:'Mahmud',
    text:`They are easy and simple to book my holidays.
    I enjoyed my time because they saved a lot of my time and money. 
    Going on holidays was never this simple`
},
{img: 'assets/images/IMG_20180922_060542.JPG',
name:'Jiaul Haque',
text:`I enjeoyed their service. It was a Good holiday, one of the best
vacations of my life . I wanna go to vacation with them again.`
},
{img: 'assets/images/IMG_20180921_142329.JPG',
name:'Mohiuddin',
text:`They will always give you more than your money's worth. I love travlling with them . and
I recommended my collueges to travel by them too . It was really the most memoriable exprience`
}
];

const image = document.querySelector('.review');
const quote = document.querySelector('#quote');
const nxtBtn = document.querySelector('#next');
const prvBtn = document.querySelector('#prev');
const name = document.querySelector('#name');
const aside = document.querySelector('aside');

let num = 0;

nxtBtn.addEventListener('click', frwd);
prvBtn.addEventListener('click', bkwd);


function frwd() {
    const slide = data[num];
    image.src = slide.img;
    quote.textContent = slide.text;
    name.textContent = slide.name;
    image.classList.toggle('ani');
    image.classList.toggle('ani0');

    num++;
    if(num>2){
        num = 0;
    }
}
function bkwd() {
    const slide = data[num];
    image.src = slide.img;
    quote.textContent = slide.text;
    name.textContent = slide.name;

    num--;
    if(num<0){
        num = 2;
    }
}
setInterval(frwd, 5000);