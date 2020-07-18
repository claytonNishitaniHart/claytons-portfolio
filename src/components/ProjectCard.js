import React from "react";
import "./ProjectCard.scss";

class ProjectCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            hovering: true
        }
        this.cardHover = this.cardHover.bind(this);
    }

    cardHover() {
    
    }

    render() {
        return(
            <div className={"Card-base"} onMouseEnter={() => this.cardHover()} onMouseLeave={() => this.cardHover()}>
                <img className={"Card-background"} src={this.props.projectBackground} alt={""}/>
                <img className={"Card-image"} src={this.props.projectImage} alt={""}/>
                <div id={"info"+ this.props.projectName} className={"Card-info"}>
                    <span className={"info-name"}>{this.props.projectName}</span>
                    <span className={"info-description"}>{this.props.projectDescription}</span>
                    <div className={"info-button-container"}>
                        <a className={"info-button"} href={this.props.projectLink} target={"_blank"} rel={"noopener noreferrer"}>Link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;