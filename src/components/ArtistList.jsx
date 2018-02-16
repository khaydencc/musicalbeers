import React from "react";
import Configs from "core/config";
import ArtistComponent from "components/ArtistComponent";


export default class ArtistList extends React.Component {

    constructor (props) {
        super(props);

        console.log("[ArtistList] props = %o", props);
    }

    render() {

        return <div className="component-artistlist">
            {this.props.artists.map((artist, index, arr) =>
                <ArtistComponent
                    {...artist}
                    key={index}/>
            )}
        </div>
    }
}
