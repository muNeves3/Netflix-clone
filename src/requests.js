const API_KEY = "dfca9c4d01546e2c6f2196c086d78bd3";

/**final of the url requests */

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  fetchScienceFic: `/discover/movie?with_genres=878&api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?with_genres=35&api_key=${API_KEY}`,
  fetchDramaMovies: `/discover/movie?with_genres=18&api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with-genres=10749`,
  fetchMostPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
};

export default requests;
