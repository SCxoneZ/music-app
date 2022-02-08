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
  
  const posterEl = document.createElement('img');
  posterEl.classList.add('poster');
  posterEl.classList.add(el.title);
  posterEl.setAttribute('src', el.directory.poster);
  
  const details = document.createElement('div');
  details.classList.add('details');
  
  const title = document.createElement('div');
  title.classList.add('title');
  title.innerHTML = el.title;
  
  const author = document.createElement('div');
  author.classList.add('author');
  author.innerHTML = el.author;
  
  const btnWrapper = document.createElement('div');
  const btn = document.createElement('button');
  btnWrapper.classList.add('button-wrapper');
  btnWrapper.appendChild(btn);
  
  details.appendChild(title);
  details.appendChild(author);
  details.appendChild(btnWrapper);

  cardEl.appendChild(posterEl);
  cardEl.appendChild(details);
  
  content.appendChild(cardEl);
});

if(songs.length > 0){
  const listenBtns = document.querySelectorAll('.button-wrapper button');
  listenBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      window.location.href = 'index.html';
    });
  });
}