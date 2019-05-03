import React  from 'react';
import MoviesDisplay  from '../MoviesDisplay/MoviesDisplay.component';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import './Movies.css';
import config from '../config';

class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedMovies: [],
      showRatingsFilter: false,
      selectedOption: 'Minimum rating',
      filterItems: []
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

    //get all apis
    getData(config.apiUrl(API_KEY), config.apiUrlGenres(API_KEY), config.apiImages(API_KEY));
  }

  handleFilter = e => {
    const { setFilter } = this.props;
    const { filterItems } = this.state;
    let filterItemsSort = [];

    e.map(item => filterItemsSort.push({ id: item.value, name: item.label }));

    if (filterItems.length > 0) {
      this.setState({ filterItems: [ ...e ]});
      setFilter(filterItemsSort);
    } else {
      this.setState({ filterItems: [ ...e ]});
      setFilter(filterItemsSort);
    }

  };

  handleFilterRatings = selectedOption => {
    const { setRating } = this.props;
    this.setState({ selectedOption });
    setRating([ selectedOption ])
  };

  handleSort = moviesSort => moviesSort.length > 0 ? moviesSort.sort((a, b) =>
    parseFloat(b.popularity) - parseFloat(a.popularity)) : [];

  render() {
    const { movies, genresFilters, images, genreDisplay, genres } = this.props;
    const { selectedOption } = this.state;

    // call method to perfom sort by popularity
    const sortedMovies = this.handleSort(movies);

    return [
      <section className='container'>
        <div className='row filter-wrapper'>
          {genreDisplay.length > 0 &&
            <div className='col'>
              <Select
                placeholder={config.genreDefaultValue}
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
                options={genreDisplay}
                onChange={this.handleFilter}
              />
            </div>
          }
          <div className='col'>
            <Select placeholder={config.ratingDefaultValue} value={selectedOption} onChange={this.handleFilterRatings} options={config.options}/>
          </div>
        </div>
        {sortedMovies.length > 0 ? (
          <MoviesDisplay genres={genres} movies={sortedMovies} images={images}/>
           ) :
          (
            <React.Fragment>
              {genresFilters.length > 0 &&
              <div className='container'>
                <h4>{config.filterTextHeader}</h4>
                <p>{config.filterText}</p>
              </div>
              }
            </React.Fragment>
          )
        }
      </section>
    ];
  }
}

export default WeatherContainer;