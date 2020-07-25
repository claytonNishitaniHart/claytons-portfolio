import React from "react";
import "./ProjectCard.scss";

class ProjectCard extends React.Component{
    render() {
        const demoLink = this.props.projectDemoLink ? <button className={"info-button"} onClick={() => {window.open(this.props.projectDemoLink, "_blank")}}>Demo</button> : null
        const codeLink = this.props.projectCodeLink ? <button className={"info-button"} onClick={() => {window.open(this.props.projectCodeLink, "_blank")}}>Code</button> : null
        
        return(
            <div className={"Card-base"} id={this.props.bgGrad} >
                <img className={"Card-background"} src={this.props.projectBackground} alt={""}/>
                <img className={"Card-image"} src={this.props.projectImage} alt={""}/>
                <div id={"info"+ this.props.projectName} className={"Card-info"}>
                    <span className={"info-name"}>{this.props.projectName}</span>
                    <span className={"info-description"}>{this.props.projectDescription}</span>
                    <div className={"info-button-container"}>
                        {demoLink}
                        {codeLink}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;