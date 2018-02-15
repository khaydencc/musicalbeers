import React from 'react';


class HexLetter extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        return <li className="hex-letter">
            <div className="letter">{this.props.letter}</div>
        </li>
    }
}

export default HexLetter;

