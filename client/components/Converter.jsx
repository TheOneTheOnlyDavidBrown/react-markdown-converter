import React from 'react';
import showdown from 'showdown';
const converter = new showdown.Converter();

class Converter extends React.Component {
    constructor() {
        super();
        this.state = this.initialState();
        this.onTextChange = this.onTextChange.bind(this);
    }
    initialState() {
        const text = ''+
            '#Simple markdown converter in ReactJS!\n'+
            'by [David Brown](http://davidcbrown.io)\n\n'+
            'TODO:\n'+
            '* Allow login/registration\n'+
            '* Add routes\n'+
            '* Implement save action (database, Google drive, Dropbox, Gist, et al.)\n'
        const html= converter.makeHtml(text);
        return { text, html };
    }
    onTextChange(e) {
        const text = e.target.value;
        const html = converter.makeHtml(text);
        this.setState({ text, html })
    }
    get styles() {
        const textArea = {
            marginTop: '10px',
            height: '99vh',
            width: '100%'
        };
        const output = {
            boxShadow: '1px 1px 5px #888888',
            height: '99vh',
            marginTop: '10px',
            padding: '20px'
        };
        return { textArea, output }
    }
    render() {
        return (
            <form>
                <div className="col-xs-6 from-group">
                    <textarea
                        onChange={this.onTextChange}
                        value={this.state.text}
                        style={this.styles.textArea} className="form-control">
                    </textarea>
                </div>
                <div className="col-xs-6">
                    <div style={this.styles.output} dangerouslySetInnerHTML={{__html: this.state.html}}></div>
                </div>
            </form>
        );
    }
}
export default Converter;
