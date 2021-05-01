import React, { Component } from 'react'

export default class Product extends Component {
    constructor(props){
        super(props)

        this.state ={
            items: [], //Data we fetch from the api
            isLoaded: false, // Know when the item have been loaded from the api endpoint 
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
