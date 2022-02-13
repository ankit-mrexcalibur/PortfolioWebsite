import Project from "../projects/Project";
import "./projectlist.css";
import {projects} from "../../data"


const ProjectList= ()=> {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Think, Innovate, Create & Inspire!! It's Kamat</h1>
                <p className="pl-desc">
                    Being a Team Leader, Supporter and Motivator, I have worked in numerous projects, with different teams which
                    helped me in becoming a good Team Collaborator too. These are some of my significant projects starting including
                    Course projects, Learning projects and some under-development projects. 
                </p>
            </div>
            <div className="pl-list">
                {projects.map((item)=>(
                    <Project key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectList;