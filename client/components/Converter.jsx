import React from 'react';
import showdown from 'showdown';
import mockData from '../data/mockData.json'; // mock response
const converter = new showdown.Converter();

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.onTextChange = this.onTextChange.bind(this); // binding to 'this' here rather so it works everywhere in the component rather than on the call for it
    }
    // using a getter here so this.styles.someStyles can be referenced instead of this.styles().someStyle
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
    onTextChange(e) {
        const text = e.target.value;
        const html = converter.makeHtml(text);
        this.setState({ text, html })
        this.props.onSuccess({message:'Success from child', html}); // just here to show data being passed back up
    }

    // React component lifecycle hooks

    componentDidMount() {
        // make api call here to load data
        // mock success():
        const text = mockData.text;
        const html = converter.makeHtml(text);
        this.setState({ text, html });
    }
    render() {
        if (this.props && this.props.flavor) converter.setFlavor(this.props.flavor);
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
