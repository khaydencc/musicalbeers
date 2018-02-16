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
                <ul>
                    <li>{this.props.name}</li>
                    <li>by {this.props.brewery}</li>
                    <li>{this.props.type}</li>
                    <li>{this.props.rating}</li>
                </ul>
            </figcaption>
        </figure>
    }
}
