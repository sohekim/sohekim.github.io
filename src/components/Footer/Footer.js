import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p style={{ fontWeight: 500, fontSize: 13, backgroundColor: "#dbe9f6" }}>
        Sohee Kim Portfolio
      </p>
      <p
        style={{
          fontWeight: 300,
          fontSize: 12,
          paddingTop: "3px",
          backgroundColor: "#dbe9f6",
        }}
      >
        {" "}
        <a
          href="https://www.linkedin.com/in/sohee98/"
          className="linkedIn"
          style={{
            backgroundColor: "#dbe9f6",
          }}
        >
          LinkedIn
        </a>{" "}
        /{" "}
        <a
          href="https://kim66s.medium.com/"
          className="medium"
          style={{
            backgroundColor: "#dbe9f6",
          }}
        >
          Medium
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/sohekim"
          className="github"
          style={{
            backgroundColor: "#dbe9f6",
          }}
        >
          Github
        </a>{" "}
        {" "}
        {/* <a
          href="https://google.com"
          className="email"
          style={{
            backgroundColor: "#dbe9f6",
          }}
        >
          Email
        </a> */}
      </p>
    </footer>
  );
}

export default Footer;
