import React from "react";
import Configs from "core/config";
// import JsonFetcher from "service/JsonFetcher";
// import classnames from "classnames";
import BeerComponent from "components/BeerComponent";

// let Fetcher = new JsonFetcher(Configs);

export default class BeerList extends React.Component {

    static defaultProps = {
        beers: []
    };

    constructor (props) {
        super(props);

        this.data_path = `${Configs.base_static_path}${Configs.base_data_path}`;

        this.getArtists = this.getArtists.bind(this);
    }

    getArtists(type) {
        console.log("[BeerList:getArtists:] type = %o", type);
        this.props.getArtists(type);
    }

    render() {

        let showHide = (this.props.show) ? "" : "hidden";

        let ele_class = `component-beerlist ${showHide}`;

        console.log("[BeerList:render:] showHide = %o", showHide);

        return <div className={ele_class}>
            {this.props.beers.map((beer, index, arr) =>
                <BeerComponent
                    {...beer}
                    getArtists={this.getArtists}
                    key={index}/>
            )}
        </div>
    }
}