import { useNavigate } from "react-router-dom";

function project(props) {
  const navigate = useNavigate();
  const projectImgHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    navigate("/project");
  };

  return (
    <div className="projectCard">
      <img
        src={props.img}
        alt={props.imageAlt}
        loading="lazy"
        className="projectCard_img"
        onClick={projectImgHandler}
      />
      <div>
        <h4 style={{ margin: "1rem 0" }}>Amazon Clone</h4>
        <p style={{ margin: "0", lineHeight: "1.3rem" }}>
          A full-stack clone of Amazon website, built with the MERN stack,
          featuring JWT authentication and RESTful APIs.
        </p>
      </div>
    </div>
  );
}

export default project;
