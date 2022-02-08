    // <div class="card">
    //   <div class="poster"></div>
    //   <div class="details">
    //     <div class="title">Ghost</div>
    //     <div class="author">Justin Bieber</div>
    //     <div class="button-wrapper">
    //       <button></button>
    //     </div>
    //   </div>
    // </div>
import songs from './songs.js';
const content = document.querySelector('.content');

songs.forEach(el => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  
  const posterEl = document.createElement('div');
  posterEl.classList.add('poster');
  posterEl.classList.add(el.title);
  const poster = document.querySelector(`.${el.title}`);
  poster.style.backgroundImage = `url(${el.directory.poster})`;
  
  
  posterEl.classList.add('poster');

  cardEl.appendChild(posterEl);
});