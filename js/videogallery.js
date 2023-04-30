let sideBar = document.querySelector('.container .side-bar');
document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
};
let video = document.querySelector('.container .video-container video');
let videoLinks = document.querySelectorAll('.container .side-bar .list li');
videoLinks.forEach(link =>{
    link.onclick = () =>{
        let src = link.getAttribute('data-src');
        video.src = src;
        sideBar.classList.remove('active');
        videoLinks.forEach(remove =>{remove.classList.remove('active')});
        link.classList.add('active');
    }
})