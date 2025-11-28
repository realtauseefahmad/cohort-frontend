// var h1 = document.createElement('h1')
// h1.innerHTML = "hello from javascript"
// var main = document.querySelector('body');
// main.appendChild(h1)
// h1.style.color ="red";

var btn = document.querySelector('button');
var main = document.querySelector('main');
btn.addEventListener('click',function(){
    var div = document.createElement('div');

    div.style.height = '50px';
    div.style.width = '50px';
    div.style.position = 'absolute';
    
    var x = Math.random()*80;
    var y = Math.random()*80;
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);
    div.style.left = x+'%';
    div.style.top = y+'%';
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

    main.appendChild(div);
})