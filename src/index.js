import { getPopularFilms, getFilmByKeyWord, getGenres } from './js/api';
import { templateCards } from './js/template';
import { refs } from './js/refs';

let page = 1;

async function createGallery() {
  try {
    const data = await getPopularFilms(page);
    const dataFilms = data.results;
    templateCards(dataFilms);
  } catch (error) {
    console.log(error);
  }
}
createGallery();

// async function getGenresName() {
//   const data = await getPopularFilms(page);
//   const genres = await getGenres();
//   const genresArray = await data.results.map(result => result.genre_ids);
//   const genreNames = genresArray.map(el => {
//     return el.map(id => {
//       const foundId = genres.find(genre => genre.id === id);
//       return (id = foundId.name);
//     });
//   });
//   console.log(genres);
//   console.log(genreNames);
//   return genreNames;
// }
// getGenresName();
