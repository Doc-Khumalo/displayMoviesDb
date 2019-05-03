export default {
  apiUrl: apiKey => `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`,
  apiUrlGenres: apiKey => `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
  apiImages: apiKey => `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`,
  header: 'Movie listings',
  filterTextHeader: 'No movies matched filter criteria',
  filterText: 'Consider adjusting filters',
  genreDefaultValue: 'Genres',
  ratingDefaultValue: 'Rating',
  options: [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' },
    { value: 6, label: 'Six' },
    { value: 7, label: 'Seven' },
    { value: 8, label: 'Eight' },
    { value: 9, label: 'Nine' }
  ]
};