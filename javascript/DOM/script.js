// var bulb=document.querySelector("div")
// var btn=document.querySelector("button")
// var flag = 0;
// btn.addEventListener("click",function(){
//     if(flag===0){
//         bulb.style.backgroundColor = "yellow";
//         flag=1;
//         btn.innerHTML = "OFF";
//     }else{
//         bulb.style.backgroundColor = "black";
//         flag =0;
//         btn.innerHTML = "ON";
//     }
// })

// var addfriend=document.querySelector("h4");
// var btn = document.querySelector("button");
// let flag = 0;
// btn.addEventListener("click",function(){
//     if(flag===0){
//         addfriend.innerHTML = "Friends"
//         addfriend.style.color = "green"
//         flag=1;
//         btn.innerHTML = "Remove Friend"
//         btn.style.color = "#111"
//     }else{
//         addfriend.innerHTML = "Stranger"
//         addfriend.style.color = "red"
//         flag=0;
//         btn.innerHTML = "Add Friend"
//     }
// });

//post likes
// var con = document.querySelector("div");
// var love = document.querySelector("i");
// con.addEventListener("dblclick", function(){
//     love.style.transform = 'translate(-50%,-50%) scale(1)';
//     love.style.opacity = 0.6;
//     setTimeout(function(){
//         love.style.opacity = 0;
//     },1000);
//     setTimeout(function(){
//         love.style.transform = 'translate(-50%,-50%) scale(0)';
//     },2000);
// });

//cursor
// var main = document.querySelector("main")
// var crsr = document.querySelector("#cursor")
// main.addEventListener("mousemove", function(dets){
//     crsr.style.left = dets.x+"px"
//     crsr.style.top = dets.y+"px"
// })
// var arr = [
//     {
//         team: 'CSK',
//         primary: 'yellow',
//         secondary: 'blue',
//         trophy : '🏆',
//     },
//     {
//         team: 'RCB',
//         primary: 'black',
//         secondary: 'red',
//         trophy : '🏆',
//     },
//     {
//         team: 'MI',
//         primary: 'blue',
//         secondary: 'gold',
//         trophy : '🏆',
//     },
//     {
//         team: 'KKR',
//         primary: 'purple',
//         secondary: 'gold',
//         trophy : '🏆',
//     },
//     {
//         team: 'SRH',
//         primary: 'black',
//         secondary: 'orange',
//         trophy : '🏆',
//     },
//     {
//         team: 'PBKS',
//         primary: 'crimson',
//         secondary: 'silver',
//         trophy : '🏆',
//     },
// ]
// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var main = document.querySelector('main')
// btn.addEventListener('click',function(){
//     var winner = arr[Math.floor(Math.random()*arr.length)]
//     h1.innerHTML = winner.team  + winner.trophy
//     h1.style.backgroundColor = winner.secondary
//     main.style.backgroundColor = winner.primary  
// })
