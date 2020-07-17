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
        this.setState({hovering: !this.state.hovering});
        let card_info = document.getElementById("info"+ this.props.projectName);
        if (this.state.hovering) {
            card_info.style.bottom = "0";
        } else {
            card_info.style.bottom = "-110px";
        }
    }

    render() {
        return(
            <div className={"Card-base"} onMouseEnter={() => this.cardHover()} onMouseLeave={() => this.cardHover()}>
                <img className={"Card-background"} src={this.props.projectBackground} alt={""}/>
                <img className={"Card-image"} src={this.props.projectImage} alt={""}/>
                <div id={"info"+ this.props.projectName} className={"Card-info"}>
                    <span className={"info-name"}>{this.props.projectName}</span>
                    <span className={"info-description"}>{this.props.projectDescription}</span>
                    <a className={"info-button"} href={this.props.projectLink} target={"_blank"} rel={"noopener noreferrer"}>Link</a>
                </div>
            </div>
        );
    }
}

export default ProjectCard;