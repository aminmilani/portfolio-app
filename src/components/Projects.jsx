import ProjectCard from './ProjectCard';

function Projects() {
    const projects = [
        {
            title: 'Project 1: Portfolio Website',
            description: 'A personal portfolio website built with React and CSS. Showcases my skills and projects.',
        },
        {
            title: 'Project 2: E-commerce Platform',
            description: 'An online store application with features like product listings, shopping cart, and user authentication.',
        },
        {
            title: 'Project 3: Blogging Platform',
            description: 'A full-stack blogging platform where users can create, edit, and share their posts.',
        },
        {
            title: 'Project 4: Weather App',
            description: 'A weather forecasting application that provides real-time weather updates using a public API.',
        },
        {
            title: 'test',
            description: 'test',
        },
    ];

    return (
        <section id="projects">
            <h2>
            <img src="./public/cube-icon2.png" alt="cubeImage" id="cubeIcon"></img>
                My Projects
                </h2>
            {projects.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} />
            ))}
        </section>
    );
}

export default Projects;
