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
            <div class="gallery_img-wrap">
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
            <h2 class="gallery__title">${title}</h2>
            <div class="gallery__info">
              <ul class="genres__list">
                <li class="genres__item">${genreNames}</li>
              </ul>
              <p class="gallery__year">${release_date.split('-')[0]}</p>
            </div>
            </div>
          </li>`;
}

export function templateCards(dataFilms) {
  const markup = dataFilms.map(templateCard).join('');
  return (refs.gallery.innerHTML = markup);
}
