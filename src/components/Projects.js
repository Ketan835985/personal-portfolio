/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable-next-line */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "URL Shortener",
      description: "Design & Development",
      imgUrl: 'https://i.postimg.cc/3RNCPW2M/url-Shortner.png',
      url : 'https://github.com/Ketan835985/URL_SHORTNER.git'
    },
    {
      title: "Blog Website Backend",
      description: "Design & Development",
      imgUrl: 'https://i.postimg.cc/gJgtZfHp/blogging.png',
      url : 'https://github.com/Ketan835985/Blogging_Project.git'
    },
    {
      title: "Jai Kishan website",
      description: "Design & Development",
      imgUrl: 'https://i.postimg.cc/GhF7P8Qz/jai.png',
      url : 'https://github.com/Ketan835985/JaiKishan_mini_Project.git'
    },
    {
      title: "College Library",
      description: "Design & Development",
      imgUrl: 'https://i.postimg.cc/sx9YWSrh/librar.jpg',
      url : 'https://github.com/Ketan835985/Book-Management.git'
    },
    {
      title: "Fashion Bazaar Product Management",
      description: "Design & Development",
      imgUrl: 'https://i.postimg.cc/mrQ0tXnZ/e-commerce.png',
      url : 'https://github.com/Ketan835985/fashion-bazaar.git'
    },
    {
      title: "PortFolio",
      description: "Design & Development",
      imgUrl: 'https://i.postimg.cc/ncbB13Sf/prop.png',
      url : 'https://github.com/Ketan835985/personal-portfolio.git'
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
      <img className="background-image-right" src={'https://i.postimg.cc/6qgXd7fB/color-sharp2.png'}></img>
    </section>
  )
}
