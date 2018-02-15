import React from 'react';


class ContentCard extends React.Component {

    static defaultProps = {
        image: null,
        alt: "",
        title: "no title here",
        description: "no description found"
    }

    constructor (props) {
        super(props);
    }

    render() {
        return(
            <figure className="component-content-card">
                {this.props.image != null &&
                <div className="image-container">
                    <img src={this.props.image} alt={this.props.alt}/>
                </div>
                }
                <figcaption>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                </figcaption>
            </figure>
        );
    }
}

export default ContentCard;
