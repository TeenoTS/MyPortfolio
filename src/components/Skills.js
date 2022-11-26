import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/sky.png"
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
  const C = 85;
  const Arduino = 80;
  const Python = 70;
  const Java = 50;
  const HTML = 65;
  const React = 40;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
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
                    <div className="skill-bx wow zoomIn" >
                        <h2>My Skills</h2><br/>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C / C++</h5>
                            </div> */}
                            <div className="item" >
                              <CircularProgressbar value={C} text={`${C}%`} />
                              <br/><br/>
                              <h5>C / C++</h5>
                            </div>
                            <div className="item">
                              <CircularProgressbar value={Arduino} text={`${Arduino}%`} />
                              <br/><br/>
                              <h5>Arduino</h5>
                            </div>
                            <div className="item">
                              <CircularProgressbar value={Python} text={`${Python}%`} />
                              <br/><br/>
                              <h5>Python</h5>
                            </div>
                            <div className="item">
                              <CircularProgressbar value={Java} text={`${Java}%`} />
                              <br/><br/>
                              <h5>Java</h5>
                            </div>
                            <div className="item">
                              <CircularProgressbar value={HTML} text={`${HTML}%`} />
                              <br/><br/>
                              <h5>HTML / PHP</h5>
                            </div>
                            <div className="item">
                              <CircularProgressbar value={React} text={`${React}%`} />
                              <br/><br/>
                              <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
