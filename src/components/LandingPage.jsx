import React from "react";
import "./LandingPage.css";
import ProjectCard from "./ProjectCard";
import Logo from "./../images/face.png";
import TomNook from "./../images/tom_nook.png";
import NooksCranny from "./../images/nooks_cranny.jpg";
import DwightSchrute from "./../images/dwight_schrute.png";
import TheOffice from "./../images/the_office.jpg";
import Controller from "./../images/eiro.png";
import Eiro from "./../images/eiro_bg.png";
import Weather from "./../images/weather.png";
import Bliss from "./../images/bliss.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightMode: true,
            showingSocials: true
        };

        this.toggleLightDarkMode = this.toggleLightDarkMode.bind(this);
        this.gotoPosition = this.gotoPosition.bind(this);
        this.toggleSocials = this.toggleSocials.bind(this);
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

    toggleSocials() {
        let element = document.getElementById("socials-panel");
        this.setState({showingSocials: !this.state.showingSocials});
        console.log(this.state.showingSocials);
        if (this.state.showingSocials) {
            element.style.height = "200px";
            element.style.opacity = "1";
        } else {
            element.style.height = "0";
            element.style.opacity = "0";
        }
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
                        <ProjectCard projectName={"Nook's Cranny ecommerce shop"} projectDescription={"An ecommerce website based on Nook's Cranny."} projectImage={TomNook} projectBackground={NooksCranny} projectLink={"https://nooks-cranny.vercel.app/"} needBorder={false}/>
                        <ProjectCard projectName={"Dwight Schrute Markov Twitter bot"} projectDescription={"A twitter bot that responds to mentions that contain the #dwigtschrudequote."} projectImage={DwightSchrute} projectBackground={TheOffice} projectLink={"https://github.com/claytonNishitaniHart/twitterbot"} needBorder={true}/>
                        <ProjectCard projectName={"Eiro"} projectDescription={"Eiro was my final year project that another programmer, three artists, and I worked on for a full year."} projectImage={Controller} projectBackground={Eiro} projectLink={"https://jack3311.itch.io/eiro"} needBorder={false}/>
                        <ProjectCard projectName={"Weather App"} projectDescription={"A weather app that uses the user's location to get the weather for each day in a week."} projectImage={Weather} projectBackground={Bliss} projectLink={"https://weather-app-topaz-nine.vercel.app/"} needBorder={false}/>
                    </div>
                    <div className={"socials"} onClick={this.toggleSocials}>
                        <img className={"socials-img"} src={Logo} alt={"socials"}/>
                    </div>
                    <div id={"socials-panel"} className={"socials-panel"}>
                        <button className={"socials-button github"}>
                            <FaGithubSquare className={"button-icon"}/>
                        </button>
                        <button className={"socials-button linkedin"}>
                            <FaLinkedin className={"button-icon"}/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;