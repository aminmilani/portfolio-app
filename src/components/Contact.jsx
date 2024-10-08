import GitHub from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

function Contact() {
    return (
        <section id="contact">
            <h2>
            <img src="./public/cube-icon2.png" alt="cubeImage" id="cubeIcon"></img>
                Contact Me
                </h2>
            <p>If you&apos;d like to get in touch, feel free to reach out via email:</p>
            <p>Email: jane.doe@example.com</p>
            <p className="linkedinContainer"> <img src={linkedin} id="linkedinIcon"/> <a href="https://www.linkedin.com/in/janedoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/janedoe</a></p>
            <p className="github-container"><img src={GitHub} id="gitIcon"/> <a href="https://github.com/janedoe" target="_blank" rel="noopener noreferrer">github.com/janedoe</a></p>
        </section>
    );
}

export default Contact;