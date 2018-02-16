import React from "react";
import Configs from "core/config";
import JsonFetcher from "service/JsonFetcher";
import BeerComponent from "components/BeerComponent";

let Fetcher = new JsonFetcher(Configs);

export default class BeerList extends React.Component {

    static defaultProps = {
        beers: []
    };

    constructor (props) {
        super(props);

        this.data_path = `${Configs.base_static_path}${Configs.base_data_path}`;

        /*this.state = {
            beers: []
        };*/

        // this.fetchBeers();
    }

    /*fetchBeers() {
        const request = Fetcher.beerList();

        request.then((result) => {
            console.log("request SUCCESS! %o", result.data);

            this.setState({
                beers: result.data.beers
            });
        });
    }*/

    render() {

        return <div className="component-beerlist">
            {this.props.beers.map((beer, index, arr) =>
                <BeerComponent
                    {...beer}
                    key={index}/>
            )}
        </div>
    }
}