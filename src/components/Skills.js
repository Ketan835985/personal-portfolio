import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"




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
                            <p>Building bridges between technology and user needs: Software Developer dedicated to delivering intuitive and engaging applications.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src='https://i.postimg.cc/HsSRMCnL/html.png' alt='html' />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src='https://i.postimg.cc/66ns2Sxs/css1.png' alt='css' />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src='https://i.postimg.cc/SKBTmSsn/js.png' alt='css' />
                                    <h5>JAVASCRIPT</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/dthyj8nK/node.png'} alt="" />
                                    <h5>NODE.JS</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/7LHPm4DT/express.png'} alt="" />
                                    <h5>EXPRESS.JS</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/ZR9WxmFx/mongo.png'} alt="" />
                                    <h5>MONGO-DB</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/tT0ZqTxn/redis.png'} alt="" />
                                    <h5>REDIS</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/8cS6H5kg/java.png'} alt="" />
                                    <h5>JAVA</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/W1Hj6k9x/git.png'} alt="" />
                                    <h5>GIT</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/MpPZP4GP/github.png'} alt="" />
                                    <h5>GITHUB</h5>
                                </div>
                                <div className="item">
                                    <img src={'https://i.postimg.cc/CK55w0tp/bootstrap.png'} alt="" />
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
