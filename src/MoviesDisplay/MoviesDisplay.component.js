import React from 'react';
import PropTypes from 'prop-types';

const MoviesDisplay = props => {
  const {
    movies,
    genres,
    images
  } = props;


  return (
    <div className="movies-wrapper">
      <ul className='row'>
        {movies.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <li className='movies-item col'>
                <header className='hover-text'>
                  <p><span className='sub-text'>{item.title}</span></p>
                  <div className="description-wrapper">
                      {item.overview}
                  </div>
                </header>
                <img src={`${images.secure_base_url}w780${item.poster_path}`}  alt=''/>
                <div className="rating-details">
                  {genres.length > 0 &&
                    <React.Fragment>
                      {genres.map((genre, j) => {
                        return (
                          <React.Fragment key={j}>
                            {item.genre_ids.map((genIds, k) => {
                              return (
                                <React.Fragment key={k}>
                                  {genIds === genre.id &&
                                    <span className='genre'>
                                      {genre.name}
                                    </span>
                                  }
                                </React.Fragment>
                              )
                            })}
                          </React.Fragment>
                        )
                      })}
                    </React.Fragment>
                  }
                </div>
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
};

export default MoviesDisplay;

MoviesDisplay.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
  genres: PropTypes.instanceOf(Array).isRequired,
  images: PropTypes.instanceOf(Object).isRequired
};