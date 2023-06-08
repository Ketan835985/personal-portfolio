import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import Js from '../assets/logo/js.png'
import JA from '../assets/logo/java.png'
import Html from '../assets/logo/html.png'
import css from '../assets/logo/css1.png'
import express from '../assets/logo/express.png'
import nodejs from '../assets/logo/node.png'
import redis2 from '../assets/logo/redis.png'
import git from  '../assets/logo/git.png'
import github from  '../assets/logo/github.png'
import mongo from  '../assets/logo/mongo.png'
import bootstrap from  '../assets/logo/bootstrap.png'



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Html} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Js} alt="" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="" />
                                <h5>NODE.JS</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="" />
                                <h5>EXPRESS.JS</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="" />
                                <h5>MONGO-DB</h5>
                            </div>
                            <div className="item">
                                <img src={redis2} alt="" />
                                <h5>REDIS</h5>
                            </div>
                            <div className="item">
                                <img src={JA} alt="" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="" />
                                <h5>GIT</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="" />
                                <h5>GITHUB</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
