import React from 'react';
import PT from 'prop-types';

import './Movies.scss';
import Movie from './Movie/Movie';

const Movies = ({ movies }) => {
    if (!movies) return null;
    return (
        <div className="movies">
            {movies.map(
                movie => 
                (<Movie
                movie = {movie}
                key = {movie.id}     
                />)
            )}
        </div>
    ); 
};

Movies.propTypes = {
    movies: PT.arrayOf(PT.shape(
        {
            id: PT.number.isRequired,
            poster_path: PT.string,
            original_title: PT.string.isRequired,
            release_date: PT.string.isRequired
        })
    )
};

export default Movies;
