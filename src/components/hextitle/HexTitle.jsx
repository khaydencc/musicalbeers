import React from 'react';
import HexWord from "components/hextitle/HexWord"

let title = "hello world";

class HexTitle extends React.Component {

    static defaultProps = {
        title: title
    };

    constructor (props) {
        super(props);
    }

    render() {
        let words = this.props.title.split(" ");

        return <header className="hex-title">
            {words.map((word, index) =>
                <HexWord word={word} key={index}/>
            )}
        </header>

    }
}

export default HexTitle;
