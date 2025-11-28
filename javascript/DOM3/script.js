// var btn= document.querySelector('button');
// var h1 = document.querySelector('h1');
// btn.addEventListener("click",function(){
//     setTimeout(function(){
//         h1.innerHTML = "Tauseef ahmad";
//     },2000)
// })

// var a = 0;
// var int = setInterval(() => {
//     a++;
//   console.log(a);
// },100)
// setTimeout(()=>{
//     clearInterval(int);
// },5000)
// var grow = 0;
// var btn = document.querySelector('button');
// var h2 = document.querySelector('h2');
// btn.addEventListener("click",function(){
//     btn.style.pointerEvents = 'none';
//     var num = 50 + Math.floor(Math.random()*50)
//     var int = setInterval(()=>{
//         grow++;
//         h2.innerHTML = grow+'%';
//         inner.style.width = grow+'%';
//     },num)
//     setTimeout(()=> {
//         clearInterval(int);
//         btn.innerHTML = "Downloaded"
//         btn.style.opacity = 0.5;
//     },num*100);
// });


var grow = 0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    var num = 50 + Math.floor(Math.random()*50)
    console.log('Your file will be downloaded in',num/10,'seconds');

    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    },num);
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num*100);
})