import React from "react"
import "./style.css"
import Row from "../../components/Row"
import Col from "../../components/Col"

export default function About() {

    return (
        <div className="grey">
            <Row className="grey">
                <Col classes="s12 m12 l7 push-l5 center-align valign-wrapper body">
                    <div className="grey">
                        <h4 className="center-align about-me">About Me</h4>
                        <h6 className="center-align paragraph"> I was born in Chicago -- the greatest city in the world, change my mind -- the oldest of three brothers (my mom had her hands full). From the picture on the right,
                        you might at first guess that I am the large brother on the left. That is, in fact, my younger brother, Dominic. While I have two years on him,
                        he has five more inches on me, and one less chip on his shoulder.</h6>

                        <h6 className="center-align paragraph">
                            I spend my first 18 years in Chicago, and then headed to California in 2017 to attend UC Berkeley. In high school, I always loved science and math, so I chose to study chemistry in my undergrad
                            while taking cool math classes and working as a math tutor for Berkeley. However, in my third year, I took up coding, and decided that I wanted to switch paths. My intensive math background gave me a strong
                            foundation to quickly pick up skills from taking coding classes at Berkeley. In the summer of 2020, I enrolled in the Berkeley full-stack web development bootcamp to supplement the classes taken at Berkeley.
                    </h6>
                        <h6 className="center-align paragraph">
                            My favorite part of coding is the ominpresent mixture of creativity and strict quantitative reasoning which it entails. In the current field of science, that mixture is not as common as one might think,
                            and its presence in coding is what drove me to make the decision to change directions.

                    </h6>
                    </div>


                </Col>
                <Col classes="s12 m12 l5 pull-l7">
                    <Row className="imgs">
                        <Col classes="s6 m6 l12">
                            <div className="center-align">
                                <img id="img1" className="about-img" src={require("../../assets/photo1.png")} />
                            </div>
                        </Col>
                        <Col classes="s6 m6 l12">
                            <div className="center-align">
                                <img id="img2" className="about-img" src={require("../../assets/photo2.jpeg")} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )

}