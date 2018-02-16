import React from 'react';
import ReactDOM from 'react-dom';
import '../build/sass/styles.scss';
import User from "service/User";
import Configs from "core/config";
import JsonFetcher from "service/JsonFetcher";

// import LoginButton from "components/LoginButton";
import BeerList from "components/BeerList";
import ArtistList from "components/ArtistList";

const defaultState = {
    beers: [],
    artists: [],
    pairings: [],
    showBeers: true,
    showArtists: false,
    beertype: ""
};

let dataSet = {
    beers: [],
    artists: [],
    pairings: []
};

let Fetcher = new JsonFetcher(Configs);

class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = defaultState;

        this.dataLoaded = this.dataLoaded.bind(this);

        this.getArtists = this.getArtists.bind(this);

        this.closeArtists = this.closeArtists.bind(this);
    }

    componentWillMount() {
        console.log("[App:componentWillMount:]");
    }

    componentDidMount() {
        // get the json?
        console.log("[componentDidMount] outer this = %o", this);

        Fetcher.getAll((data) => {
            console.log("[componentDidMount] inner this = %o", this);
            console.log("[componentDidMount] data = %o", data);
            console.log("[componentDidMount] data.pairings['pale ale'] = %o", data.pairings['pale ale']);

            this.dataLoaded(data);
        });
    }

    dataLoaded(data) {
        dataSet = data;
        this.setState({
            beers: data.beers
        });
    }

    closeArtists() {
        this.setState({
            showBeers: true,
            artists: [],
            showArtists: false,
            beertype: ""
        });
    }

    getArtists(beerType) {
        console.log("[getArtists] beerType = %o", beerType);
        console.log("[getArtists] pairing = %o", dataSet.pairings[beerType]);

        let pairs = dataSet.pairings[beerType];

        let artists = dataSet.artists.map((artist) => {
            return pairs.includes(artist.artistid) ? artist : null;
        }).filter((thing) => {
            return thing === null ? false : thing;
        });

        this.setState({
            artists: artists,
            showBeers: false,
            showArtists: true,
            beertype: beerType
        });

        console.log("[getArtists] artists = %o", artists);
    }

    render(){

        let artistOverlay = (this.state.artists) ? <ArtistList
                                                        artists={this.state.artists}
                                                        show={this.state.showArtists}
                                                        beertype={this.state.beertype}
                                                        close={this.closeArtists}/> : null;

        return(
            <div className="app-container">
                <BeerList
                    beers={this.state.beers}
                    show={this.state.showBeers}
                    getArtists={this.getArtists}
                    />
                { artistOverlay }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
