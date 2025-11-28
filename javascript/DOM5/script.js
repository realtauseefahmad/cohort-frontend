// const users = [
//   {
//     fullName: "Alex Johnson",
//     image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
//     profession: "Software Engineer",
//     description: "Full-stack developer with 5+ years of experience building scalable web apps.",
//     tags: ["JavaScript", "React", "Node.js"]
//   },
//   {
//     fullName: "Sophia Martinez",
//     image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
//     profession: "UI/UX Designer",
//     description: "Passionate about user-centered design and clean interface aesthetics.",
//     tags: ["Figma", "UI", "UX"]
//   },
//   {
//     fullName: "Michael Lee",
//     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
//     profession: "Data Scientist",
//     description: "Loves finding insights from complex datasets using ML and AI techniques.",
//     tags: ["Python", "Machine Learning", "Data Analysis"]
//   },
//   {
//     fullName: "Emma Wilson",
//     image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
//     profession: "Digital Marketer",
//     description: "Expert in SEO, SEM and innovative online brand‑building strategies.",
//     tags: ["SEO", "Marketing", "Branding"]
//   },
//   {
//     fullName: "David Kim",
//     image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
//     profession: "Mobile App Developer",
//     description: "Android & iOS developer specializing in performance‑focused apps.",
//     tags: ["Flutter", "Kotlin", "Swift"]
//   }
// ];
// var sum = '';
// users.forEach(function(elem){
//     sum = sum + `<div class="card">
//             <img src="${elem.image}" alt="">
//             <h3>${elem.fullName}</h3>
//             <h4>${elem.profession}</h4>
//             <p>${elem.description}</p>
//         </div>`; 
// });
// var main = document.querySelector(`main`);
// main.innerHTML = sum;

var box = document.getElementById('box')
box.addEventListener('mouseenter',function(){
  console.log('enter....')
})