import React from "react";
import Configs from "core/config";


export default class ArtistList extends React.Component {

    constructor (props) {
        super(props);

        console.log("[ArtistList] props = %o", props);
    }

    render() {

        return <div className="component-artistlist">
            {this.props.artists.map((artist, index, arr) =>
                <p key={index}>{ artist.name }</p>
            )}
        </div>
    }
}
