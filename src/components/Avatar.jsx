import React from 'react';

let alt_text = "alt text";

class Avatar extends React.Component {

    static defaultProps = {
        alt: alt_text
    }

    constructor (props) {
        super(props);
    }

    render() {
        <figure>
            <img src={this.props.image} alt={this.props.alt} />
        </figure>
    }

}

export default Avatar;
