import songs from './songs.js';

if(localStorage.getItem('index')){
  // audio that will be call in play listener
  // using var because of scope
  var audio = new Audio(songs[parseInt(localStorage.getItem('index'))].directory.song);
}

// select items in document
const poster = document.querySelector('.music-poster'),
title = document.querySelector('.title'),
play = document.querySelector('.play-button'),
playImg = document.querySelector('.play-button img'),
replay = document.querySelector('.replay-button'),
lyricsWrapper = document.querySelector('.lyrics-wrapper');

if(localStorage.getItem('index')){
  
  // changing the poster and title
  poster.src = songs[parseInt(localStorage.getItem('index'))].directory.poster;
  title.innerHTML = songs[parseInt(localStorage.getItem('index'))].title;
  
  // play button listener
  play.addEventListener('click', async e => {
    
    if(audio.paused){
      await audio.play();
      playImg.setAttribute('src', 'img/pause.png');
    }else{
      await audio.pause();
      playImg.setAttribute('src', 'img/play.png')
    }
    
  });
  
  // replay Buton event listener
  replay.addEventListener('click', () => {
    audio.currentTime = 0;
  });
  
  
  // fetching lyrics
  fetch(`https://api.lyrics.ovh/v1/${songs[parseInt(localStorage.getItem('index'))].author}/${songs[parseInt(localStorage.getItem('index'))].title}`)
    .then(res => res.json())
    .then(data => {
      lyricsWrapper.innerText = data.lyrics.replace(`Paroles de la chanson ${songs[parseInt(localStorage.getItem('index'))].title} par ${songs[parseInt(localStorage.getItem('index'))].author}\r\n`, '');
    });
  
}

// https://api.lyrics.ovh/v1/justin%20bieber/ghost
// https://api.lyrics.ovh/suggest/ghost

// console.log(axios);
// axios.get('https://covid19.mathdro.id/api')
// .then(res => console.log(res))
