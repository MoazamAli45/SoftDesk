import React from "react";

import styles from "./TechSpectrum.module.css";
import Image from "next/image";

const TechSpectrum = () => {
  return (
    <div className={styles.courses}>
      <h1 className={styles.heading}>Tech Spectrum</h1>
      <div className={styles.courseCards}>
        <div className={styles.courseBox}>
          <h2 className={styles.technology}>Full Stack Development</h2>
          <p className={styles.description}>
            Full stack development entails creating complete applications,
            covering front-end, back-end, and database integration. A proficient
            full stack developer possesses a diverse skill set in various
            programming languages and frameworks, enabling the creation of
            robust, responsive, and scalable applications. This role is
            essential for building modern, user-friendly, and dynamic digital
            solutions.
          </p>

          <div className={styles.tutorContent}>
            <div className={styles.buttonBox}>
              <a href="https://drive.google.com/file/d/1v_gLIoeXbw93gnpafAW2XfyEUQE9RQ34/view?usp=drive_link">
                <button className={styles.downloadButton}>
                  Download course content
                </button>
              </a>
            </div>
            <div className={styles.tutorName}>
              <h2>
                <span>By: </span>M.Ammar Mubashir
              </h2>
              <h2>
                <span>& </span>Syed Moazam Ali
              </h2>
              <h3>Senior Executive members</h3>
            </div>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className={styles.courseBox}>
          <h2 className={styles.technology}>Data Science</h2>
          <p className={styles.description}>
            Data science involves extracting insights from extensive datasets
            using statistical analysis, programming, and machine learning.
            Skilled data scientists utilize diverse tools to analyze complex
            data, uncover patterns, and make informed predictions. This
            discipline is crucial for developing intelligent, data-driven
            solutions that enhance decision-making processes through valuable
            knowledge extraction from diverse sources.
          </p>
          <div className={styles.tutorContent}>
            <div className={styles.buttonBox}>
              <a href="https://drive.google.com/file/d/1-I68r1ARTWmMzC4roOqS_E6BvuKfwNBU/view?usp=sharing">
                <button className={styles.downloadButton}>
                  Download course content
                </button>
              </a>
            </div>
            <div className={styles.tutorName}>
              <h2>
                <span>By: </span>Abdullah
              </h2>
              <h2>
                <span>& </span>Syed Ali Taqi
              </h2>
              <h3>Senior Executive members</h3>
            </div>
          </div>
        </div>
        <div className={styles.courseBox}>
          <h2 className={styles.technology}>Cyber Security</h2>
          <p className={styles.description}>
            Cybersecurity is the practice of safeguarding digital systems and
            data from unauthorized access and malicious attacks. Professionals
            in this field use a variety of tools and strategies to identify and
            counteract potential threats, aiming to maintain the
            confidentiality, integrity, and availability of information. Its a
            critical discipline in our technology-driven world, addressing a
            wide range of cyber threats and contributing to the overall security
            of digital infrastructures.
          </p>

          <div className={styles.tutorContent}>
            <div className={styles.buttonBox}>
              <a href="https://drive.google.com/drive/folders/1xPfLUP1NReV5z_QEVrO4uy4Ienw_9VY5?usp=sharing">
                <button className={styles.downloadButton}>
                  Download course content
                </button>
              </a>
            </div>
            <div className={styles.tutorName}>
              <h2>
                <span>By: </span>Abdur Raffay
              </h2>
              <h3>Senior Executive member</h3>
            </div>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className={styles.courseBox}>
          <h2 className={styles.technology}>Cloud</h2>
          <p className={styles.description}>
            Cloud computing transforms how data and applications are managed by
            providing on-demand access to computing services over the internet.
            Major providers like AWS and Azure offer scalable, flexible, and
            cost-effective solutions. This model eliminates the need for
            extensive physical infrastructure, and common service models include
            IaaS, PaaS, and SaaS. While cloud computing enhances collaboration
            and resource utilization, addressing security and privacy concerns
            is crucial for responsible use.
          </p>

          <div className={styles.tutorContent}>
            <div className={styles.buttonBox}>
              <a href="https://drive.google.com/drive/folders/1NUlWHKkD974-dXgyWw1XWd2MvXXD2sRv">
                <button className={styles.downloadButton}>
                  Download course content
                </button>
              </a>
            </div>
            <div className={styles.tutorName}>
              <h2>
                <span>By: </span>Hamza Sajjid
              </h2>
              <h3>Senior Executive member</h3>
            </div>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className={styles.courseBox}>
          <h2 className={styles.technology}>Mobile App Development</h2>
          <p className={styles.description}>
            Mobile app development involves creating applications for
            smartphones, using native languages like Java or Swift or
            cross-platform frameworks like React Native. The process includes
            planning, design, coding, testing, and deployment, with a strong
            emphasis on UX/UI design. Security considerations, continuous
            testing, and cloud service integration are vital. Developers must
            stay updated with evolving technologies, and ongoing maintenance is
            essential for the success of mobile applications in a competitive
            market.
          </p>

          <div className={styles.tutorContent}>
            <div className={styles.buttonBox}>
              <a href="https://docs.google.com/document/d/1xEl0sRX1A0ZNHL5n32Vnb17EjGPKOxw5D1EritTTWyc/edit?usp=sharing">
                <button className={styles.downloadButton}>
                  Download course content
                </button>
              </a>
            </div>
            <div className={styles.tutorName}>
              <h2>
                <span>By: </span>Faheem Abbass
              </h2>
              <h3>IT Head, Softdesk</h3>
            </div>
          </div>
        </div>
        {/* ///////////////////////// */}
        <div className={styles.courseBox}>
          <h2 className={styles.technology}>UI/UX Designing</h2>
          <p className={styles.description}>
            UI/UX design is essential for creating visually appealing and
            user-friendly digital interfaces. UI focuses on aesthetics, while UX
            is concerned with overall user experience. Collaboration between UI
            and UX designers is crucial for cohesive design. The process
            involves user research, wireframing, and iterative testing.
            Well-executed UI/UX design enhances user satisfaction and
            contributes to a products success.
          </p>

          <div className={styles.tutorContent}>
            <div className={styles.buttonBox}>
              <a href="https://magnetic-opal-835.notion.site/UI-UX-Roadmap-07b95de2056a40f5bcd48585fb403b9c?pvs=4">
                <button className={styles.downloadButton}>
                  Download course content
                </button>
              </a>
            </div>
            <div className={styles.tutorName}>
              <h2>
                <span>By: </span>Arslan Niazi
              </h2>
              <h3>20 Session SED</h3>
            </div>
          </div>
        </div>
        {/* ///////////////////////// */}
      </div>
    </div>
  );
};

export default TechSpectrum;
