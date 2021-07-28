import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipieItem from './RecipieItem';
import { Link } from 'react-router-dom';

class RecipieList extends Component {
    render() {
        return (
            <div className='pt-5'>
                {
                    this.props.favoriteRecipie.length > 0 ?
                        <h3 className='link'><Link to='/favorites'>Favorites</Link></h3>
                        :
                        <div></div>
                }

                {
                    this.props.recipies.map((recipie, index) => {
                        return (
                            <RecipieItem
                                key={index}
                                recipies={recipie}
                                favButton={true}
                            />
                        )
                    })

                }
            </div>
        )
    }
}
function mapStateToProp(state) {
    return state;
}
export default connect(mapStateToProp, null)(RecipieList);