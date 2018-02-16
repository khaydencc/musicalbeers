import React from "react";
import Configs from "core/config";
import ArtistComponent from "components/ArtistComponent";


export default class ArtistList extends React.Component {

    static defaultProps = {
        artists: [],
        show: false
    };

    constructor (props) {
        super(props);

        console.log("[ArtistList] props = %o", props);
    }

    render() {

        let showHide = (this.props.show) ? "" : "hidden";

        let ele_class = `component-artistlist ${showHide}`;

        return <div className={ele_class}>
            <div className="actions">
                <button onClick={this.props.close}>back</button>
            </div>

            {this.props.artists.map((artist, index, arr) =>

                <ArtistComponent
                    {...artist}
                    key={index}/>
            )}
        </div>
    }
}
