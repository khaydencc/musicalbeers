import React from "react";
import Configs from "core/config";

export default class ArtistComponent extends React.Component {

    static defaultProps = {
        artistid: 0,
        name: "artist name"
    };

    constructor (props) {
        super(props);

        //http://i.iheart.com/v3/catalog/artist/30960173?ops=fit(200,0)
        this.image_path = `http://i.iheart.com/v3/catalog/artist/${this.props.artistid}`;
        //https://www.iheart.com/artist/french-montana-281545/
        this.url = `https://www.iheart.com/artist/-${this.props.artistid}`;

        this.handleClick = this.handleClick.bind(this);
    }

    closeArtists(_event) {
        _event.preventDefault();

    }

    handleClick(_event) {
        _event.preventDefault();

        window.open(
            this.url,
            "_iheart_window"
        );


    }

    render() {

        return <figure className="component-artist">
            <div className="thumb-container">
                <a href="#" onClick={this.handleClick}>
                    <img src={this.image_path} />
                </a>
            </div>
            <figcaption>
                <h5>{this.props.name}</h5>
            </figcaption>
        </figure>
    }
};
