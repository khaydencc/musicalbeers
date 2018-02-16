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
    pairings: []
};

let Fetcher = new JsonFetcher(Configs);

class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = defaultState;

        this.dataLoaded = this.dataLoaded.bind(this);

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
        this.setState(data);
    }

    fetchBeers() {
        const request = Fetcher.beerList();

        request.then((result) => {
            console.log("request SUCCESS! %o", result.data);

            this.setState({
                beers: result.data.beers
            });
        });
    }

    render(){
        return(
            <div className="app-container">
                <BeerList beers={this.state.beers}/>
                <ArtistList/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
