import React from "react";
import classes from "./home.module.css";
import { Fade } from "react-awesome-reveal";
export default function Advisor() {
  return (
    <div>
      <div className={classes["tab-content"]}>
        <div className={classes["tab-pane"]}>
          <div className={classes["container"]}>
            <div className={classes["blue-shape"]} />
            {/* <h1 className={classes['head']}>Meet the Advisor</h1> */}
            <div className={classes["home-main"]}>
              <div className={classes["dp-img"]} />
              <div className={classes["descp-div"]}>
                <div className={classes["descp-part"]}>
                  <div className={classes["small-dp"]} />
                  <h1 className={classes["main-heading"]}>
                    {/* &#8722; */}
                    Meet the <br />
                    <span className={classes["advisor"]}>Softdesk Advisor</span>
                  </h1>
                  <Fade direction="up" triggerOnce>
                    <p className={classes["para"]}>
                      SoftDesk is more than just a community of tech-savvy
                      students; it is a hub of innovation, creativity, and
                      passion for learning.
                      <br />
                      As your advisor, I am here to help you turn your ideas
                      into reality, explore new horizons, and unleash your full
                      potential. Whether you want to host an event, conduct a
                      workshop, or just hone your technical skills, SoftDesk
                      offers endless opportunities for growth and development.
                      <br />
                      Remember that success is not just about what you know, but
                      also about whom you know. SoftDesk is a place to connect
                      with like-minded peers, industry experts, and mentors who
                      can help you along the way.
                      <br />
                      So keep dreaming big, taking risks, and pushing the limits
                      of what&apos;s possible. I am proud to be a part of the
                      SoftDesk community, and I can&apos;t wait to see all the
                      amazing things you will achieve.
                    </p>
                    {/* I am a software engineering student with a focus on front-end web development. I have a strong understanding of HTML, CSS, JavaScript, MaterialUI and React.js and have been working on several projects that showcase my skills. I am always eager to take on new projects and challenges, and I am confident that my skills and experience make me an excellent fit for any front-end web development project. I hope you find my portfolio website informative and engaging, and I look forward to hearing from you about any potential projects you may have. */}
                    <div>
                      <h3 className={classes["name"]}>Dr Ali Javed</h3>
                      <h4 className={classes["info"]}>
                        Advisor, <br />
                        Softdesk, UET Taxila
                      </h4>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
