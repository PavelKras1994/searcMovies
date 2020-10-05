import React from 'react';
import PT from 'prop-types';

import './Movie.scss';
import Tooltip from '../../UI/Tooltip/Tooltip';
import { Link } from 'react-router-dom';

const Movie = ({
    movie: {
        id,
        poster_path,
        original_title,
        release_date
    }
}) => {
    const baseURL = "https://image.tmdb.org/t/p/w500";

    const movieTitle = original_title.length > 30
        ? original_title.slice(0, 25) + '...'
        : original_title

    return (
        <div className="movie">
            {/* <h1 className ="movie__title">{movieTitle}</h1>  */}
            <h1 className="movie__title">
                <Tooltip
                    id={`tooltip-${id}`}
                    content={original_title}
                    className="tooltip"
                >
                    {movieTitle}
                </Tooltip>
            </h1>
            <h2 className="movie__release">{release_date}</h2>

            <div className="movie__img-wrapper">
                {poster_path &&
                    <img className="movie__img"
                        src={baseURL + poster_path}
                        alt={original_title}
                    />}

            </div>

            <Link
                to={`/movies/${id}`}
                className="movie__link">
                Read more
           </Link>

        </div>
    );
};

Movie.propTypes = {
    movie: PT.shape({
        id: PT.number.isRequired,
        poster_path: PT.string,
        original_title: PT.string.isRequired,
        release_date: PT.string.isRequired
    })
};

export default Movie;
