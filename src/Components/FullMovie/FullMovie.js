import React, {Component} from 'react';
import PT, { arrayOf } from 'prop-types';

import './FullMovie.scss';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import { Redirect } from 'react-router-dom';

class FullMovie extends Component {

    createSimilarMovies = () => {
    const { getSimilarMovies, match } = this.props;
    const {movieId} = match.params;
    getSimilarMovies(movieId)

    }

    componentDidMount() {
        const { match, getFullMovie  } = this.props;
        const { movieId } = match.params;
        getFullMovie(movieId)
 
        console.log('[movieId]', movieId);
        this.createSimilarMovies()
    }

    render() {
        const { movies, match, similarMovies, fullMovie, getFullMovie } = this.props;
        const { movieId } = match.params;
        if (!movies) return <Redirect to="/" />;
        

        const {
            // id,
            backdrop_path,
            overview,
            poster_path,
            original_title,
            release_date
        } = fullMovie;

        const baseURL = "https://image.tmdb.org/t/p/w500";

        // console.log('[original_title]', original_title);

        return (
            <div className="full-movie"
                style={{ backgroundImage: `url(${baseURL}${backdrop_path})` }}
            >
                <div className="full-movie__info">

                    <h1 className="full-movie__title"> {original_title}</h1>
                    <h2 className="full-movie__release">{release_date}</h2>

                    <div className="full-movie__content">
                        <div className="full-movie__img-wrapper">
                            <img className="full-movie__img"
                                src={baseURL + poster_path}
                                alt={original_title}
                            />
                        </div>
                        <p className="full-movie__description"> {overview}</p>
                    </div>
                </div>
                <SimilarMovies movies={similarMovies} createSimilarMovies={this.createSimilarMovies} getFullMovie={() => getFullMovie(movieId)} />
            </div>
        );
    }
};

    FullMovie.propTypes = {
        movies: arrayOf(PT.shape({
            id: PT.number.isRequired,
            poster_path: PT.string,
            backdrop_path: PT.string,
            original_title: PT.string.isRequired,
            overview: PT.string.isRequired,
            release_date: PT.string.isRequired
        })),
        match: PT.object.isRequired,
        similarMovies: PT.array,
        getSimilarMovies: PT.func.isRequired
    };

export default FullMovie;
