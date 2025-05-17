import weathericon from './assets/weather-icon.png';

function Projects() {
    return (
        <div className="projects">
            <img src={weathericon} alt="project image"></img>
            <h2>Project 1</h2>
            <p>This is my first project</p>
        </div>
    );
}

export default Projects;