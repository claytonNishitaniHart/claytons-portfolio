import React from "react";
import "./LandingPage.css";
import ProjectCard from "./ProjectCard";
import Logo from "./../images/face.png";
import EasyBank from "./../images/easybank.png";
import EasyBankBG from "./../images/easybank_bg.png";
import TomNook from "./../images/tom_nook.png";
import NooksCranny from "./../images/nooks_cranny.jpg";
import DwightSchrute from "./../images/dwight_schrute.png";
import TheOffice from "./../images/the_office.jpg";
import Controller from "./../images/eiro.png";
import Eiro from "./../images/eiro_bg.png";
import Weather from "./../images/weather.png";
import Bliss from "./../images/bliss.png";
import Resume from "./../Resume.pdf";
import { FaGithubSquare, FaLinkedin, FaFileAlt } from "react-icons/fa";

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
            <div className={"LandingPage"}>
                <a className={"LandingPage-ResumeLink"} href={Resume} target={'_blank'} rel={"noopener noreferrer"}><FaFileAlt/>Resume</a>
                <div className={"LandingPage-Heading"}>
                    <img className={"LandingPage-Logo"} src={Logo} alt={"logo"} />
                    <h1 className={"LandingPage-Text"}>CLAYTON NISHITANI-HART</h1>
                    <button className={"LandingPage-Button"} onClick={this.gotoPosition}>PROJECTS</button>
                </div>
                <div className={"LandingPage-Toggle-Container"}>
                    <button className={"LandingPage-Toggle"} onClick={this.toggleLightDarkMode}>
                        <span className={"sun"} role={"img"} aria-label={"sun"}>☀️</span>
                        <span className={"moon"} role={"img"} aria-label={"moon"}>🌑</span>
                    </button>
                </div>
                <div className={"LandingPage-Content"}>
                    <h2 id={"Projects"}>Projects</h2>
                    <div className={"LandingPage-Projects"}>
                        <ProjectCard projectName={"Easybank Landing Page"} projectDescription={"A landing page for a fictional bank for FrontendMentor.io"} projectImage={EasyBank} projectBackground={EasyBankBG} projectDemoLink={"https://easybank-landing-page-xi-five.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/easybank-landing-page"}/>
                        <ProjectCard projectName={"Nook's Cranny ecommerce shop"} projectDescription={"An ecommerce website based on Nook's Cranny."} projectImage={TomNook} projectBackground={NooksCranny} projectDemoLink={"https://nooks-cranny.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/nooks-cranny"}/>
                        <ProjectCard projectName={"Dwight Schrute Twitter bot"} projectDescription={"A twitter bot that responds to mentions that contain the #dwigtschrudequote."} projectImage={DwightSchrute} projectBackground={TheOffice} projectDemoLink={null} projectCodeLink={"https://github.com/claytonNishitaniHart/twitterbot"}/>
                        <ProjectCard projectName={"Eiro"} projectDescription={"Eiro was my final year project that another programmer, three artists, and I worked on for a full year."} projectImage={Controller} projectBackground={Eiro} projectDemoLink={"https://jack3311.itch.io/eiro"} projectCodeLink={null}/>
                        <ProjectCard projectName={"Weather App"} projectDescription={"A weather app that uses the user's location to get the weather for each day in a week."} projectImage={Weather} projectBackground={Bliss} projectDemoLink={"https://weather-app-topaz-nine.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/weather-app"}/>
                    </div>
                    <div className={"socials"} onClick={this.toggleSocials}>
                        <div className={"socials-clickme"}>
                            Click me for socials
                        </div>
                        <img className={"socials-img"} src={Logo} alt={"socials"}/>
                    </div>
                    <div id={"socials-panel"} className={"socials-panel"}>
                        <a className={"socials-button github"} href={"https://github.com/claytonNishitaniHart"} target={"_blank"} rel={"noopener noreferrer"}>
                            <FaGithubSquare className={"button-icon"}/>
                        </a>
                        <a className={"socials-button linkedin"} href={"https://www.linkedin.com/in/clayton-nishitani-hart-845b93175/a"} target={"_blank"} rel={"noopener noreferrer"}>
                            <FaLinkedin className={"button-icon"}/>
                        </a>
                    </div>
                </div>
                <div className={"LandingPage-Footer"}>
                    contact me at: claytonnishitanihart@gmail.com
                </div>
            </div>
        );
    }
}

export default LandingPage;