import axios from 'axios';

class JsonFetcher {

    constructor(configs={}) {
        this.configs = configs;
        this.data_path = `${this.configs.base_static_path}${this.configs.base_data_path}`;
    }

    beerList() {
        let url = `${this.data_path}/beers.json`;

        console.log("beerlist url = %o", url);

        return axios({
            method: 'get',
            url: url,
            responseType: 'json'
        });
    }

    pairingList() {
        let url = `${this.data_path}/pairings.json`;

        console.log("pairings url = %o", url);

        return axios({
            method: 'get',
            url: url,
            responseType: 'json'
        });
    }

    artistList() {
        let url = `${this.data_path}/music.json`;

        console.log("music url = %o", url);

        return axios({
            method: 'get',
            url: url,
            responseType: 'json'
        });
    }



    photoAlbum(name, path="") {
        let url = `${path}/${name}.json`;
        console.log("[JsonFetcher:photoAlbum:] url = %o", url);
        // return axios.get(url);
        return axios({
            method: 'get',
            url: url,
            responseType: 'json'
        })
    }
}

// export let Fetcher = new JsonFetcher();

export default JsonFetcher;