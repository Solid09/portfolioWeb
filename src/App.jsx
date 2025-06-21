import Header from "./components/header/header.jsx";
import Home from "./components/mainPage/home.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/projectPage/projectPage.jsx";
import projectImg from "./assets/project1.jpeg";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/project"
            element={
              <ProjectPage
                title="Amazon Clone"
                img={projectImg}
                imageAlt="Amazon Clone Project"
                description="It is an Amazon-like full-stack e-commerce web application using the MERN stack. 
                            The React technology is used to build the frontend with a responsive and sleek user 
                            interface for product browsing and store navigation. Routing is done through React Router 
                            and state management via React hooks and functional components.
                            The backend is developed with Node.js and Express, linked to a MongoDB database. 
                            It supports secure user authentication through JSON Web Tokens (JWT), password hashing, 
                            and route-protecting middleware. The backend provides RESTful APIs for user registration, 
                            login, product data handling, and session management. The project has a clean and modular 
                            design, where concerns are segregated across routes, controllers, and models, and is thus 
                            scalable and maintainable."
                tools={[
                  "React",
                  "JavaScript",
                  "CSS",
                  "HTML",
                  "Node.js",
                  "Express",
                  "MongoDB",
                ]}
                liveLink="https://amazonclone99999.netlify.app/"
                frontendGithubLink="https://github.com/minhalraza-09/AmazonClone-Frontend"
                backendGithubLink="https://github.com/minhalraza-09/AmazonClone-Backend"
              />
            }
          />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  width: "100vw",
                  color: "#f0f0f0",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1>404 Not Found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
