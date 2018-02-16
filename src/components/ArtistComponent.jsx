import React from "react";
import Configs from "core/config";

export default class ArtistComponent extends React.Component {

    static defaultProps = {
        artistid: 0,
        name: "artist name",
        thumb: ""
    };

    constructor (props) {
        super(props);

        // this.image_path = `http://i.iheart.com/v3/catalog/artist/${this.props.artistid}`;
        // this.url = `https://www.iheart.com/artist/-${this.props.artistid}`;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(_event) {
        _event.preventDefault();

        let url = `https://www.iheart.com/artist/-${this.props.artistid}`;

        window.open(
            url,
            "_iheart_window"
        );


    }

    render() {

        let image_path = `http://i.iheart.com/v3/catalog/artist/${this.props.artistid}`;
        if (this.props.artistid == 0 && this.props.thumb.length > 0) {
            image_path = `${Configs.base_static_path}${Configs.base_photos_path}/artists/${this.props.thumb}`;
        }

        return <figure className="component-artist">
            <div className="thumb-container">
                <a href="#" onClick={this.handleClick}>
                    <img src={image_path} />
                </a>
            </div>
            <figcaption>
                <h5>{this.props.name}</h5>
            </figcaption>
        </figure>
    }
};
