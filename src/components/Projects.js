import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1_index.png";
import projImg2 from "../assets/img/project1_shop.png";
import projImg3 from "../assets/img/project1_register.png";
import projImg4 from "../assets/img/project2_index.png";
import projImg5 from "../assets/img/project2_shop.png";
import projImg6 from "../assets/img/project2_dashboard.png";
import projImg7 from "../assets/img/project3_web.png";
import projImg8 from "../assets/img/project3_database.png";
import projImg9 from "../assets/img/project3_circuit.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {

      description: "Index Page",
      imgUrl: projImg1,
    },
    {
      description: "Catalog Page",
      imgUrl: projImg2,
    },
    {
      description: "Register Page",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      description: "Index Page",
      imgUrl: projImg4,
    },
    {
      description: "Marketplace Page",
      imgUrl: projImg5,
    },
    {
      description: "Dashboard Page",
      imgUrl: projImg6,
    },
  ];
  const projects3 = [
    {
      description: "Website",
      imgUrl: projImg7,
    },
    {
      description: "Circuit",
      imgUrl: projImg9,
    },
    {
      description: "Database",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>

              <h2>My Projects</h2><br/>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">C-Auto</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">ProjectStar NFT</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Light Detecting</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projects2.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projects3.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>

            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
