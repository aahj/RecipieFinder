import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button, FormLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipies } from '../actions/index';

class SearchFinder extends Component {
    constructor() {
        super();
        this.state = {
            brewed_after: '',
            beer_name: ''
        }
    }
    search() {
        let { brewed_after, beer_name } = this.state;
        const url = `https://api.punkapi.com/v2/beers?beer_name=${beer_name}&brewed_after=${brewed_after}`;
        fetch(url, {
            method: 'GET'
        }).then(res => res.json())
            .then(json => {
                this.props.setRecipies(json)
            })
    }
    render() {
        return (
            <div className='search-finder'>
                <Form>
                    <div className='d-flex justify-content-md-between'>
                        <FormGroup>
                            <FormLabel>Beer name : </FormLabel>
                            <FormControl
                                type='text'
                                placeholder='king'
                                onChange={e => this.setState({ beer_name: e.target.value })}
                            />
                        </FormGroup>
                        <FormGroup className='px-3'>
                            <FormLabel >Brewed After: </FormLabel>
                            <FormControl
                                type='text'
                                placeholder='11-2012'
                                onChange={e => this.setState({ brewed_after: e.target.value })}
                            />
                        </FormGroup>

                    </div>

                    <Button onClick={() => this.search()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, { setRecipies })(SearchFinder);