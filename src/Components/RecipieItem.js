import React, { Component } from 'react';
import '../styles/index.css';
import { connect } from 'react-redux';
import { favRecipie } from '../actions'

class RecipieItem extends Component {
    constructor() {
        super();
        this.state = {
            fav: false
        }
    }
    favorite(recipie) {
        this.props.favRecipie(recipie);
        this.setState({
            fav: true
        })
    }
    render() {
        let { recipies } = this.props;
        return (
            <div className='container recipie-item'>
                {
                    this.props.favButton ?
                        this.state.fav ?
                            <div className='fav'>&#9733;</div>
                            :
                            <div className='fav' onClick={() => this.favorite(recipies)}>
                                &#9734;
                            </div>
                        :
                        <div></div>
                }

                <div className='recipie-text'>
                    <h4>{recipies.name}</h4>
                    <p>{recipies.description}</p>
                </div>
                <img className='recipie-img' src={recipies.image_url} alt={recipies.tagline} />

            </div>
        )
    }
}
export default connect(null, { favRecipie })(RecipieItem);