import getHelper from '../helpers/axiosGetHelper';
import {
  SET_MOVIES,
  SET_GENRES,
  SET_IMAGES,
  SET_FILTER,
  SET_RATING
} from './type';

export const getMovies = url => {
  return (dispatch) => {

    getHelper(url)
      .then(response => {
        dispatch(setMovies(response.data.results))
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

export const getGenres = url => {
  return (dispatch) => {

    getHelper(url)
      .then(response => {
        dispatch(setGenres(response.data.genres))
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

export const getMovieImages = url => {
  return (dispatch) => {

    getHelper(url)
      .then(response => {
        dispatch(setMovieImages(response.data.images))
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

export const setMovies = payload => ({
  type: SET_MOVIES,
  payload
});

export const setMovieImages = payload => ({
  type: SET_IMAGES,
  payload
});

export const setFilter = payload => ({
  type: SET_FILTER,
  payload
});

export const setRating = payload => ({
  type: SET_RATING,
  payload
});

export const setGenres = payload => ({
  type: SET_GENRES,
  payload
});

export const getData = (moviesUrl, genresUrl, imagesUrl) => {
  return (dispatch) => {
    dispatch(getMovies(moviesUrl));
    dispatch(getGenres(genresUrl));
    dispatch(getMovieImages(imagesUrl));
  }
};