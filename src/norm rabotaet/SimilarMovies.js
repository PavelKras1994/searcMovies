import React from 'react';
import './SimilarMovies.scss'
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import Tooltip from '../UI/Tooltip/Tooltip';

const SimilarMovies = ({ movies }) => {
    const baseURL = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="similar-movies">
            {movies.map(({ id, poster_path, original_title }) => (
                <Link to={`/movies/${id}`}
                key={id}>
                    <Tooltip
                        id={`tooltip-${id}`}
                        content={original_title}
                        className="tooltip"
                        place={"left"}
                    >
                        <div className="similar-movies__movie" key={id}>
                            <img 
                                className="similar-movies__img"
                                src={baseURL + poster_path}
                                alt={original_title}
                            />
                        </div>
                    </Tooltip>
                </Link>
            ))}
        </div>
    )
}

SimilarMovies.propTypes = {
    movies: PT.arrayOf(PT.shape({
        id: PT.number.isRequired,
        imageSrc: PT.string,
        title: PT.string.isRequired
    })).isRequired
};

export default SimilarMovies;