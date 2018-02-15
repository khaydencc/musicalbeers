import React from "react";
import Configs from "core/config";
import JsonFetcher from "service/JsonFetcher";

let Fetcher = new JsonFetcher(Configs);

export default class PhotoAlbum extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            title: "",
            path: "",
            photos: []
        };

        // console.log("PhotoAlbum: Configs = %o", Configs);
        this.data_path = `${Configs.base_static_path}${Configs.base_data_path}`;
        this.photos_path = `${Configs.base_static_path}${Configs.base_photos_path}`;

        this.fetchAlbum();
    }

    fetchAlbum() {
        console.log("this.data_path = %o", this.data_path);
        const request = Fetcher.photoAlbum(this.props.album, this.data_path);

        request.then((result) => {
            console.log("request SUCCESS! %o", result);
            this.setState({
                title: result.data.title,
                path: result.data.path,
                photos: result.data.photos
            });
        }).catch((reason) => {
            console.log("request failed! %o", reason);
        });
    }


    render() {

        console.log("[PhotoAlbum:render] this.state.photos = %o", this.state.photos);

        return <div className="component-photo-album">
            {this.state.photos.map((photo, index, arr) =>
                <figure key={index}>
                    <img src={`${this.photos_path}${this.state.path}/${photo.filename}`}/>
                </figure>
            )}
        </div>
    }

}
