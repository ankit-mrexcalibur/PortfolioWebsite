import "./about.css"
import tech from "../../img/techSkills.png"

const About= ()=> {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={tech} alt="" className="a-img"></img>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                Front End Web Developer with extensive knowledge of current
technology trends who creates clean website designs. Experience
with complex HTML, CSS, JS & React coding, design, and
extensions to meet the needs of the organization's front-facing
internet.
                </p>
                <br/>
                <p className="a-desc">
                    <div className="a-skill">
                        <h2>Skill-Set:</h2>
                        <ul className="skills">
                            <li><b>C/C++</b></li>
                            <li><b>Python</b></li>
                            <li><b>Java</b></li>
                            <li><b>JavaScript</b></li>
                            <li><b>HTML</b></li>
                            <li><b>CSS</b></li>
                            <li><b>ReactJS</b></li>                            <li><b>C/C++</b></li>
                            <li><b>ReduxJS</b></li>
                        </ul>
                    </div>
                    <div className="a-exp">
                        <h2>Experience:</h2>
                        <br/>
                        <ul>
                            <li>
                                <b>KRaCR Lab IIIT Delhi (Jan.'22-Present)</b>
                                <p>
                                    Front End Developer
                                    <br/>
                                    Working on developing front end for an avatar based chatbot.
                                </p>
                            </li>
                            <li>
                                <b>Anomy (Oct.'21-Jan.'22)</b>
                                <p>
                                    React Developer
                                    <br/>
                                    Developed front end for an anonymous chat application for College Freshers using Socket.io.
                                </p>
                            </li>
                        </ul>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default About;