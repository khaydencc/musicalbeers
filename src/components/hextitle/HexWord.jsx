import React from 'react';
import HexLetter from "components/hextitle/HexLetter";

class HexWord extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        let letters = this.props.word.split("");

        return <ul className="hex-word">
            {letters.map((letter, index) =>
                <HexLetter letter={letter} key={index}/>
            )}
        </ul>
    }

}

export default HexWord;

