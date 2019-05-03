import {
  SET_MOVIES,
  SET_GENRES,
  SET_FILTER,
  SET_RATING,
  SET_IMAGES,
} from './type';

const initialState = {
  movies: [],
  genres: [],
  genresFilters: [],
  tempMovieArr: [],
  tempMovieId: [],
  images: [],
  genreDisplay: [],
  rating: 0
};

const reducer = (state = initialState, action) => {
  let payloadData = action.payload;

  switch (action.type) {

    case SET_MOVIES:
    return {
      ...state,
      movies: [ ...payloadData ],
      tempMovieArr: [ ...payloadData ]
    };

    case SET_GENRES:
      let genreDisplayTemp = [];

      payloadData.map(item => genreDisplayTemp.push({ value: item.id, label: item.name }));

      return {
        ...state,
        genres: [ ...payloadData ],
        genreDisplay: [ ...genreDisplayTemp ]
      };

    case SET_RATING:
      // get movies with selected rating
      let movieRatings = state.tempMovieArr.filter(item => Math.round(item.vote_average) >= payloadData.map(item => item.value));

      //get movies with selected rating and filter
      movieRatings = state.tempMovieId.length > 0 ? movieRatings.filter(x => state.tempMovieId.every(y => x.genre_ids.includes(y))) : movieRatings;

      return {
        ...state,
        movies: movieRatings,
        rating: payloadData.map(item => item.value)
      };

    case SET_IMAGES:
      return {
        ...state,
        images: payloadData
      };

    case SET_FILTER:
      let movieDataId = [];

      // update filters with incoming payload id's
      payloadData.map(item => movieDataId.push(item.id));

      // clean up any duplicates found
      movieDataId = [ ...new Set(movieDataId) ];

      let movies = state.tempMovieArr.filter(x => movieDataId.every(y => x.genre_ids.includes(y)));
      movies = movies.filter(item => Math.round(item.vote_average) >= state.rating);

      return {
        ...state,
        genres: [ ...state.genres ],
        tempMovieId: movieDataId,
        movies
      };

    default: return state;
  }
};

export default reducer;