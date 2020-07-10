import React from "react";
import "./LandingPage.css";
import ProjectCard from "./ProjectCard";
import Logo from "./../fadsf.png";
import TomNook from "./../images/tom_nook.png";
import NooksCranny from "./../images/nooks_cranny.jpg";
import DwightSchrute from "./../images/dwight_schrute.png";
import TheOffice from "./../images/the_office.jpg";
import Controller from "./../images/eiro.png";
import Eiro from "./../images/eiro_bg.png";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightMode: true
        };

        this.toggleLightDarkMode = this.toggleLightDarkMode.bind(this);
        this.gotoPosition = this.gotoPosition.bind(this);
    }
    componentDidMount() {
        document.body.classList.add("light");
    }

    toggleLightDarkMode() {
        if (this.state.lightMode) {
            document.documentElement.style.setProperty('--togglePos', '2rem');
            document.body.classList.replace("light", "dark");
            this.setState({lightMode: false});
        } else {
            document.documentElement.style.setProperty('--togglePos', '0');
            document.body.classList.replace("dark", "light");
            this.setState({lightMode: true});
        }
    }

    gotoPosition() {
        let element = document.querySelector("#Projects");
        element.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div>
                <div className={"LandingPage-Heading"}>
                    <img className={"LandingPage-Logo"} src={Logo} alt={"logo"} />
                    <h2 className={"LandingPage-Text"}><span role={"img"} aria-label={"cool"}>😎</span>CLAYTON NISHITANI-HART<span role={"img"} aria-label={"cool"}>😎</span></h2>
                    <button className={"LandingPage-Button"} onClick={this.gotoPosition}>PROJECTS</button>
                    <button className={"LandingPage-Toggle"} onClick={this.toggleLightDarkMode}>
                        <span className={"sun"} role={"img"} aria-label={"sun"}>☀️</span>
                        <span className={"moon"} role={"img"} aria-label={"moon"}>🌑</span>
                    </button>
                </div>
                <div className={"LandingPage-Content"}>
                    <h2 id={"Projects"}>Projects</h2>
                    <div className={"LandingPage-Projects"}>
                        <ProjectCard projectName={"Nook's Cranny ecommerce shop"} projectDescription={"An ecommerce website based on Nook's Cranny."} projectImage={TomNook} projectBackground={NooksCranny} projectLink={"https://nooks-cranny.vercel.app/"} projectButtonName={"Link"} needBorder={false}/>
                        <ProjectCard projectName={"Dwight Schrute Markov Twitter bot"} projectDescription={"A twitter bot that responds to mentions that contain the #dwigtschrudequote."} projectImage={DwightSchrute} projectBackground={TheOffice} projectLink={"https://github.com/claytonNishitaniHart/twitterbot"} projectButtonName={"Link"} needBorder={true}/>
                        <ProjectCard projectName={"Eiro"} projectDescription={"Eiro was my final year project that another programmer, three artists, and I worked on for a full year."} projectImage={Controller} projectBackground={Eiro} projectLink={"https://jack3311.itch.io/eiro"} projectButtonName={"Link"} needBorder={false}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;