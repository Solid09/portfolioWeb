import "./home.css";
import ProjectCard from "./subcomponent/projectCard.jsx";
import projectImg from "../../assets/project1.jpeg";
import Divider from "./subcomponent/divider.jsx";

function home() {
  return (
    <div className="home">
      <section id="about">
        <div className="about">
          <h1>Minhal Raza</h1>
          <p style={{ maxWidth: "700px" }}>
            I'm a MERN stack web developer. I specialize in developing web
            applications with responsive frontend and backend.
          </p>
          <h2>Skills</h2>
          <ul style={{ color: "White" }}>
            <strong className="about_skills">
              <li>⚛️ React.js</li>
              <li>🍃 MongoDB</li>
              <li>🚂 Express.js</li>
              <li>🎨 HTML & CSS</li>
              <li>💻 C++</li>
              <li>🎮 C# & Unity</li>
            </strong>
          </ul>
          <h3 style={{marginTop:"2.5rem"}}>About Me</h3>
          <p>
            I'm an undergraduate, currently enrolled in BSCS in University Of
            Karachi. I excel in web development using MERN stack.
          </p>
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
            href="https://github.com/minhalraza-09"
            target="_blank"
            rel="noreferrer"
          >
            Github 🔗
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
