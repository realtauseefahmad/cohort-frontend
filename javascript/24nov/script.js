const reels = [
  {
    username: "tauseef_ahmad",
    likeCount: 1200,
    isLiked: false,
    commentCount: 150,
    caption: "Enjoying the vibe!",
    video: "./reels/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    shareCount: 30,
    isFollowed: true
  },
  {
    username: "coder_life",
    likeCount: 850,
    isLiked: true,
    commentCount: 90,
    caption: "Coding all night 💻",
    video: "./reels/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "travel_with_me",
    likeCount: 5300,
    isLiked: false,
    commentCount: 430,
    caption: "Beach days 🏖️",
    video: "./reels/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 140,
    isFollowed: true
  },
  {
    username: "foodie_world",
    likeCount: 2450,
    isLiked: false,
    commentCount: 210,
    caption: "Best pasta ever 🍝",
    video: "./reels/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2",
    shareCount: 44,
    isFollowed: false
  },
  // {
  //   username: "gym_flex",
  //   likeCount: 780,
  //   isLiked: true,
  //   commentCount: 60,
  //   caption: "Leg day completed 💪",
  //   video: "./reels/video5.mp4",
  //   userProfile: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
  //   shareCount: 20,
  //   isFollowed: true
  // },
  // {
  //   username: "music_vibes",
  //   likeCount: 1900,
  //   isLiked: false,
  //   commentCount: 130,
  //   caption: "New beat dropping 🔥",
  //   video: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_50mb.mp4",
  //   userProfile: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  //   shareCount: 55,
  //   isFollowed: false
  // },
  // {
  //   username: "funny_clips",
  //   likeCount: 8700,
  //   isLiked: true,
  //   commentCount: 980,
  //   caption: "Try not to laugh 😂",
  //   video: "https://sample-videos.com/video321/mp4/720/sample-5s.mp4",
  //   userProfile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  //   shareCount: 300,
  //   isFollowed: true
  // },
  // {
  //   username: "fashion_corner",
  //   likeCount: 3600,
  //   isLiked: false,
  //   commentCount: 270,
  //   caption: "Outfit of the day 👗",
  //   video: "https://sample-videos.com/video321/mp4/720/sample-10s.mp4",
  //   userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  //   shareCount: 75,
  //   isFollowed: false
  // },
  // {
  //   username: "tech_updates",
  //   likeCount: 1500,
  //   isLiked: true,
  //   commentCount: 110,
  //   caption: "Latest smartphone review 📱",
  //   video: "https://sample-videos.com/video321/mp4/720/sample-15s.mp4",
  //   userProfile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  //   shareCount: 33,
  //   isFollowed: true
  // },
  // {
  //   username: "daily_quotes",
  //   likeCount: 420,
  //   isLiked: false,
  //   commentCount: 25,
  //   caption: "Stay positive ✨",
  //   video: "https://sample-videos.com/video321/mp4/720/sample-30s.mp4",
  //   userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  //   shareCount: 9,
  //   isFollowed: false
  // }
];
var allreels = document.querySelector('.allreels');
function addData(){
  var sum = '';
  reels.forEach(function(elem,idx){
      sum = sum + `<div class="reels">
                      <video autoplay loop muted src="${elem.video}"></video>
                      <div class="bottom">
                          <div class="user">
                              <img src="${elem.userProfile}" alt="">
                              <h4>${elem.username}</h4>
                              <button id=${idx}class='follow'>${elem.isFollowed? 'Unfollow' : 'Follow'}</button>
                          </div>
                          <h3>${elem.caption}</h3>
                      </div>
                      <div class="right">
                          <div id=${idx} class="like">
                              <h4 class="like-icon">${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                              <h6>${elem.likeCount}</h6>
                          </div>
                          <div class="comment">
                              <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                              <h6>${elem.commentCount}</h6>
                          </div>
                          <div class="share">
                              <h4 class="share-icon"><i class="ri-send-plane-2-line"></i></h4>
                              <h6>${elem.shareCount}</h6>
                          </div>
                          <div class="menu">
                              <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                              
                          </div>
                      </div>
                  </div>`
  });
  allreels.innerHTML = sum;
}
addData();

allreels.addEventListener("click",function(dets){
  if(dets.target.className == 'like'){
    reels[dets.target.id].likeCount++;
    reels[dets.target.id].isLiked = true;
  }
  if(dets.target.className == 'follow'){
    reels[dets.target.id].isFollowed = true
  }
  addData()
  
})