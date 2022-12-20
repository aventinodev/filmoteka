import { refs } from './refs';
import { getGenresNames } from './gettingNamesOfGenres';

const BASE_PATH = 'https://image.tmdb.org/t/p/';

export function templateCard({
  id,
  title,
  poster_path,
  release_date,
  genre_ids,
}) {
  const genreNames = getGenresNames(genre_ids);

  return `<li class="gallery__card id="${id}">
  <a class="gallery__link" href="#">
            <div class="gallery__img-wrap">
              <img
                class="gallery__img"
                src="${BASE_PATH}w300/${poster_path}"
                alt="${title}"
                loading="lazy"
                width="395"
                height="569"
                              />
            </div>
           
          <div class="gallery__info-wrap">            
            <h2 class="gallery__subtitle text-hidden">${title}</h2>            
            <div class="gallery__info">
             <p class="gallery__genres">${
               genreNames.length > 3
                 ? genreNames.slice(0, 1).join(', ')
                 : genreNames.join(', ')
             }</p>             
             <p class="gallery__year">| ${release_date.split('-')[0]}</p>
            </div>           
          </div>
           </a> 
          </li>`;
}

export function templateCards(dataFilms) {
  const markup = dataFilms.map(templateCard).join('');
  return (refs.gallery.innerHTML = markup);
}
