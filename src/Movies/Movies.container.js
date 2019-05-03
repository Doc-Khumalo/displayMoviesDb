import { connect } from 'react-redux';
import Weather from './Movies.component';
import { getData, setFilter, setRating } from '../modules/actions';

const mapDispatchToProps = {
  getData,
  setFilter,
  setRating
};

const mapStateToProps = (state) => ({
  movies: state.reducer.movies,
  genres: state.reducer.genres,
  genreDisplay: state.reducer.genreDisplay,
  filterRatingOptions: state.reducer.filterRatingOptions,
  images: state.reducer.images,
  genresFilters: state.reducer.genresFilters
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);