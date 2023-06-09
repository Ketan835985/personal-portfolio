/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable-next-line */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import url from "../assets/logo/url Shortner.png";
import bloGiNg from "../assets/logo/blogging.png";
import eCom from "../assets/logo/e commerce.png";
import library from '../assets/logo/librar.jpeg'
import colorSharp2 from "../assets/img/color-sharp2.png";
import jai from '../assets/logo/jai.png'
import prop from '../assets/logo/prop.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "URL Shortener",
      description: "Design & Development",
      imgUrl: url,
    },
    {
      title: "Blog Website Backend",
      description: "Design & Development",
      imgUrl: bloGiNg,
    },
    {
      title: "Jai Kishan website",
      description: "Design & Development",
      imgUrl: jai,
    },
    {
      title: "College Library",
      description: "Design & Development",
      imgUrl: library,
    },
    {
      title: "Fashion Bazaar Product Management",
      description: "Design & Development",
      imgUrl: eCom,
    },
    {
      title: "PortFolio",
      description: "Design & Development",
      imgUrl: prop,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"This project was a challenge for me because I had to learn a new programming language, but I was able to overcome the challenge and successfully complete the project."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae bandit's, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
