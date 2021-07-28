import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipieItem from './RecipieItem';
import { Link } from 'react-router-dom';

class FavoriteRecipieList extends Component {
    render() {
        return (
            <div>
                <h3 className='link'><Link to='/'>Home</Link></h3>
                <h4 className='pd-5'>Favorite Recipe Items</h4>
                {
                    this.props.favoriteRecipie.map((recipe, index) => {
                        return (
                            <RecipieItem
                                key={index}
                                recipies={recipe}
                                favButton={false}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favoriteRecipie: state.favoriteRecipie
    }
}
export default connect(mapStateToProps, null)(FavoriteRecipieList);