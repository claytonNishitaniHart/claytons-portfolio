import React from "react";
import "./LandingPage.css";
import ProjectCard from "./ProjectCard";
import Logo from "./../images/face.png";
import BobRoss from './../images/bobross.png';
import Claytinstagram from './../images/claytinstagram.png';
import Illustration from './../images/illustration.png';
import Flag from "./../images/flag.png";
import FlagsBG from "./../images/flags_bg.png";
import EasyBank from "./../images/easybank.png";
import TomNook from "./../images/tom_nook.png";
import NooksCranny from "./../images/nooks_cranny.jpg";
import DwightSchrute from "./../images/dwight_schrute.webp";
import TheOffice from "./../images/the_office.jpg";
import Controller from "./../images/eiro.png";
import Eiro from "./../images/eiro_bg.webp";
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
            element.style.bottom = "calc(1vh + 110px)";
            element.style.opacity = "1";
        } else {
            element.style.bottom = "1vh";
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
                    <h2 id={"Projects"} className={"Title"}>Projects</h2>
                    <div className={"LandingPage-Projects"}>
                        <ProjectCard projectName={"PAINT: painting gallery"} projectDescription={"A gallery where I upload my paintings following Bob Ross videos, using React.js, SASS, HTML."} projectImage={BobRoss} bgGrad={"bg4"} projectDemoLink={"https://claytons-paintings.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/claytons-paintings"}/>
                        <ProjectCard projectName={"Claytinstagram: Instagram Clone"} projectDescription={"Followed a tutorial, improved on it by implementing likes and comments, using Laravel."} projectImage={Claytinstagram} bgGrad={"bg3"} projectDemoLink={"http://claytinstagram.herokuapp.com/"} projectCodeLink={"https://github.com/claytonNishitaniHart/claytinstagram"}/>
                        <ProjectCard projectName={"Feature CSS Illustration"} projectDescription={"A feature illustration for a fictional Chat app, using React.js, SASS, HTML."} projectImage={Illustration} bgGrad={"bg1"} projectDemoLink={"https://css-illustration.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/css-illustration"}/>
                        <ProjectCard projectName={"Countries Web App"} projectDescription={"A web app where you can get information about countries, using React.js, SASS, HTML, REST API."} projectImage={Flag} projectBackground={FlagsBG} projectDemoLink={"https://rest-countries-api-swart.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/rest-countries-api"}/>
                        <ProjectCard projectName={"Easybank Landing Page"} projectDescription={"A landing page for a fictional bank for FrontendMentor.io, using React.js, SASS, HTML."} projectImage={EasyBank} bgGrad={"bg2"} projectDemoLink={"https://easybank-landing-page-xi-five.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/easybank-landing-page"}/>
                        <ProjectCard projectName={"Nook's Cranny ecommerce shop"} projectDescription={"An ecommerce website based on Nook's Cranny, using React.js, CSS, HTML, REST API."} projectImage={TomNook} projectBackground={NooksCranny} projectDemoLink={"https://nooks-cranny.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/nooks-cranny"}/>
                        <ProjectCard projectName={"Dwight Schrute Twitter bot"} projectDescription={"A twitter bot that responds to mentions, using Python, Twitter API."} projectImage={DwightSchrute} projectBackground={TheOffice} projectDemoLink={null} projectCodeLink={"https://github.com/claytonNishitaniHart/twitterbot"}/>
                        <ProjectCard projectName={"Eiro, (PC Game made with Unity)"} projectDescription={"Eiro was my final year project, it is a 3D adventure game, using C#, Unity3D."} projectImage={Controller} projectBackground={Eiro} projectDemoLink={"https://jack3311.itch.io/eiro"} projectCodeLink={null}/>
                        <ProjectCard projectName={"Weather Web App"} projectDescription={"A weather app that uses the user's location to get the weather, using React.js, CSS, REST API."} projectImage={Weather} projectBackground={Bliss} projectDemoLink={"https://weather-app-topaz-nine.vercel.app/"} projectCodeLink={"https://github.com/claytonNishitaniHart/weather-app"}/>
                    </div>
                    <h2 className={"Title"}>About Me</h2>
                    <p className={"About-Me"}>I am an enthusiastic and detail-oriented aspiring web developer, with a Bachelor of Software Engineering degree from Media Design School. I consider myself a self-motivated learner, who has a strong desire to grow as a developer. I'm passionate about software development and strongly interested in obtaining an entry-level position in the web development field.</p>
                    <div className={"socials-container"}>
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
                </div>
                <div className={"LandingPage-Footer"}>
                    contact me at: claytonnishitanihart@gmail.com
                </div>
            </div>
        );
    }
}

export default LandingPage;