import React, { Component } from 'react';
import SearchFinder from './SearchFinder';
import '../styles/index.css';
import RecipieList from './RecipieList';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Beer Receipes Finder</h2>
                <SearchFinder />
                <RecipieList />
                
            </div>
        )
    }
}
