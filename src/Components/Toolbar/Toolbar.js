import React from 'react';

import './Toolbar.scss';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import PT from 'prop-types';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

const Toolbar = ({
    search,
    onChange,
    searchMovies,
    isSearching,
}) => (
        <div className="toolbar">
            <Input
                name="search"
                placeholder="Search"
                value={search}
                onChange={onChange}
            />
            <Navigation />
            <Link
                to={`/`}
            >
                <Button
                    onClick={searchMovies}
                    isDisabled={isSearching}
                >
                    {isSearching ? 'Searching...' : 'Search'}
                </Button>
            </Link>

        </div>
    )
Toolbar.propTypes = {
    search: PT.string.isRequired,
    onChange: PT.func.isRequired,
    searchMovies: PT.func.isRequired,
    isSearching: PT.bool.isRequired
};

export default Toolbar;
