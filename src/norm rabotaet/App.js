import React, { Component } from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import Movies from './Components/Movies/Movies';
import Footer from './Components/Footer/Footer';
import Axios from 'axios';
import './App.scss';
import { Route, Switch, Redirect} from 'react-router-dom';
import FullMovie from './Components/FullMovie/FullMovie';


const axios = Axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

const ErrorPage = () => {
    return (
        <h1> Error 404</h1>
    )
};

const apiKey = '565c585a7ed3373dbe0baaa49fa52022';

class App extends Component {
    state = {
        search: '',
        isSearching: false,
        movies: '',
        similarMovies: null
    }

    componentDidMount() {
        this.fetchMovies("harry")
    }

    onChangeInputHandler = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    fetchMovies = search => {
        this.setState({ isSearching: true })
        const apiKey = '565c585a7ed3373dbe0baaa49fa52022';
        axios.get(`/search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1`)
            .then(res => {
                const { results } = res.data;
                this.setState({
                    movies: results
                })
            })
            .catch(error => {
                console.log('[error]', error);
            })
            .finally(
                () => {
                    setTimeout(
                        () => {
                            this.setState({ isSearching: false })
                        }, 1000)
                }
            )
    }
    searchMoviesHandler = () => {
        const { search } = this.state
        this.fetchMovies(search)
    }

    getSimilarMovies = (movieId) => {
        this.setState({ isSearching: true })
        axios.get(`/movie/${movieId}/similar?api_key=${apiKey}&language=en-US&page=1`)
            .then(res => {
                console.log('[res.data]', res.data);
                const { results } = res.data;
                this.setState({
                    similarMovies: results.slice(0,3)
                })
            })
            .catch(error => {
                console.log('[error]', error);
            })
            .finally(
                this.setState({ isSearching: false }), 
                console.log(this.state.similarMovies)
            )
    }

    render() {
        const { movies, search, isSearching, similarMovies } = this.state
        return (
            <div className="app">
                <div className="app__wrapper">
                    <Toolbar
                        search={search}
                        isSearching={isSearching}
                        onChange={this.onChangeInputHandler}
                        searchMovies={this.searchMoviesHandler}
                    /> 

                    <Route path="/404" exact component={ErrorPage} />
                    <Switch>
                        <Route path="/movies/:movieId" render={( {match} ) => (
                            <FullMovie 
                                match={match}
                                movies={movies}
                                getSimilarMovies={this.getSimilarMovies}
                                similarMovies={similarMovies}
                            />
                            )} />
                        {/* <Route path="/favorite" render={(props) => (
                            <h1>Favorite</h1>
                            )} /> */}
                        <Route path="/" exact render={()=> (
                            <Movies
                            movies={movies}
                            />
                            )} />
                        {/* <Route path="/logout" exact render={
                            ()=> (
                                <h1>Logout</h1>
                            )
                        } /> */}
                        <Redirect to="/404"/>
                    </Switch>
                </div> 
                <Footer />
            </div>
        );
    }
};


export default App;

