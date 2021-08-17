import { Component } from 'react';

export const HigherOrderComponent = (ComponentReceved) => {
    return class extends Component {
        constructor(props) {
            super(props);
        }
 
        render() {
            return <ComponentReceved name="From higher order component" />
        }
    }
}