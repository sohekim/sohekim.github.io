import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <div className="about-container">
        <p className="top">&#9632;</p>
        <p className="zero-p">
          Hi, My name is
          <span className="bold"> Sohee Kim </span>
          and I'm a rising senior at{" "}
          <span className="bold"> Mount Holyoke College </span> double majoring
          in <span className="bold"> Computer Science</span> and Philosophy. I
          study Computer Science to turn ideas into reality and build awesome things. 
        </p>
        <p className="first-p">
          I recently finished my SWE internship at {" "}
          <span className="bold"> Meta </span> 
           in Menlo Park, CA. Before joining Meta, I took a year off and worked
          as a Software Engineer at PurpleLabs, a startup based in Seoul, Korea.
        </p>
        <p className="second-p">
          Here are a few technologies I’ve been working with recently.
        </p>

        <table>
          <tr>
            <th>Language</th>
            <td>Java, Dart, Python, JavaScript, SQL, Hack, Kotlin, HTML/CSS</td>
          </tr>
          <tr>
            <th>Tools</th>
            <td>
              AWS, Docker, Jenkins, Junit, Firebase, Github, TestFlight,
              Mercurial
            </td>
          </tr>
          <tr>
            <th>SDK & Framework</th>
            <td>Spring Boot, Flutter, GraphQL, Apollo Server</td>
          </tr>
          <tr>
            <th>Database</th>
            <td>
              MySQL, MongoDB, Redis, SQLite, Firestore, Amazon RDS, ElastiCache
            </td>
          </tr>
        </table>
        <p className="forth-p">
          You can find my resume{" "}
          <a
            href="https://docs.google.com/document/d/1Lxp32GrTE0sgsmWw1uZ-m6CBtNxp1hU_gz3OOxqDy6M/edit?usp=sharing"
            target="_blank"
            className="resume"
          >
            here
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default AboutPage;
