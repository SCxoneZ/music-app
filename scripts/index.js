import songs from './songs.js';

if(localStorage.getItem('index')){
  var audio = new Audio(songs[parseInt(localStorage.getItem('index'))].directory.song);
}

const poster = document.querySelector('.music-poster'),
title = document.querySelector('.title'),
play = document.querySelector('.play-button'),
playImg = document.querySelector('.play-button img');

if(localStorage.getItem('index')){
  
  poster.src = songs[parseInt(localStorage.getItem('index'))].directory.poster;
  title.innerHTML = songs[parseInt(localStorage.getItem('index'))].title;
  
  play.addEventListener('click', async e => {
    
    if(audio.paused){
      await audio.play();
      playImg.setAttribute('src', 'img/pause.png');
    }else{
      await audio.pause();
      playImg.setAttribute('src', 'img/play.png')
    }
    
  });
  
}
