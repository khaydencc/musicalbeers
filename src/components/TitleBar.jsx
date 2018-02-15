import React from 'react';
import Avatar from "components/Avatar";

let title = "hello world";
let alt_text = "alt text";

class TitleBar extends React.Component {

    static defaultProps = {
        title: title,
        alt: alt_text
    }

    constructor (props) {
        super(props);
    }

    render() {
        return <header>
            <figure className="component-title-bar">
                <div className="image-container">
                    <img src={this.props.image} alt={this.props.alt} />
                </div>
                <figcaption>
                    <h1>{this.props.title}</h1>
                </figcaption>
            </figure>
        </header>

    }

}

export default TitleBar;
