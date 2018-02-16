import React from "react";
import Configs from "core/config";

let defaultImage = "default.png";

export default class BeerComponent extends React.Component {

    static defaultProps = {
        id: 0,
        name: "beer name",
        type: "beer type",
        subtype: "",
        image: defaultImage,
        rating: 0.1,
        brewery: "brewery name"
    };

    constructor (props) {
        super(props);

        this.image_path = `${Configs.base_static_path}${Configs.base_photos_path}/beers/${this.props.image}`;
        if (this.props.image.trim() == "") {
            this.image_path = `${Configs.base_static_path}${Configs.base_photos_path}/beers/${defaultImage}`;
        }
    }


    render() {

        console.log("[BeerComponent:render:] props = %o", this.props);

        return <figure className="component-beer">
            <div className="thumb-container">
                <img src={this.image_path} />
            </div>
            <figcaption>
                <ul className="beer-info">
                    <li className="beer-name">{this.props.name}</li>
                    <li className="beer-brewery">by {this.props.brewery}</li>
                    <li className="beer-type">{this.props.type}</li>
                    <li className="beer-abv">ABV: {this.props.abv}%</li>
                    <li className="beer-rating">Ba: {this.props.rating}</li>
                </ul>
            </figcaption>
        </figure>
    }
}
