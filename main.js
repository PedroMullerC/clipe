const songsList =[
    {
        name:"Musica 1",
        artist:"Sweater Weather",
        src:"song/Sweater Weather.mp3",
        cover:"img/img-1.webp"
    },
    {
              name:"Musica 2",
        artist:"Remember me",
        src:"song/Remember me.mp3",
        cover:"img/img-2.webp"
    },
    {
              name:"Musica 3",
        artist:"Je te laisserai des mots",
        src:"song/Je te laisserai des mots.mp3",
        cover:"img/img-3.jpg"
    },
    {
              name:"Musica 4",
        artist:"Again",
        src:"song/Again.mp3",
        cover:"img/img-4.jpg"
    },
    {
              name:"Musica 5",
        artist:"Sapientdream pastlives",
        src:"song/Sapientdream pastlives.mp3",
        cover:"img/img-5.jpg"
    },
    {
                    name:"Musica 6",
        artist:"Shiloh",
        src:"song/Shiloh.mp3",
        cover:"img/img-6.jpg"
    }
];
const videos=[
    "video/video-1.mp4",
    "video/video-2.mp4",
    "video/video-3.mp4",
    "video/video-4.mp4",
    "video/video-5.mp4",
    "video/video-6.mp4",
]



const artistName=document.querySelector('artist-name');
const musicName=document.querySelector('song-name');
const fillBar=document.querySelector('fill-bar');
const time=document.querySelector('time');
const progress=document.querySelector('progress-bar');

const cover=document.getElementById('cover');
const playBtn=document.getElementById('play');
const prevBtn=document.getElementById('prev');
const nextBtn=document.getElementById('next');

let song=new Audio();
let currentSong=0;
let playing=false

document.addEventListener('DOMContentLoaded', ()=>{
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', TogglePlayPause);
    progress.addEventListener('click', seek);
}); 

function loadSong(index){
    const {name, artist, src, cover:thumb}=songsList[index];
    artistName
}
