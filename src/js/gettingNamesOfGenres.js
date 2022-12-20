import { getGenres } from './api';
import { genres } from './genres';

// getGenres().then(genres => {
//   localStorage.setItem('genresData', JSON.stringify(genres));
// });

// const saveGenresData = localStorage.getItem('genresData');
// const parsedsaveGenresData = JSON.parse(saveGenresData);

// export function getGenresNames(array) {
//   console.log(parsedsaveGenresData);
//   for (i = 0; i <= array.length; i += 1) {
//     parsedsaveGenresData.forEach(genre => {
//       if (array[i] === genre.id) {
//         array[i] = genre.name;
//       }
//     });
//   }
// }

// getGenres().then(genresArr => (genres = genresArr));
export function getGenresNames(array) {
  return array.map(id => {
    const foundId = genres.find(genre => genre.id === id);
    return (id = foundId.name);
  });
}

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

// export async function getGenresNames(array) {
//   const genres = await getGenres();
//   console.log(genres);
//   for (i = 0; i <= array.length; i += 1) {
//     genres.forEach(genre => {
//       if (array[i] === genre.id) {
//         array[i] = genre.name;
//       }
//     });
//   }
// }
