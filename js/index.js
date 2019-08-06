// I want to make the bus img reverse on hover
const busImg = document.querySelector('.intro img');
// verifying that I am selecting the correct element
console.log(busImg);
// verified, now using mouse enter and mouse exit to simulate :hover
busImg.addEventListener('mouseenter', e => {
    e.target.style.transform = 'scaleX(-1)';
});

busImg.addEventListener('mouseleave', e => {
    e.target.style.transform = 'scaleX(1)';
});

const funBusLogo = document.querySelector('.logo-heading')
console.log(funBusLogo);

// function addToCount(count){
//     let newCount = count + 1;
//     count = newCount;
//     return count;
// }

// console.log(addToCount(5));

funBusLogo.addEventListener('click', e => {
    e.target.style.fontSize = '10rem';
    e.target.style.color = 'limegreen';
});


const navLinkHome = document.querySelector('.nav-link:nth-child(1)');
const navLinkAbout = document.querySelector('.nav-link:nth-child(2)');
const navLinkBlog = document.querySelector('.nav-link:nth-child(3)');
const navLinkContact = document.querySelector('.nav-link:nth-child(4)');

console.log(navLinkAbout);

navLinkHome.addEventListener('dblclick', e => {
    e.target.style.opacity = '0';
});
navLinkAbout.addEventListener('dblclick', e => {
    e.target.style.opacity = '0';
});
navLinkBlog.addEventListener('dblclick', e => {
    e.target.style.opacity = '0';
});
navLinkContact.addEventListener('dblclick', e => {
    e.target.style.opacity = '0';
});

const imgs = document.querySelectorAll('.img-content img');

imgs[0].addEventListener('load', e => {
    e.target.style.opacity = '0.5';
});

const buttons = document.querySelectorAll('.btn');

// password.addEventListener('blur', (event) => {
//   event.target.style.background = '';    
// });

pageBody = document.querySelector('body');

pageBody.addEventListener('keydown', () => {
    prompt('What are you trying to type?');
});

// const navScale = document.querySelector('.main-navigation')
// console.log(navScale);

// // navScale.addEventListener('click', e => {
// //     e.target.style.height = '500px';
// //     e.target.style.backgroundColor = 'yellow';
// //     console.log(e.target);
// // });

// document.addEventListener('click', () => {
//     navScale.style.height = '500px';
//     navScale.style.backgroundColor = 'yellow';
// });

const navScale = document.querySelector('.main-navigation')


document.addEventListener('wheel', () => {
    navScale.style.height = '500px';
    navScale.style.backgroundColor = 'yellow';
});

