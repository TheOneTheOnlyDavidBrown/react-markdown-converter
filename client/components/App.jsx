import React from 'react';
import Converter from './Converter.jsx';

export default class App extends React.Component {
    onSuccess(data = {}){
        console.log(data)
    }
    render() {
        return (
            <div>
                <Converter onSuccess={this.onSuccess} flavor="github"/>
            </div>
        );
    }
}
