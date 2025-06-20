import "./projectPage.css";
import { Link } from "react-router-dom";

function projectPage(props) {
  return (
    <div className="projectPage">
      <h1>{props.title}</h1>
      <img
        src={props.img}
        alt={props.imageAlt}
        loading="lazy"
        className="projectPage_img"
      />
      <h3 style={{ margin: "2rem 0 1rem" }}>Description</h3>
      <p style={{ marginTop: "0" }}>{props.description}</p>
      <h3 style={{ margin: "2rem 0 1rem" }}>Tools Used</h3>
      <ul style={{ marginTop: "0" }}>
        {props.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      <h3>
        <a href={props.liveLink} target="_blank" rel="noreferrer">
          Live Link 🔗
        </a>
      </h3>
      <h3>
        <a href={props.frontendGithubLink} target="_blank" rel="noreferrer">
          Frontend GitHub Repository 🔗
        </a>
      </h3>
      <h3>
        <a href={props.backendGithubLink} target="_blank" rel="noreferrer">
          Backend GitHub Repository 🔗
        </a>
      </h3>
    </div>
  );
}

export default projectPage;
