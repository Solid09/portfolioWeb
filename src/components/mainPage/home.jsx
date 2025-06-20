import "./home.css";
import ProjectCard from "./subcomponent/projectCard.jsx";
import projectImg from "../../assets/project1.jpeg";
import Divider from "./subcomponent/divider.jsx";
import { Link } from "react-router-dom";

function home() {
  return (
    <div className="home">
      <section id="about">
        <div className="about">
          <h1>ABOUT</h1>
          <p style={{ maxWidth: "700px" }}>
            I'm a full-stack MERN stack web developer. I specialize in
            developing strong, scalable web applications with clean backend
            structure and responsive frontend integration. Although I do not
            specialize in design, I ensure the functionality, structure, and
            responsiveness of my apps are up to real-world standards. I've
            developed projects such as a full-stack Amazon clone with JWT-based
            authentication, RESTful APIs, and MongoDB integration. I enjoy
            working on the complete development cycle — from setting up secure
            user authentication to building efficient APIs and integrating them
            with a responsive React front end. I’m always learning and
            improving, and I’m open to freelance work, internships, or
            collaborative projects that challenge me to grow further as a
            developer.
          </p>
          <h4>Skills</h4>
          <ul>
            <li>⚛️ React.js</li>
            <li>🍃 MongoDB</li>
            <li>🚂 Express.js</li>
            <li>🎨 HTML & CSS</li>
          </ul>
          <h4 style={{ marginBottom: ".5rem" }}>Website</h4>
          <p style={{ marginTop: "0" }}>This site was built by me.</p>
        </div>
      </section>
      <Divider margin="3rem 0 4rem" />
      <section id="project">
        <div>
          <h1 style={{ margin: "2rem 0 5rem" }}>PROJECTS</h1>
          <div className="projects">
            <ProjectCard
              img={projectImg}
              title="Amazon Clone"
              imageAlt="Amazon Clone Project"
            />
          </div>
        </div>
      </section>
      <Divider margin="5rem 0 1.5rem" />
      <section id="contact">
        <div className="contact">
          <h1>CONTACT</h1>
          <a href="mailto:syedminhal03@gmail.com">Email Me 🔗</a>
          <a
            href="https://www.linkedin.com/in/minhal-raza-1522bb2a2/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn 🔗
          </a>
          <a
            href="https://drive.google.com/file/d/14oztu5bGN7ot1HHo83CoolYn_qWjzkRZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: ".9rem",
              fontWeight: "bolder",
              margin: ".5rem 0",
            }}
          >
            VIEW RESUME
          </a>
        </div>
      </section>
    </div>
  );
}

export default home;
