import PropTypes from 'prop-types'; // {{ edit_1 }}

function ProjectCard({ title, description }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

ProjectCard.propTypes = { // {{ edit_2 }}
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ProjectCard;
