const API_KEY = '31449444226ba6345698313fe055564a';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_FILMS = 'trending/movie/day';
const KEY_WORD = 'search/movie';
const GENRES = 'genre/movie/list';

export async function getPopularFilms(page) {
  try {
    const response = await fetch(
      `${BASE_URL}${TRENDING_FILMS}?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(response.status);
  }
}
export async function getFilmByKeyWord(page, query) {
  try {
    const response = await fetch(
      `${BASE_URL}${KEY_WORD}?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
    );
    const data = await response.json();
    // console.log(data);
    // const result = await data.result;
    return data;
  } catch (error) {
    throw new Error(response.status);
  }
}

export async function getGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}${GENRES}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    console.log(data.genres);
    return data.genres;
  } catch (error) {
    throw new Error(response.status);
  }
}
