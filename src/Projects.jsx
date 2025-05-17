import weathericon from './assets/weather-icon.png';

function Projects() {
    return (
        <div className="card">
            <img className="card-image" src={weathericon} alt="project image"></img>
            <h2 className="card-title" >Project 1</h2>
            <p className="card-text" >This is my first project</p>
            <button className="card-button">View project</button>
        </div>
    );
}

export default Projects;